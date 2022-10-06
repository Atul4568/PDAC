import React from "react";
import { Card, CardContent, Grid } from "@mui/material";
import { Gradient } from "@mui/icons-material";
export const CommentItem=({item})=>{
    return(
        <Grid index xs={3}>
            <Card className="comment">
                <CardContent>
                    <center><h3><b> ID: </b>{item.id}</h3></center>
                    <p><b> Name: </b>{item.name.slice(0,15)+"..."}</p>
                    <p><b>Email: </b>{item.email}</p>
                    <p><b>Comment: </b>{item.body.slice(0,20)+"..."}</p>
                </CardContent>
            </Card>
        </Grid>
    )
}