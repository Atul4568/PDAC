import React,{useState} from "react";
import { Button, Grid,TextField } from "@mui/material";
import { CustomerItem } from "./CustomerItem";

export const CustomerList=()=>{
    const[data,setData]=useState([]);
    const [name,setName]=useState();
    const [mobile,setMobile]=useState();
    const [city,setCity]=useState();

    const handleSubmit=()=>{
        const cust={name,mobile,city};
        setData([cust,...data])
        setName("")
        setMobile("")
        setCity("")
    }
    return(
        <div>
            <h2>Customer</h2>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField variant="outlined" label="Name" fullWidth value={name} onChange={e=>setName(e.target.value)}></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField variant="outlined" label="Mobile" fullWidth value={mobile} onChange={e=>setMobile(e.target.value)}></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField variant="outlined" label="City" fullWidth value={city} onChange={e=>setCity(e.target.value)}></TextField>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" fullWidth onClick={handleSubmit}>Submit</Button>
                </Grid>
                {data.length>0 && data.map(item=><CustomerItem item={item}/>)}
            </Grid>
        </div>
    )
}