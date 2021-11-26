import React from "react";

function SpecialButton (props) {
    console.log(props);
    return (<button class="test" style={{backgroundColor:props.color}} type="button">{props.title}</button>)
};

export default SpecialButton;