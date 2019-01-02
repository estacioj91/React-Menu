import React from "react";
import {render} from "react-dom";
import App from "./components/App"
import Router from "./components/Router"
import "./css/style.css";

//use capital for component classes

render(<Router/>, document.querySelector("#main"));