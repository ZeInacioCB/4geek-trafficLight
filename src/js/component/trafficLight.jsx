import React, { useState, useEffect } from "react";
import Light from "./light.jsx";


//create your first component
const TrafficLight = (props) => {
	const [lightsObject, setLightsObject] = useState({
		"red": true,
		"yellow": false,
		"lightgreen": false
	});	

	useEffect(() => {	
		const interval = setInterval(() => {
			// defining the variables to get the current and next colors
			let displayedColors = Object.keys(lightsObject);
			let currentColorIndex, nextColorIndex;
			
	
			// loop to find the value index values depending on which light is currently on (aka true)
			for (const color in lightsObject) {
				if (lightsObject[color]) {
					currentColorIndex = displayedColors.indexOf(color);
					nextColorIndex = currentColorIndex + 1;
					if (nextColorIndex >= displayedColors.length) nextColorIndex = 0;
				} 
			};
		
			// another loop to define the new state every 3s
			let newState = {};
			let newLightedColor = displayedColors[nextColorIndex];
			for (const color in lightsObject) {
				if (color == newLightedColor) {
					newState[color] = true;
				} else {
					newState[color] = false;
				}
			};
			setLightsObject(newState);
			
		  }, 3000);
		  return () => clearInterval(interval);
	  }, [lightsObject]);


	// handling the light click to turn them on and off
	const clickHandler = (event) => {
		// defining the key color that is being clicked using event.target
		const keyColor = event.target.attributes.name.value;
		// defining the variable that will contain the new state
		const newState = {};
		// looping through all objects, turning on the clicked color and turning off all the others
		for (const color in lightsObject) {
			if (keyColor === color) {
				newState[color] = true;
			} else {
				newState[color] = false;
			}
		};
		// setting the new state with the newly created object
		setLightsObject(newState);
	};

	// handling the purple button to show and hide the purple color
	const purpleToggle = () => {
        if (!Object.keys(lightsObject).includes("fuchsia")) {
            setLightsObject((prev) => ({
                ...prev,
                "fuchsia": false
            }));
        } else {
            setLightsObject(() => ({
				"red": true,
				"yellow": false,
				"lightgreen": false
			}));
        }
    }

	// builduuing the trafficLight component for all the colors available	
	let lightsComponentBuilder = Object.keys(lightsObject).map((colorName) => {
		return <Light key={colorName} color={colorName} name={colorName} lightenUp={lightsObject[colorName]} onClick={clickHandler}  />
	});

	return (
		<div>
			<div className="bg-black m-auto py-3 mt-2 rounded-5 d-flex justify-content-center" style={{width: "25vw"}}>
				<button className="btn btn-secondary btn-lg m-2" onClick={purpleToggle}>Purple</button>
			</div>
			<div className="bg-black m-auto py-4 mt-2 rounded-5" style={{width: "25vw"}}>
				{lightsComponentBuilder}
			</div>
		</div>
	);
};

export default TrafficLight;

	/*
	// clickHandler to toggle between lights On & Off without concerning other lights
	const clickHandler = (event) => {
		// defining the key color that is being clicked using event.target
		const keyColor = event.target.attributes.name.value;
		// defining the new updated variable
		const updatedValue = {};
		// set the updated variable to toggled value
		lightsObject[keyColor] ? updatedValue[keyColor] = false : updatedValue[keyColor] = true;
		
		// build the new object
		setLightsObject((prev) => ({
			...prev,
			...updatedValue
		}));
	};
	*/