import { useState } from "react";

export const ColortoBall=()=>{
    const [name,setName]=useState("")
    const [show,setShow]=useState("")

    const handleSet=()=>{
        setShow(name)
    
    }
    const handleReset=()=>{
        setShow("")
        setName("")
    
    }
    return(
        <div className="colorBox">
        <h1>Apply Color to Ball</h1>
        <input  value={name} onChange={e=>setName(e.target.value)} type="color"/>
        <button  onClick={handleSet}>Set Color</button>
        <button  onClick={handleReset}>Reset Color</button> <br />
        <button className="box" style={{backgroundColor:`${show}`}}></button>
        <h2>show color code {show}</h2>
        </div>
        
    )
}