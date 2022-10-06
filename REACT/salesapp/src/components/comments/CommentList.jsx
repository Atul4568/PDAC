import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { CommentItem } from "./CommentItem";
import axios from "axios";

export const CommentList=()=>{
    const [data,setData]=useState([]);
    const [comment,setComment] = useState([]);
    const [loding,setLoding]=useState(false);
   

    useEffect(()=> {
        const fetchComments = async ()=> {
        setLoding(true);
        const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
        setComment(res,data);
        setLoding(false);
        }

        fetchComments();

    },[]); 
    



    const getData= async ()=>{
        const result = await axios.get("https://jsonplaceholder.typicode.com/comments")
        setData(result.data)
    }


    useEffect(()=>{
        getData();
    },[])
    return(
        <div>
            <Grid container spacing={1}>
                {data.length>0 && data.map(item=><CommentItem item={item}/>)}
            </Grid>
        </div>
    )
}