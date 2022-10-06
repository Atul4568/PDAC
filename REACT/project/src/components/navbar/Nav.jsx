import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";


export const Nav=()=>{
    return(
        <div>
            <nav>
                <Grid container spacing={1}>
                    <Grid item xs={1}>
                    <Link to="/Binance">Binance</Link>
                    </Grid>
                    <Grid item xs={1}>
                    <Link to="/Wazirx">WazirX</Link>
                    </Grid>
                    <Grid item xs={1}>
                        <Link to="/Product">Product</Link>
                    </Grid>
                </Grid>
            </nav>
        </div>
    )
}