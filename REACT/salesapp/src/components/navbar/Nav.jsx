import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";


export const Nav=()=>{
    return(
        <div>
            <nav>
                <Grid container spacing={1}>
                    <Grid item xs={1}>
                    <Link to="/Home">Home</Link>
                    </Grid>
                    <Grid item xs={1}>
                        <Link to="/Product">Product</Link>
                    </Grid>
                    <Grid item xs={1}>
                        <Link to="/customer">Customer</Link>
                    </Grid>
                    <Grid item xs={1}>
                        <Link to="/Greet">Greet</Link>
                    </Grid>
                    <Grid item xs={1}>
                        <Link to="/Users">Users</Link>
                    </Grid>
                    <Grid item xs={1}>
                        <Link to="/Todo">Todo</Link>
                    </Grid>
                    <Grid item xs={1}>
                        <Link to="/Comment">Comment</Link>
                    </Grid>
                    <Grid item xs={1}>
                        <Link to="/Post">Post</Link>
                    </Grid>
                    <Grid item xs={1}>
                        <Link to="/Support">Support</Link>
                    </Grid>
                    <Grid item xs={1}>
                        <Link to="/allusers">All User List</Link>
                    </Grid>
                    <Grid item xs={1}>
                        <Link to="/devices">Device List</Link>
                    </Grid>
                </Grid>
            </nav>
        </div>
    )
}