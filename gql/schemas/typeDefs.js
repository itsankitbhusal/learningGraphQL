import { gql } from "apollo-server";

const typeDefs = gql`
    type User{
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
        favoriteMovies: [Movie]
    }
    type Movie{
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheaters: Boolean!
    }
    type Query {
        users: [User!]
        user(id: ID!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!
    }
    input createUserInput{
        name: String!
        username: String!
        age: Int = 18
        nationality: Nationality = Nepalese
    }
    input UpdateUsernameInput{
    id: ID!
    newUsername: String!
    }
    type Mutation{
        createUser(user: createUserInput!): User
        updateUsername(input: UpdateUsernameInput!): User
        deleteUser(id: ID!): User
    }
    
    enum Nationality{
        American
        British
        Canadian
        Australian
        NewZealander
        SouthAfrican
        Chinese
        Japanese
        Korean
        Nepalese
    }
`;

export default typeDefs;