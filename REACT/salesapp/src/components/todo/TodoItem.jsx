import { Card, CardContent, Grid } from "@mui/material";
import React from "react";

export const TodoItem=({item})=>{

    return(
        <Grid item xs={3}>
            <Card sx={{bgcolor:"orange", borderRadius:"20px 0px 20px 0px", border:"2px solid black"}}>
                <CardContent>
                    <center><p><b>ID: </b>{item.id}</p></center>
                    <p><b>Title: </b>{item.title.slice(0,25)+"..."}</p>
                </CardContent>
            </Card>
        </Grid>


    )
}