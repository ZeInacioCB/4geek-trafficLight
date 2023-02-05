import React, { useState, useEffect } from "react";
import Light from "./light.jsx";


//create your first component
const TrafficLight = (props) => {
	const [redLight, setRedLight] = useState(false);
	const [yellowLight, setYellowLight] = useState(false);
	const [greenLight, setGreenLight] = useState(false);
	const [color, setColor] = useState("red")

	const redLightToggleHandler = () => {
		if (!redLight) {
			// set current light colors
			setRedLight(true);
			setYellowLight(false);
			setGreenLight(false);
			// set next color
			setColor("yellow");
		}
	};
	const yellowLightToggleHandler = () => {
		if (!yellowLight) {
			// set current light colors
			setRedLight(false);
			setYellowLight(true);
			setGreenLight(false);
			// set next color
			setColor("green");
		}
	};
	const greenLightToggleHandler = () => {
		if (!greenLight) {
			// set current light colors
			setRedLight(false);
			setYellowLight(false);
			setGreenLight(true);
			// set next color
			setColor("red");
		}
	};


	// Using the setInterval outside useEffect kind of works, however, it multiplies the interval creating infinite loop
	/*
	const interval = setInterval(() => {
		if (trafficLights == "red") {
			console.log(trafficLights);
			setTrafficLights("yellow");
			setRedLight(false);
			setYellowLight(true);
			setGreenLight(false);
		} else if (trafficLights == "yellow") {
			console.log(trafficLights);
			setTrafficLights("green");
			setRedLight(false);
			setYellowLight(false);
			setGreenLight(true);
		} else {
			console.log(trafficLights);
			setTrafficLights("red");
			setRedLight(true);
			setYellowLight(false);
			setGreenLight(false);
		}
	  }, 3000);
	*/

	useEffect(() => {
		console.log(`In 3s it will change to: ${color}`);
		const interval = setInterval(() => {
			if (color == "red") {
				console.log(`Current color: ${color} `);
				console.log(`With intervalID: ${interval}`);
				setColor("yellow");
				setRedLight(true);
				setYellowLight(false);
				setGreenLight(false);
			} else if (color == "yellow") {
				console.log(`Current color: ${color} `);
				console.log(`With intervalID: ${interval}`);
				setColor("green");
				setRedLight(false);
				setYellowLight(true);
				setGreenLight(false);
			} else {
				console.log(`Current color: ${color} `);
				console.log(`With intervalID: ${interval}`);
				setColor("red");
				setRedLight(false);
				setYellowLight(false);
				setGreenLight(true);
			}
			console.log(`Current IntervalID: ${interval}`)
		  }, 3000);
		  return () => {
			console.log(`clearing IntervalID: ${interval}`)
			clearInterval(interval)
			};
	  }, [color]);

	return (
		<div className="bg-black m-auto py-4 mt-2 rounded-5" style={{width: "25rem"}}>
			<Light color={"red"} lightenUp={redLight} onClick={redLightToggleHandler} />
			<Light color={"yellow"} lightenUp={yellowLight} onClick={yellowLightToggleHandler}  />
			<Light color={"green"} lightenUp={greenLight} onClick={greenLightToggleHandler}   />
		</div>
	);
};

export default TrafficLight;
