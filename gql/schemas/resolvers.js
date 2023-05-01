import _ from "lodash"

import { userList, movieList } from "../fakedb.js"


const resolvers = {
    Query: {
        // USER RESOLVERS
        users() {
            return userList;
        },
        user: (parent, args) => {
            const id = args.id;
            const user = _.find(userList, { id: +id });
            return user;
        },
        // MOVIE RESOLVERS
        movies: () => {
            return movieList;
        },
        movie: (parent, { name }) => {
            return _.find(movieList, { name })
        }
    },
    User: {
        favoriteMovies: () => {
            return _.filter(
                movieList,
                (movie) => {
                    movie.yearOfPublication >= 1960 && movie.yearOfPublication <= 2020
                }
            );
        }
    },
    Mutation: {
        createUser: (parent, { user }) => {
            const lastId = userList[userList.length - 1].id;
            user.id = lastId + 1;
            userList.push(user);
            return user;
        },
        updateUsername: (parent, { input }) => {
            const { id, newUsername } = input;
            let userUpdated;
            userList.forEach((user) => {
                if (user.id == +id) {
                    user.username = newUsername;
                    userUpdated = user;
                }
            })
            return userUpdated;
        },
        deleteUser: (parent, { id }) => {

            _.remove(userList, (user) => {
                user.id == Number(id)
            });
            return null;
        }
    }
}

export default resolvers;