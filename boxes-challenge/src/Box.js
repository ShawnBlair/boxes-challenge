import React from "react"

export default function Box(props){
    const color = {backgroundColor: props.on? "black":"transparent"}
    return(
        <div className="box" onClick={props.handleClick} style={color}></div>
    )
}