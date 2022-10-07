    import React,{useState,useEffect} from "react";
    import { Grid,Button } from "@mui/material";

    export const Pagination=({showPerPage,onPaginationChange})=>{


        const[counter,setCounter]=useState(1);

        useEffect(()=>{
    const value= showPerPage * counter ;
    onPaginationChange (value - showPerPage, value)

        },[counter]);

        const onButtonClick=(type)=>{
    if (type==='prev'){
        if (counter===1){
            setCounter(1)
        }else{
            setCounter(counter-1)
        }
    }else if (type==='next'){
    setCounter(counter+1)
    }
        }
    return(
        
        <Grid sx={{margin:"10px"}}>
            <div className="d-flex justify-content-between">
            <Button variant="contained" onClick={()=>onButtonClick('prev')} 
            className="btn btn-primary">Previous</Button>
            <Button variant="contained" onClick={()=>onButtonClick('next')} 
            className="btn btn-primary">Next</Button>
        
        </div>
        </Grid>  
    )
    }