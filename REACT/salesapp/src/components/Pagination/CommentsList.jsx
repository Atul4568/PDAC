import React,{useState,useEffect} from "react";
import { CommentItem } from "./CommentItem";
import { Grid,TextField } from "@mui/material";
import { Pagination } from "./Pagination";
import axios from "axios";

export const CommentsList=()=>{
    const[data,setData]=useState([]);

    const[showPerPage,setshowPerPage]=useState(12);

    const [pagination,setPagination]=useState({
        start:0,
        end:showPerPage,
    });

    const onPaginationChange= (start, end)=>{
        setPagination({start:start, end: end })
    }

    const getData=async()=>{
        const result=await axios.get("https://jsonplaceholder.typicode.com/comments")
        setData(result.data)
    };

    

    useEffect(()=>{
getData();
    },[])


    return(
        <div>
            
<Grid container spacing={2}>
    
{ data.length >0 &&  data.slice(pagination.start,pagination.end).map(item=>< CommentItem item={item}/>)}

</Grid>   
<Pagination showPerPage= {showPerPage}
    onPaginationChange= {onPaginationChange}
    />
        </div>
        
        
    )
}