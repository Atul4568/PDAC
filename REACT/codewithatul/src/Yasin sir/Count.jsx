import React, { useState } from "react";

export const Count=()=>{
    const [count,setCount]=useState(5);

    const handleInc=()=>{
      count < 30 &&  setCount(count + 5);
    }
      const handleDec = () => {
        count > 5 && setCount(count - 5);
    }

    
    return(
        
        <div>
            <center>
            <h1>Counter</h1>
            <button onClick={handleInc}>+</button>
            <h1>{count}</h1>
            <button onClick={handleDec}>-</button>
        </center>
        </div>
    )
}