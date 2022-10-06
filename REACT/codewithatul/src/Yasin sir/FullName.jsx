import { useState } from "react";

export const FullName=()=>{
    const [firstname,setFirstName]=useState();
    const [middlename,setMiddleName]=useState();
    const [lastname,setLastName]=useState();
    const [firstshow,setFirstShow]=useState();
    const [middleshow,setMiddleShow]=useState();
    const [lastshow,setLastShow]=useState();
    const[isActive,setIsActive]=useState();
    const[inActive,setInActive]=useState();
    
    const handleAdd=()=>{
        setIsActive(current => !current);
        setIsActive(true);
        setFirstShow(firstname)
        setMiddleShow(middlename)
        setLastShow(lastname)
    }
  
    const handleReset=()=>{
        setInActive(current => !current);
        setIsActive(true);
        setFirstShow("")
        setMiddleShow("")
        setLastShow("")
        setFirstName("")
        setMiddleName("")
        setLastName("")
        setIsActive()

    }
   
    return(
        <div>
                
            <div className="sub">
            
            <center>
             <input  className="Fname" value={firstname} onChange={e=>setFirstName(e.target.value)} type="text" placeholder="First Name"/>
             <input className="Fname" value={middlename} onChange={e=>setMiddleName(e.target.value)} type="text" placeholder="Middle Name" />
             <input className="Fname" value={lastname} onChange={e=>setLastName(e.target.value)} type="text" placeholder="Last Name" /> <br /> <br />
            <button className="Fname" onClick={handleAdd} style={{backgroundColor: isActive ? "green" : "red"}}>Show</button>
            <button className="Fname" onClick={handleReset}style={{backgroundColor: inActive ? "red" : "green"}}>Reset</button>
            </center>
            <p><b> Preview:</b> {firstname} {middlename} {lastname}</p>
            <p><strong> Full Name:</strong> {firstshow} {middleshow} {lastshow}</p>
        
            </div>

        </div>
    )
}