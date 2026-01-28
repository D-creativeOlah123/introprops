 
import { useState } from "react";

const Display = ({allmember}) =>{
    return(
        <div>
            {
            allmember && allmember.map((user)=>(
                <h1>{user}</h1>
                
                ))
            }
        </div>


    )


}

export default Display