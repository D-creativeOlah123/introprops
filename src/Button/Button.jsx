import React from "react";

const Button = (props) => {
    return(
        <>
        <button onClick={props.func} className={props.sty}>{props.text}</button>
        </>
    )
}
export default Button