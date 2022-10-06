import React from "react";
import { Grid,Card,CardContent } from "@mui/material";

export const BinanceItem=({item})=>{
    return(
        <Grid item xs={3}>
            <Card className="CardProduct" sx={{bgcolor:"lightgray", color: "black", borderRadius:"20px 0px 20px 0px", border:"2px solid black"}} >
                <CardContent>
                    <p><b>Symbol: </b>{item.symbol}</p>
                    <p><b>Price Change: </b>{item.priceChange}</p>
                    <p><b>Price Change Percent: </b>{item.priceChangePercent}</p>
                    <p><b>weighted Avg Price: </b>{item.weightedAvgPrice}</p>
                    <p><b>prev Close Price: </b>{item.prevClosePrice}</p>
                    <p><b>last Price: </b>{item.lastPrice}</p>
                    <p><b>last Qty: </b>{item.lastQty}</p>
                    <p><b>bid Price: </b>{item.bidPrice}</p>
                    <p><b>bid Qty: </b>{item.bidQty}</p>
                    <p><b>ask Price: </b>{item.askPrice}</p>
                    <p><b>ask Qty: </b>{item.askQty}</p>
                    <p><b>open Price: </b>{item.openPrice}</p>
                    <p><b>high Price: </b>{item.highPrice}</p>
                    <p><b>low Price: </b>{item.lowPrice}</p>
                    <p><b>volume: </b>{item.volume}</p>
                    <p><b>quote Volume: </b>{item.quoteVolume}</p>
                    <p><b>open Time: </b>{item.openTime}</p>
                    <p><b>close Time: </b>{item.closeTime}</p>
                    <p><b>first Id: </b>{item.firstId}</p>
                    <p><b>last Id: </b>{item.lastId}</p>
                    <p><b>count: </b>{item.count}</p>
                </CardContent>
            </Card>
        </Grid>
    )
}