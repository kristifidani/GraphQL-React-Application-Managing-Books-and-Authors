import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import { getBooksQuery, deleteBookMutation } from "../queries/queries";

// components
import BookDetail from "./BookDetail";
import UpdateBookForm from "./UpdateBook";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  onDeleteClick(id) {
    this.props.deleteBookMutation({
      variables: {
        id: id
      },
      refetchQueries: [{ query: getBooksQuery }]
    });
  }

  displayBooks() {
    var data = this.props.getBooksQuery;
    if (data.loading) {
      return <div>Loading books...</div>;
    } else {
      return data.books.map(book => {
        return (
          <div className="list-group list-group-flush mt-3 ml-3" key={book.id}>
            <div> 
            <h4
              onClick={e => this.setState({ selected: book.id })}
            >
              {book.name}{" "}
            </h4>
            <ul className="list-inline">
              <li className="list-inline-item">
                <button
                  className="btn btn-outline-primary btn-outline-danger"
                  onClick={this.onDeleteClick.bind(this, book.id)}
                >
                  Delete
                </button>
              </li>
              <li className="list-inline-item">
                <UpdateBookForm
                  name={book.name}
                  genre={book.genre}
                  bookId={book.id}
                />
              </li>
            </ul>
            </div>
          </div>
          
        );
      });
    }
  }
  render() {
    return (
      <div className='row'>
        <ul className='col-6'>{this.displayBooks()}</ul>
        <div className='col-6 bg-info'>
        <BookDetail bookId={this.state.selected} />
        </div>
      </div>
    );
  }
}

export default compose(
  graphql(getBooksQuery, { name: "getBooksQuery" }),
  graphql(deleteBookMutation, { name: "deleteBookMutation" })
)(BookList);