const { gql } = require('apollo-server-express');

module.exports = gql`
    type Query {
        author(id: ID!): Person
        book(id: ID!): Book
        books: [Book]
    }

    type Person {
        id: ID!
        name: String!
        age: Int!
        books: [Book]
    }

    type Book {
        id: ID!
        name: String!
        category: String!
        author: Person 
    }
`