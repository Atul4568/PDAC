import React from "react";
import { Grid,Card,CardContent } from "@mui/material";

export const UserItem=({item})=>{
    return(
        <Grid item xs={4}>
            <Card sx={{bgcolor:"lightcoral",borderRadius: "0px 20px 0px 20px", border:"2px solid black"} }>
                <CardContent>
                    <p><b>name: </b>{item.name}</p>
                    <p><b>phone: </b>{item.phone}</p>
                    <p><b>zipcode: </b>{item.address.zipcode}</p>
                </CardContent>
            </Card>
        </Grid>
    )
}