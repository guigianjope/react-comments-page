import React from "react";
import { Consumer } from "./Context";

//import uuid from "uuid"; TODO use uuid if you are using visual code

class AddComment extends React.Component {
  state = {
    name: "",
    email: "",
    body: ""
  };

  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = (dispatch, e) => {
    //Todo search about the order of the paramaters
    e.preventDefault();
    const { name, email, body } = this.state;
    const newUser = {
      name,
      email,
      body
    };
    dispatch({ type: "ADD_CONTACT", payload: newUser });
  };

  render() {
    const { name, email, body } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <>
              <h1>Add Comment</h1>
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <label>Name: </label>
                <input
                  type="text"
                  value={name}
                  name="name"
                  placeholder="Enter the name"
                  onChange={this.onChange}
                />
                <br />
                <br />
                <label>Email : </label>
                <input
                  type="email"
                  value={email}
                  name="email"
                  placeholder="Enter the email"
                  onChange={this.onChange}
                />
                <br />
                <br />
                <label>Comment: </label>
                <input
                  type="text"
                  value={body}
                  name="body"
                  placeholder="Comment here"
                  onChange={this.onChange}
                />
                <br />
                <br />
                <input className="btn" type="submit" value="Add Comment" />
              </form>
            </>
          );
        }}
      </Consumer>
    );
  }
}
export default AddComment;
