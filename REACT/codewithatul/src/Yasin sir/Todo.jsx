import React,{useState} from 'react';

export const Todo=()=>{ //Naming Export
    const [text,setText]=useState("")
    const [list,setList]=useState([])
    const [indexNum,setIndexNum]=useState(null)
    const [isEdit,setIsEdit]=useState(false);

    const handleAdd=()=>{
        if(isEdit === true){
            list.splice(indexNum,1,text);
            setText("")
            setIndexNum(null)
            setIsEdit(false)
        }else{
            setList([...list,text]);
            setText("")
        }

    }
    const handleDelete=(index)=>{
        const filtred=list.filter((elem,i)=>i !==  index);
        setList(filtred);
    }
    const handleEdit=(item,index)=>{
    setText(item)
    setIndexNum(index)
    setIsEdit(true)
    }
    return(
        <React.Fragment>
        <center><div className="sub">
        <h1>Todo List</h1>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
        {list.map((item,index)=>{
            return(
                <div>
                <h1>{item}</h1>
                <button onClick={()=>handleDelete(index)}>Delete </button>
                <button onClick={()=>handleEdit(item,index)}>Edit</button>
                </div>
            );
        })}
            </div></center>
        </React.Fragment>
    )
}
