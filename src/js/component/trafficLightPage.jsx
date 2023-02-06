import React, { useState, useEffect } from "react";
import Light from "./light.jsx";


//create your first component
const TrafficLight = () => {
	const [redLight, setRedLight] = useState(false);
	const [yellowLight, setYellowLight] = useState(false);
	const [greenLight, setGreenLight] = useState(false);
	const [color, setColor] = useState("red");
	const [purpleDisplay, setPurpleDisplay] = useState({display: "none"});

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

	useEffect(() => {
		console.log(`In 3s it will change to: ${color}`);
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
			console.log(`Current IntervalID: ${interval}`)
		  }, 3000);
		  return () => {
			console.log(`Clearing IntervalID: ${interval}`)
			clearInterval(interval)
			};
	  }, [color]);

	  const displayPurpleToggler = () => {
		if (purpleDisplay.display == "none") {
			setPurpleDisplay({display: "block"})
		} else {
			setPurpleDisplay({display: "none"})
		}
	  }

	return (
		<div>
			<div className="bg-black m-auto py-3 mt-2 rounded-5 d-flex justify-content-center" style={{width: "25vw"}}>
				<button className="btn btn-secondary btn-lg m-2">Cycle</button>
				<button className="btn btn-secondary btn-lg m-2" onClick={displayPurpleToggler} >Purple</button>
			</div>
			<div className="bg-black m-auto py-4 mt-2 rounded-5" style={{width: "25vw"}}>
				<Light color={"red"} lightenUp={redLight} onClick={redLightToggleHandler} />
				<Light color={"yellow"} lightenUp={yellowLight} onClick={yellowLightToggleHandler}  />
				<Light color={"lightgreen"} lightenUp={greenLight} onClick={greenLightToggleHandler}   />
				<div style={purpleDisplay} >
					<Light color={"fuchsia"} lightenUp={greenLight} onClick={greenLightToggleHandler}  />
				</div>
			</div>
		</div>
	);
};

export default TrafficLight;