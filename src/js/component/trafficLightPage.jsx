import React, { useState } from "react";
import TrafficLight from "./trafficLight.jsx";
import TrafficLightII from "./trafficLightII.jsx";


//create your first component
const TrafficLightPage = () => {
    const[lightsProps, setLightsProps] = useState(["red", "yellow", "green"])

    
    const purpleToggle = (prev) => {
        if (!lightsProps.includes("fuchsia")) {
            setLightsProps((prev) => [...prev, "fuchsia"]);
        } else {
            setLightsProps(() => ["red", "yellow", "green"]);
        }
        console.log(lightsProps);
    }

	return (
		<div>
			<div className="bg-black m-auto py-3 mt-2 rounded-5 d-flex justify-content-center" style={{width: "25vw"}}>
				<button className="btn btn-secondary btn-lg m-2">Cycle</button>
				<button className="btn btn-secondary btn-lg m-2" onClick={purpleToggle}>Purple</button>
			</div>
            <div className="d-flex justify-content-around">
                <TrafficLight lights={lightsProps} />
                <TrafficLightII />
            </div>
		</div>
	);
};

export default TrafficLightPage;