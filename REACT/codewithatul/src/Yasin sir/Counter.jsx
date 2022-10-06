import React,{useState} from "react";

export const Counter=()=>{
    const [count,setCount]=useState(0)
    const handleInc=()=>{
        count<10 && setCount(count+1);
        count == 10 && alert("This is max limit");

    };
    const handleDec=()=>{
      count>0 &&  setCount(count-1)
    }
    return(
       <center> <div className="sub">
            <h1>COUNTER</h1>
            <h1>{count}</h1>
            <button  onClick={handleInc}>Increment</button> 
            <button onClick={handleDec}>Decrement</button> <br />
            <button onClick={()=> count > 0 && setCount(count-2)}>Dec</button>
            <button onClick={()=> count < 10 && setCount (count+2)}>Inc</button>
        </div></center>
    )
}

// style={{display:"none"}}--button