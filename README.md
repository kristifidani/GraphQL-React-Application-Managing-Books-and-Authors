# GraphQL-React Project Overview

- This project is a full stack application where I use React for the front-end and GraphQL for the back-end. 
- It does not have a user register and authentication process. 
- Users can add books + authors through two forms and have them displayed.  
- They can click on books and have more detailed information.

### Back-End Server Side

- I initialized a JSON file with npm init, completed the questions and installed packages as dependencies. 
- It is still an Express application but I used GraphQL for the API.  
- I have a “models” folder with authors and books files used for Mongo DB model schemas. 
- I created the server and established a connection with Mongo DB. 
- After I had to bind Express with GraphQL with 'express-graphql' package. 
- All these configurations happen at app.js file which is the main file of the server application.
- Relationships and functionalities happen at schema.js file in “schema” folder. 
- I declared a GraphQL object type for books and one for authors and connected them by the IDs.
- This schema must relate to the Mongo DB schema with same properties. 
- I could now create Root Queries such as getting all books in total, all authors, all books related to one author etc. 
- Additionally, Mutations such as adding new author, new book, update, delete in the form of queries without multiple requests. 

### Front-End Client Side

- I created my React application through create-react-app command which automatically generates a basic application. 
- I used Apollo Client to link React application with the server side.
- I created a “query” folder with queries.js file where I create my queries depending on my GraphQL schema created in the server and use mutations. 
- I export all these variables containing queries and mutations and use them in my React components, where I pass them the required parameters to work properly. 

### Results

- Users can view a list of books available in the website and can click each of them for more information on the book and author.
- Since the application is an open source, users can add authors and books freely. 
- They can modify and delete existing books in case they find mismatching information about them. 
- The screen is split in two parts. First part shows the books as blocks with update and delete buttons. 
- Second part shows detailed information when books are clicked. 
- It is very comfortable since it doesn’t redirect users to another pages.
