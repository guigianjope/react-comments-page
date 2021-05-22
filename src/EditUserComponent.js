import React from "react";

function EditUser(props) {
  const { name, email, body } = props;
  return (
    <>
      <label>Name:</label>
      <input type="text" value={name} />
      <br />
      <label>Email:</label>
      <input type="email" value={email} />
      <br />
      <label>body:</label>
      <input type="text" value={body} />
      <br />
      <button
        onClick={() => {
          props.editUserFunction();
        }}
      >
        Save
      </button>

      <hr />
    </>
  );
}

export default EditUser;
