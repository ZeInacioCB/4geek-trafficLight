//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import TrafficLight from "./component/trafficLight.jsx";
import TrafficLightPage from "./component/trafficLightPage.jsx";

//render your react application
ReactDOM.render(
    <TrafficLightPage />, 
    document.querySelector("#app")
);
