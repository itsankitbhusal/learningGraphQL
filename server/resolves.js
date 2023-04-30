import { quotes, users } from "./fakedb.js"
import { randomBytes } from "crypto"
import "dotenv/config"

import User from "./Models/User.js"
import Quotes from "./Models/Quotes.js"

import bcrypt from "bcryptjs"

import jwt from "jsonwebtoken"


const resolvers = {
    Query: {
        users: async () => await User.findAll(),
        user: async (_, { id }) => await User.findOne({ where: { id } }),
        quotes: async () => {
            const response = await Quotes.findAll({
                include: [{
                    model: User,
                    attributes: ['email']
                }]
            });

            const result = response.map(quote => {
                const parent = quote.dataValues;
                const child = parent.User.dataValues;
                return {
                    name: parent.name,
                    by: parent.by,
                    user: {
                        email: child.email
                    }
                }
            });
            return result;
        },
        iquote: async (_, { by }) => await Quotes.findAll({ where: { by } }),

        // find user for profile section
        myProfile: async (_, args, { userId }) => {
            if (!userId) throw new Error("You must be logged in!!");
            return await User.findOne({ where: { id: userId } });
        }
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
        },
        createQuote: async (_, { name }, { userId }) => {
            if (!userId) throw new Error("You must be logged in!!");
            // passed userid from middleware

            await Quotes.create({
                name,
                by: userId
            });

            return "Quotes saved!!"
        }
    }
}


export default resolvers;