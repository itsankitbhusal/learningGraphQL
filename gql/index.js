import { ApolloServer } from "apollo-server";


import typeDefs from "./schemas/typeDefs.js";
import resolvers from "./schemas/resolvers.js";

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`
     🚀Server is running!
      ${url}
    `);
})