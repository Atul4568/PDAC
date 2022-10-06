import React from "react";
import { Grid,Card,CardContent } from "@mui/material";

export const CustomerItem=({item})=>{

    return(
        <Grid item xs={3}>
            <Card sx={{bgcolor:"navy", color: "white", textAlign:"center"}}>
                <CardContent>
            <p><b>Name:</b>{item.name}</p>
            <p><b>Mobile: </b>{item.mobile}</p>
            <p><b>City: </b>{item.city}</p>
                </CardContent>
            </Card>
        </Grid>
    )
}