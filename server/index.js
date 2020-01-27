// Global setup
global.util = require("lodash")
global.reqlib = (path) => {
    return require(require('app-root-path') + `/${path}`);
}

require("dotenv").config()

// Server setup
const express = require('express')
const app = express()

const { ApolloServer } = require("apollo-server-express")
const { typeDefs, resolvers} = reqlib("graphql")
const settings = {
    'editor.theme': 'light',
    'editor.fontSize': 16,
    'editor.cursorShape': 'line',
  };
const server = new ApolloServer({
    playground: { settings },
    typeDefs,
    resolvers
})

server.applyMiddleware({ app })
app.listen({ port: process.env.PORT }, () => {
    console.log(`Server is up at http://localhost:${process.env.PORT}`)
})
