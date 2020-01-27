const authors = [
    {id: "1", name: "John kennedy", age: 23},
    {id: "2", name: "M. Raishal", age: 29},
    {id: "3", name: "Akihato", age: 17},
    {id: "4", name: "Rayleigh M. Jahmi", age: 49}
]

const books = [
    {id: "1", name: "How to learn faster?", category: "Education", userId: "2"},
    {id: "2", name: "Being great or good?", category: "Inspiration", userId: "2"},
]

module.exports = {
    Query: {
        author: (_, { id }, context) => {
            return util.find(authors, { id })
        },
        book: (_, { id }, context) => {
            return util.find(books, { id })
        },
        books: (_, { id }, context) => {
            return books
        },
    },
    Person: {
        books: (parent) => {
            return util.filter(books, { userId: parent.id })
        },  
    },
    Book: {
        author: (parent) => {
            return util.find(authors, { id: parent.userId })
        }
    },
}