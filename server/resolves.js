import { quotes, users } from "./fakedb.js"
import { randomBytes } from "crypto"
import "dotenv/config"

import User from "./Models/User.js"

import bcrypt from "bcryptjs"

import jwt from "jsonwebtoken"

const resolvers = {
    Query: {
        users: () => users,
        user: (_, { id }) => users.find(user => user.id == id),
        quotes: () => quotes,
        iquote: (_, { by }) => quotes.filter(quote => quote.by == by),
    },
    User: {
        quotes: (ur) => quotes.filter(quote => quote.by == ur.id)
    },
    Mutation: {
        signUpUser: async (_, { userNew }) => {
            const user = await User.findOne({ where: { email: userNew.email } });
            if (user) {
                throw new Error("User already exists!!");
            }
            const hashedPassword = await bcrypt.hash(userNew.password, 10);

            const response = await User.create({
                ...userNew,
                password: hashedPassword
            });

            return await response.save();

        },
        signInUser: async (_, { userSignIn }) => {
            const user = await User.findOne({ where: { email: userSignIn.email } });
            if (user) {
                const doMatch = await bcrypt.compare(userSignIn.password, user.password);
                if (doMatch) {
                    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
                    return { token };
                } else {
                    throw new Error("Email or password not valid!!");
                }
            } else {
                throw new Error("User doesn't exists");
            }
        }
    }
}


export default resolvers;