
import { Grid,Card,CardContent } from "@mui/material";
import React from "react";

export const DeviceItem=({item})=>{
    return(
        <Grid item xs={3}>
        <Card sx={{bgcolor: item.isActive ? "green" : "red"}}>
        <CardContent>
        <h3>{item.name}</h3>
        <h3>{item.model}</h3>
        <h3>{item.make}</h3>
        <h3>{item.isActive}</h3>
        </CardContent>
        </Card>
        </Grid>
    )
}