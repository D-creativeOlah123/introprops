import React from "react";

const Inputvalue = ({value,className,onChange,type,placeholder}) => {
    return(
        <div>
            <input className="className" onChange={onChange} type={type} value={value} placeholder={placeholder} />
         
        </div>
    )
}
export  default Inputvalue