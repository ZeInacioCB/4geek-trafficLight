import React from "react";

//create your first component
const Light = (props) => {

    let lightenUp;
    props.lightenUp ? lightenUp = 1 : lightenUp = 0.25;

    const lightStyle = {
        height: "15rem",
        width: "15rem",
        // borderRadius: "10% 30% 50% 70%",
        color: `${props.color}`,
        background: `${props.color}`,
        margin: "1rem",
        opacity: `${lightenUp}`
    }

	return <div className="text-center mx-auto rounded-circle" style={lightStyle} onClick={props.onClick} />
};

export default Light;