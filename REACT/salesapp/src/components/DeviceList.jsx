import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import{DeviceItem} from "./DeviceItem"
import axios from "axios";

export const DeviceList=()=>{
    const [data,setData]=useState([]);

    const getData = async ()=>{
        const result= await axios.get("http://localhost:8080/devices")
        setData(result.data)
    };
    useEffect(()=>{
        getData()
    },[]);

    return(
        <Grid container spacing={3}>
        {
            data.length>0 && data.map(item=>
                <DeviceItem item={item}/>
            )
        }
        </Grid>
    )
}