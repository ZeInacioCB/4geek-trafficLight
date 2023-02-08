import React, { useState, useEffect } from "react";
import Light from "./light.jsx";


//create your first component
const TrafficLightIII = (props) => {

	const [color, setColor] = useState("red");
	const [lightsArr, setLightsArr] = useState([
		{"red": false},
		{"yellow": true},
		{"green": false},
	]);
	

	useEffect(() => {
		//console.log(`In 3s it will change to: ${color}`);
		const interval = setInterval(() => {
			if (color == "red") {
				setColor("yellow");
				setRedLight(true);
				setYellowLight(false);
				setGreenLight(false);
			} else if (color == "yellow") {
				setColor("green");
				setRedLight(false);
				setYellowLight(true);
				setGreenLight(false);
			} else {
				setColor("red");
				setRedLight(false);
				setYellowLight(false);
				setGreenLight(true);
			}
			//console.log(`Current IntervalID: ${interval}`)
		  }, 3000);
		  return () => {
			//console.log(`Clearing IntervalID: ${interval}`)
			clearInterval(interval)
			};
	  }, [color]);


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
	

	let lightsComponentBuilder = lightsArr.map((colorEl) => {
		let colorName = Object.keys(colorEl)[0];
		return <Light key={colorName} color={colorName} name={colorName} lightenUp={colorEl[colorName]} onClick={clickHandler}  />
	});


	return (
		<div>
			<div className="bg-black m-auto py-4 mt-2 rounded-5" style={{width: "25vw"}}>
				{lightsComponentBuilderII}
			</div>
		</div>
	);
};

export default TrafficLightIII;