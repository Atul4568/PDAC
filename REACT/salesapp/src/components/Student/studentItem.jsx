import React from "react";//1
import { Grid, Card, CardContent } from "@mui/material";//4

export const StudentItem=({item})=>{
    return(
        <Grid item xs={3}>
            <Card sx={{bgcolor: item.house ,textAlign:"center"}}>
                <CardContent>
                    <h4>{`{item.fname} ,{item.lname}`}</h4>
                    <h5>{`${item.class} - ${item.div}`}</h5>
                    <h6>{`Fav Sports:${item.favsports}`}</h6>
                    <h6>{item.gender}</h6>
                </CardContent>
            </Card>
        </Grid>
    );//3
};//2