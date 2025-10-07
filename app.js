import React from "react";
import ReactDOM from "react-dom/client";

//const heading=React.createElement("h1",{},"hello world form react");
//  const root= ReactDOM.createRoot(document.getElementById("root"));
//  root.render(heading)

//React.creatElement=> Object => HTMLElement(render)
// const heading= React.createElement("h1",{id:"heading"},"React");

const jsxHeading = (
  <h1 className="head" tabIndex="1">
    Namaste React using jsx
  </h1>
);

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
