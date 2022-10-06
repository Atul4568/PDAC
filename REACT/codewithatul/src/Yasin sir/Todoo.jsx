import React, {useState} from "react";

export const Todoo=()=>{
    const [text,setText]=useState();
    const [list,setList]=useState([]);

    const handleAdd=()=>{
        setList([...list,text])
        setText("")
    }
    const handleDel=(index)=>{
        const filtred=list.filter((elem,i)=>i != index)
        setList(filtred);
    }
    return(
        <div>
        <h1>Todoo List</h1>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
        {list.map((item,index)=>{
            return(
                <div>
                    <h1>{item}</h1>
                    <button onClick={()=>handleDel(index)}>Delete</button>
                </div>
            )
        })
        }
        </div>
    )
}