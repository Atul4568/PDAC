import React, { useState,useEffect } from "react";
import { Grid } from "@mui/material";
import{TodoItem} from "./TodoItem";
import axios from "axios";
import { Pagination } from "../pagination/Pagination";

export const TodoList=()=>{
    const [data,setData]=useState([]);
    const [showPerPage, setshowPerPage] = useState(16);
    const [pagination, setPagination] = useState({start: 0, end: showPerPage});

    const onPaginationChange = (start, end) => {setPagination({ start: start, end: end });};

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
                {data.length>0 && data.slice(pagination.start, pagination.end).map(item=><TodoItem item={item}/>)}
            </Grid>
            <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange}/>
        </div>
    )
}