import { Grid,Card,CardContent } from "@mui/material";
import React from "react";

export const AllUserItem=({item})=>{
    return(
        <Grid item sx={4}>
        <Card sx={{bgcolor:"orange"}}>
        <CardContent>
            <h4>{item.id}</h4>
            <h4>{item.name}</h4>
            <h4>{item.email}</h4>
            </CardContent>
            </Card>
        </Grid>
    )
}