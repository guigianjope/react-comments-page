import React from "react";

function ChildComponent(props) {
  return (
    <button
      onClick={() => {
        props.callBackfunction(true);
      }}
    >
      Change Text
    </button>
  );
}

export default ChildComponent;
