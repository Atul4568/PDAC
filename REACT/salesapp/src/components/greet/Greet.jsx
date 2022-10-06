import { Button, Grid,Card,CardContent } from "@mui/material";
import React,{useState,useEffect} from "react";

export const Greet=()=>{
    const [msg,setMsg]=useState("Welcome...!!!")
    const [count,setCount]=useState(0)

    useEffect(()=>{
        count > 0 && count <5 && setMsg("Have a nice sleep")
        count > 4 && count < 12 && setMsg("Good Morning")
        count === 12 && setMsg("Good noon")
        count > 12 && count < 16 && setMsg("Good Afternoon")
        count > 15 && count < 19 && setMsg("Good Evening")
        count > 18 && count < 24 && setMsg("Good Night")
        count === 24 && setMsg("Mid Night")
        },[count])
    useEffect(()=>{
       const current = new Date();
       const hr= current.getHours();
       setCount(hr);
    }, []);
    return(
    <div>
            
       <center> <h1>{msg}</h1></center>
        <Grid container spacing={3}>
            <Grid item xs={4}>
        <Button variant="contained" fullWidth onClick={()=> count>0 && setCount(count-1)}>-</Button>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <CardContent><b><center>{count}</center></b></CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
        <Button variant="contained" fullWidth onClick={()=> count<24 && setCount(count+1)}>+</Button>
            </Grid>
        </Grid>
    </div>

    )
}