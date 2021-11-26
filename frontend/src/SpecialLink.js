import React from "react";

function SpecialLink (props) {
    console.log(props);
    return (<a style={{backgroundColor:props.color}} href={props.href}>{props.title}</a>)
};

export default SpecialLink;