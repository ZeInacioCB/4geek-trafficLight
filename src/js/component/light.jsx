import React from "react";

//create your first component
const Light = (props) => {

    let lightenUp;
    props.lightenUp ? lightenUp = "lightOn" : lightenUp = "lightOff";

    const lightColor = {
        color: `${props.color}`,
        background: `${props.color}`
    }

	return <div className={`text-center mx-auto rounded-circle lightStyle ${lightenUp}`} style={lightColor} onClick={props.onClick} />
};

export default Light;