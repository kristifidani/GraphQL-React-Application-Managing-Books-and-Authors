import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

const getBooksQuery = gql`
    {
        books {
            name
            genre
            id
        }
    }
`;

const getBookQuery = gql`
    query GetBook($id: ID){
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }
`;

const addBookMutation = gql`
    mutation AddBook($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            id
        }
    }
`;

const addAuthorMutation = gql`
    mutation AddAuthor($name: String!, $age: String!){
        addAuthor(name: $name, age: $age){
            name
            age
        }
    }
`;


const deleteBookMutation = gql`
    mutation deleteBook($id: ID!){
        deleteBook(id: $id){
            name
            id
        }
    }
`;

const updateBookMutation = gql`
    mutation updateBook($id: ID!, $name: String!, $genre: String!){
        updateBook(id: $id, name: $name, genre: $genre){
            name
            id
        }
    }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation, addAuthorMutation, getBookQuery, deleteBookMutation, updateBookMutation };