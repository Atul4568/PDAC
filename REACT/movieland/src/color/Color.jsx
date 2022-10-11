import React, { useState } from "react";

export const Color=()=>{
    const [color,setColor]=useState("")
    const [show,setShow]=useState("")
    const handleAdd=()=>{
        setShow(color)
    }
    return(
        <div>
            <input value={color} type="color" onChange={e=> setColor(e.target.value)} />
            <button onClick={handleAdd}>Change Color</button>
            <div className="round" style={{backgroundColor: `${show}`}}></div>
        </div>
    )
}