import React from "react";
import ReactDOM from "react-dom";

const fname = "soumyaditya";
const lname = "saha";

var randomNumber = Math.floor(Math.random() * 6);

ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    <p>a random nnumber is {randomNumber}</p>
  </div>,
  document.getElementById("root")
);
