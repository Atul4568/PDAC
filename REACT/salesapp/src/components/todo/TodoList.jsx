import React, { useState,useEffect } from "react";
import { Grid } from "@mui/material";
import{TodoItem} from "./TodoItem";
import axios from "axios";

export const TodoList=()=>{
    const [data,setData]=useState([])
    const getData= async()=>{
        const result= await axios.get("https://jsonplaceholder.typicode.com/todos")
        setData(result.data)
    }
    useEffect(()=>{
        getData();
    },[])
    return(
        <div>
            <Grid container spacing={2}>
                {data.length>0 && data.map(item=><TodoItem item={item}/>)}
                {data.split}
            </Grid>
        </div>
    )
}