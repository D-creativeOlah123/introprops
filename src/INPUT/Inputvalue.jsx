import React from "react";

const Inputvalue = (props) => {
    return(
        <div>
            <input onChange={props.onChange} type={props.type} value={props.value}  />
            <button onClick={props.funct}> {props.text}</button>
        </div>
    )
}
export  default Inputvalue