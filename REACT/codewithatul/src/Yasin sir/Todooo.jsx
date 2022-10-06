import React,{useState} from "react";

export const Todooo=()=>{
    const [text,setText]=useState();
    const [list,setList]=useState([]);
    const handleAdd=()=>{
        setList([...list,text])
        setText("")
    }
    return(
        <div>
            <h1>Todo list</h1>
            <input type="text" onChange={e=>setText(e.target.value)} />
            <button onClick={()=>handleAdd()}>Add</button>
            {
                list.map((item)=>{
                    return(
                        <h1>{item}</h1>

                    )
                    
                })
            }
        </div>
    )
}