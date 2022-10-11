import React from "react";
import { Grid,Card,CardContent } from "@mui/material";

export const BinanceItem=({item})=>{
    return(
        <Grid item xs={3}>
            <Card className="CardProduct" sx={{bgcolor:"lightgray", color: "black", borderRadius:"20px 0px 20px 0px", border:"2px solid black"}} >
                <CardContent>
                    <h3><b>Symbol: </b>{item.symbol}</h3>
                    <h3><b>Price Change: </b>{item.priceChange}</h3>
                    <h3><b>Price Change Percent: </b>{item.priceChangePercent}</h3>
                    {/* <p><b>weighted Avg Price: </b>{item.weightedAvgPrice}</p> */}
                    <h3><b>prev Close Price: </b>{item.prevClosePrice}</h3>
                    <h3><b>last Price: </b>{item.lastPrice}</h3>
                    <h3><b>last Qty: </b>{item.lastQty}</h3>
                    <h3><b>bid Price: </b>{item.bidPrice}</h3>
                    <h3><b>bid Qty: </b>{item.bidQty}</h3>
                    <h3><b>ask Price: </b>{item.askPrice}</h3>
                    <h3><b>ask Qty: </b>{item.askQty}</h3>
                    <h3><b>open Price: </b>{item.openPrice}</h3>
                    <h3><b>high Price: </b>{item.highPrice}</h3>
                    <h3><b>low Price: </b>{item.lowPrice}</h3>
                    <h3><b>volume: </b>{item.volume}</h3>
                    {/* <p><b>quote Volume: </b>{item.quoteVolume}</p> */}
                    {/* <p><b>open Time: </b>{item.openTime}</p> */}
                    {/* <p><b>close Time: </b>{item.closeTime}</p> */}
                    {/* <p><b>first Id: </b>{item.firstId}</p> */}
                    {/* <p><b>last Id: </b>{item.lastId}</p> */}
                    <p><b>count: </b>{item.count}</p>
                </CardContent>
            </Card>
        </Grid>
    )
}