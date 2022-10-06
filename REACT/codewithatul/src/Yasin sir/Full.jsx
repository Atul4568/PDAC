import React, { useState } from "react";

export const Full=()=>{
    const[firstname,setFirstName]=useState("");
    const[middlename,setMiddleName]=useState("");
    const[lastname,setLastName]=useState("");
    const[data,setData]=useState("");

    const handleAdd=()=>{
        setData(firstname+" "+middlename+" "+lastname)
    }
   
    
    return(
        <div>
            <input type="text"  placeholder="First Name:" onChange={(e)=>setFirstName(e.target.value)} />
            <input type="text" placeholder="Middle Name:" onChange={(e)=>setMiddleName(e.target.value)}/>
            <input type="text" placeholder="Last Name:" onChange={(e)=>setLastName(e.target.value)}/>
            <p >Preview: {firstname} {middlename} {lastname} </p>
            <p><b> Full Name:</b>{data}</p>
            <button onClick={handleAdd} style={{backgroundColor:lastname.length>3? "red":"yellow"}}>Show</button>
            <button onClick={()=>setData("")}>Reset</button>
            
        </div>
    )
}