# GraphQL-React Application: Managing Books and Authors

Welcome to the README for my GraphQL-React project! This full stack application combines the power of **React** for the front-end and **GraphQL** for the back-end to create an interactive platform for managing books and authors.

## Technologies Overview

- **React**: The front-end is built using the **React** library, known for its component-based architecture and efficient rendering. This allows for the creation of dynamic and responsive user interfaces, enhancing the user experience.

- **GraphQL**: The back-end is powered by **GraphQL**, a flexible query language for APIs. Unlike traditional REST APIs, GraphQL enables clients to request exactly the data they need, reducing over-fetching or under-fetching of data. This enhances performance and minimizes unnecessary data transfer.

- **Express**: The **Express** framework is employed to create the server that serves as the backbone of the application. It handles routing, middleware, and provides a solid foundation for integrating different components.

- **MongoDB**: The **MongoDB** database is used to store and manage the data related to authors and books. MongoDB's flexibility and NoSQL structure allow for easy representation of relationships between entities.

- **Apollo Client**: To facilitate communication between the front-end and the GraphQL server, the application uses **Apollo Client**. This library simplifies the process of fetching and managing data from the server, enabling real-time data updates and efficient caching.

## Features

- Users can view a list of books available on the website and access more detailed information about each book and its author.
- The application supports adding new authors and books, enhancing the content available for users.
- Existing books can be updated and deleted, ensuring accurate and relevant information.
- The user interface is designed to provide a seamless experience, with books displayed as blocks containing update and delete buttons.
- Detailed information about books and authors is displayed within the same page, eliminating the need for redirects.

## Back-End: Server Side

The back-end of the application is built using Express and GraphQL, offering a robust foundation for data handling and interactions.

- The server is initialized using the Express framework, with a connection established to MongoDB for data storage.
- The GraphQL API is integrated using the `express-graphql` package, enabling efficient querying and mutation of data.
- The 'models' folder contains schema definitions for authors and books, serving as the basis for MongoDB models.
- The schema for GraphQL is defined in the `schema.js` file within the `schema` folder, specifying relationships and functionalities.
- Object types are declared for books and authors, with connections established using unique identifiers.
- Root queries and mutations are created, allowing users to fetch data and perform actions through single queries.

## Front-End: Client Side

The user interface is developed using React and Apollo Client, creating an interactive and engaging experience.

- The React application is generated using the `create-react-app` command, providing a basic structure to build upon.
- Apollo Client is utilized to connect the React application with the GraphQL server, enabling efficient data retrieval.
- The `query` folder contains a `queries.js` file, where GraphQL queries and mutations are defined based on the server schema.
- Queries and mutations are exported as variables and incorporated into React components to fetch and manipulate data.
- The split-screen layout enhances user experience, displaying both the list of books and detailed information without redirection.

## Usage

1. Ensure you have Node.js and npm installed on your system.
2. Clone this repository: `git clone https://github.com/kristifidani/GraphQL-React-Application-Managing-Books-and-Authors.git`
3. Navigate to the project folder and install dependencies: `cd server && npm install`
4. Set up your MongoDB instance.
5. Start the server: `npm start`
6. Open another terminal window, navigate to the `client` folder, and install client dependencies: `cd client && npm install`
7. Start the React application: `npm start`
