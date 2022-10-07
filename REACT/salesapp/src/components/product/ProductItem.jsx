import React from "react";
import { Grid,Card,CardContent,Rating } from "@mui/material";

export const ProductItem=({item})=>{
    return(
        <Grid item xs={2.4}>
            <Card className="CardProduct" sx={{bgcolor:"lightyellow", color: "black", borderRadius:"20px 0px 20px 0px", border:"2px solid black"}} >
                <CardContent>
                    <center><img src={item.image} alt="" style={{height: "200px", width: "200px"}} /></center>
                    {/* <p><b>ID: </b>{item.id}</p> */}
                    <p><b>Title: </b>{item.title.slice(0,25)+"..."}</p>
                    <p><b>Price: </b>{item.price}</p>
                    <p><b>Description: </b>{item.description.slice(0,20)+"..."}</p>
                    <Rating name="rate" value={item.rating.rate}/>{"  ("+item.rating.count+")"}
                    <p><b>Category: </b>{item.category}</p>
                    
                    
                    {/* <center><p><b>Name: </b>{item.name}</p></center>
                    <center><p><b>Price: </b>{item.price}</p></center>
                    <p><b>Rating: </b>{item.rating}/5</p> 
                    <p><b>Description: </b>{item.description}</p>    */}
                </CardContent>
            </Card>
        </Grid>
    )
}