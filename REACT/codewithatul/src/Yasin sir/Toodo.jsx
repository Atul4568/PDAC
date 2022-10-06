import React, { useState } from "react";

export const Toodo=()=>{
    const [text,setText]=useState("");
    const [list,setList]=useState([]);

    const handleSubmit=(item)=>{
        setList([...list,text])
        setText("")
    }
    const handleDel=()=>{
        const filtred=list.filter((elem,i)=> !elem===i)
        setList(filtred);
    }
    return(
        <div>
            <center>
            <h1>Toodo List</h1>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
            {list.map((item,index)=>{
                return(
                    <div>
                        <p>{item}</p>
                        <button onClick={()=>handleDel(item)}>Delete</button>
                    </div>
                    
                )
            })
            }
            </center>
        </div>
    )
}