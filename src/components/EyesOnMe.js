import React from "react";

function EyesOnMe() {
  const onFocusHandler = (e) => {
    console.log("Good!");
  };

  const onBluerHandler = (e) => {
    console.log("Hey! Eyes on me!");
  };

  return (
    <div>
      <button onFocus={onFocusHandler} onBlur={onBluerHandler}>
        Eyes on me
      </button>
    </div>
  );
}

export default EyesOnMe;
