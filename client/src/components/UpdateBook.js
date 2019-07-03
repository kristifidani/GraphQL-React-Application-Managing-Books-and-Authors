import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import { getBooksQuery, updateBookMutation } from "../queries/queries";

class UpdateBookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toBeUpdated: false,
      name: this.props.name,
      genre: this.props.genre
    };
  }
  updateBook = e => {
    e.preventDefault();
    this.setState({ toBeUpdated: !this.state.toBeUpdated });
  };
  handleBookUpdate = e => {
    e.preventDefault();

    this.props.updateBookMutation({
      variables: {
        id: this.props.bookId,
        name: this.state.name,
        genre: this.state.genre
      },
      refetchQueries: [{ query: getBooksQuery }]
    });

    this.setState({
      toBeUpdated: !this.state.toBeUpdated
    });
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };
  handleGenreChange = e => {
    this.setState({ genre: e.target.value });
  };

  render() {
    return (
      <div>
        <button className='btn btn-outline-primary btn-outline-success' onClick={this.updateBook}>update</button>
        {this.state.toBeUpdated ? (
          <form className="list-inline-item" onSubmit={this.handleBookUpdate}>
          <div className="input-group mb-3">
            <input
              className='ml-3 form-control'
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <input
            className='ml-1 form-control'
              type="text"
              value={this.state.genre}
              onChange={this.handleGenreChange}
            />
            <div className="input-group-append">
            <input className='btn btn-outline-primary btn-outline-success' type="submit" value="Finish" />
            </div>
            </div>
          </form>
        ) : null}
      </div>
    );
  }
}

export default compose(
  graphql(getBooksQuery, { name: "getBooksQuery" }),
  graphql(updateBookMutation, { name: "updateBookMutation" })
)(UpdateBookForm);
