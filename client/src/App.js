import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// components
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import AddAuthor from "./components/AddAuthor";

// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <div className='bg-dark text-white'>
          <BookList />
          </div>

          <div className='row'>
            <div className='col-6 m-3'>
            <AddBook/>
            </div>
            <div className='col-5 mt-3'>
            <AddAuthor />
            </div>
          </div>
          
         
        </div>
      </ApolloProvider>
    );
  }
}
export default App;
