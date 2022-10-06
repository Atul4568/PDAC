import React from "react";
import { Card,CardContent,Grid } from "@mui/material";


export const OlympicItem=({item})=>{

    return(<div>

        <Grid item xs={4}>
            <Card>
                <CardContent>
                    {item.athlete}
                    {item.age}
                    {item.country}
                    {item.year}
                    {item.date}
                    {item.sport}
                    {item.gold}
                    {item.silver}
                    {item.bronze}
                    {item.total}
                </CardContent>
            </Card>
        </Grid>
            </div>
    )
}