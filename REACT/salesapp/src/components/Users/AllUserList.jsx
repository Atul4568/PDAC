import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { AllUserItem } from "./AllUserItem";
import axios from "axios";

export const AllUserList=()=>{
    const [data,setData]=useState([]);
    const getData= async ()=>{
        const result= await axios.get("http://localhost:8080/allusers")
        setData(result.data.data)
    }
useEffect(()=>{
    getData()
},[]);
    return(
        <Grid container spacing={3}>
            {
                data.length>0 && data.map(item=>
                    <AllUserItem item={item}/>
                    )
            };
        </Grid>
    )

}