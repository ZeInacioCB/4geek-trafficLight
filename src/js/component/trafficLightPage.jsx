import React, { useState } from "react";
import TrafficLight from "./trafficLight.jsx";
import TrafficLightII from "./trafficLightII.jsx";


//create your first component
const TrafficLightPage = () => { 
	return (
		<div>
            <div className="d-flex justify-content-around">
                <TrafficLight  />
                <TrafficLightII />
            </div>
		</div>
	);
};

export default TrafficLightPage;