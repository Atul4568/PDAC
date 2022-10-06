import React from "react";
import { Grid,Card,CardContent } from "@mui/material";

export const WazirxItem=({item})=>{
    return(
        <Grid item xs={3}>
            <Card className="CardProduct" sx={{bgcolor:"lightyellow", color: "black", borderRadius:"20px 0px 20px 0px", border:"2px solid black"}} >
                <CardContent>
                    <p><b>Symbol: </b>{item.symbol}</p>
                    <p><b>base Asset: </b>{item.baseAsset}</p>
                    <p><b>quote Asset: </b>{item.quoteAsset}</p>
                    <p><b>open Price: </b>{item.openPrice}</p>
                    <p><b>low Price: </b>{item.lowPrice}</p>
                    <p><b>high Price: </b>{item.highPrice}</p>
                    <p><b>last Price: </b>{item.lastPrice}</p>
                    <p><b>volume: </b>{item.volume}</p>
                    <p><b>bid Price: </b>{item.bidPrice}</p>
                    <p><b>ask Price: </b>{item.askPrice}</p>
                    <p><b>at: </b>{item.at}</p>
                </CardContent>
            </Card>
        </Grid>
    )
}