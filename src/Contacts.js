import React from "react";

import EditUser from "./EditUserComponent";
import { Consumer } from "./Context"; // Import Consumer from Context.js

import User from "./user.png";

class Contacts extends React.Component {
  state = {
    editeUser: false
  };
  editUserState = () => {
    this.setState({
      editeUser: !this.state.editeUser
    });
  };

  deleteUser = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { editeUser } = this.state;
    return (
      //Value is coming from state in Context.js
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <div>
              <center>
                <h1>Comments</h1>
              </center>
              {contacts.map((contact, index) => (
                <div className="card" key={index}>
                  {editeUser ? (
                    <EditUser editUserFunction={this.editUserState} />
                  ) : (
                    <div className="card-body">
                      <div className="user-info">
                        <img className="user-image" src={User} alt="user profile" />
                        <h5 className="card-title">{contact.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          {contact.email}
                        </h6>
                      </div>
                      <p className="card-text">{contact.body}</p>
                      <button className="btn"
                        onClick={() => {
                          this.deleteUser(contact.id, value.dispatch);
                        }}
                      >
                        Delete comment
                      </button>
                      <button className="btn"
                        onClick={(e) => {
                          this.setState({
                            editeUser: !this.state.editeUser
                          });
                        }}
                      >
                        {" "}
                        Edit Comment
                      </button>
                      <hr />
                    </div>
                  )}
                </div>
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Contacts;
