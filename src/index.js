import React from "react";
import ReactDOM from "react-dom";

const CustomStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};


ReactDOM.render(
  <div>
   <h1 style={CustomStyle}>Hello World!</h1>,
    <h1>Hello World!</h1>
    <p>This is a paragraph.</p>
  </div>,
  document.getElementById("root")
);
