import React from "react";

const Input = (props) => {
    return(
        <div>
            <input onChange={props.onChange} type="text" />
        </div>
    )
}
export  default Input