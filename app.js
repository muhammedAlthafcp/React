
import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => object => HTMlElement(render)
 
const heading = React.createElement(
  "h1",{id:"hadding"},"hello"
);

const jsx = <h1 id="hadding"> hello Althaf CP</h1> 


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)
root.render(jsx)


