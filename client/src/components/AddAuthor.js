import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import {
  addAuthorMutation,
  getAuthorsQuery
} from "../queries/queries";

class AddAuthor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: ""
    };
  }

  submitForm(e) {
    e.preventDefault();
    let name = this.state.name;
    let age = this.state.age;

    if (!name || !age) {
      return(alert("All fields are required"));
    } else {     
    // use the addBookMutation
    this.props.addAuthorMutation({
      variables: {
        name: this.state.name,
        age: this.state.age
      },
      refetchQueries: [{ query: getAuthorsQuery }]
    });
    this.setState({ name: "", age: ""});
  }
}
  render() {
    return (
      <form onSubmit={this.submitForm.bind(this)} >
        
        <h3 className='font-weight-bold'> Add Author </h3>
        <div>
          <label>Author name:</label>
          <input
            className ='form-control'
            type="text"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        <div >
          <label>Age:</label>
          <input
            className ='form-control'
            type="number"
            value={this.state.age}
            onChange={e => this.setState({ age: e.target.value })}
          />
        </div>
        <button className='btn btn-outline-primary bg-dark text-white mt-3'>Add</button>
      </form>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addAuthorMutation, { name: "addAuthorMutation" })
)(AddAuthor);
