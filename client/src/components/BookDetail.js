import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBookQuery } from "../queries/queries";

class BookDetails extends Component {
  displayBookDetails() {
    const { book } = this.props.data;
    if (book) {
      return (
        <div className='card bg-info mr-3'>
        <h2 className='card-header'>Book/Author Info</h2>
         
          <div className='card-body'>
          <h4 className='card-title'>Title: {book.name}</h4>
          <p className='card-subtitle'>Genre: {book.genre}</p> 
          <p className='card-subtitle'>Author: {book.author.name}</p>  
          <p className='card-subtitle'>Author age: {book.author.age}</p>
          <hr/>
          <h4 className='card-title'>Other books by this author:</h4>
          <ul className='list-inline'>
            {book.author.books.map(item => {
              return <li className='list-inline-item text-break' key={item.id}>-{item.name}</li>;
            })}
          </ul>
          </div>
        </div>
      );
    } else {
      return <div>No book selected...</div>;
    }
  }
  render() {
    return <div>{this.displayBookDetails()}</div>;
  }
}

export default graphql(getBookQuery, {
  options: props => {
    return {
      variables: {
        id: props.bookId
      }
    };
  }
})(BookDetails);
