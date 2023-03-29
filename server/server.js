import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import typeDefs from "./schemaGql.js"

import dbConnection from "./Models/db.js"

// models
import "./Models/Quotes.js"
import "./Models/User.js"
// resolvers
import resolvers from "./resolves.js"



const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
})


dbConnection.authenticate()
dbConnection.sync(true);
// after creating connection we need to import models and than only resolvers


server.listen().then(({ url }) => {

    console.log(`🚀 Server ready at ${url}`)
})