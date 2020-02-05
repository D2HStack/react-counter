import React from "react";

function Button(props) {
  let { name, onEvent, render } = props;
  return (
    <>
      <button className={render} onClick={onEvent}>
        {name}
      </button>
    </>
  );
}

export default Button;
