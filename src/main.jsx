import React from "react";
// import ReactDOM from "react-dom"; //standard way to render React applications for a long time
import { createRoot } from "react-dom/client"; // new API introduced in React 18 that provides a more flexible and concurrent rendering model
import { Animals } from "./components/Animals.jsx";

import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(<>
<Animals/>
</>);
