import React, { useState,useEffect } from "react";

import { Grid } from "@mui/material";
import { OlympicItem } from "./OlympicItem";
import axios from "axios";

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const OlympicList=()=>{
    const [data,setData]=useState([]);

    const getData = async ()=>{
        const result= await axios.get("https://www.ag-grid.com/example-assets/olympic-winners.json")
        setData(result.data);
    } 
    useEffect(()=>{
        getData();
    },[]);

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
      function createData(
        name: string,
        calories: number,
        fat: number,
        carbs: number,
        protein: number,
      ) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData(),
        createData(),
        createData(),
        createData(),
        createData(),
      ];

    return(
        <div>
        <TableContainer component={item}>
         <Table sx={{ minWidth: 700 }} aria-label="customized table">
           <TableHead>
             <TableRow>
               <StyledTableCell>athlete</StyledTableCell>
               <StyledTableCell align="right">age</StyledTableCell>
               <StyledTableCell align="right">country</StyledTableCell>
               <StyledTableCell align="right">year</StyledTableCell>
               <StyledTableCell align="right">date</StyledTableCell>
               <StyledTableCell align="right">sport</StyledTableCell>
               <StyledTableCell align="right">gold</StyledTableCell>
               <StyledTableCell align="right">silver</StyledTableCell>
               <StyledTableCell align="right">bronze</StyledTableCell>
               <StyledTableCell align="right">total</StyledTableCell>
             </TableRow>
           </TableHead>
           <TableBody>
             {rows.map((row) => (
                 <StyledTableRow key={row.name}>
                 <StyledTableCell component="th" scope="row">
</StyledTableCell>
                 <StyledTableCell align="right">{item.athlete}</StyledTableCell>
                 <StyledTableCell align="right">{item.age}</StyledTableCell>
                 <StyledTableCell align="right">{item.country}</StyledTableCell>
                 <StyledTableCell align="right">{item.year}</StyledTableCell>
                 <StyledTableCell align="right">{item.date}</StyledTableCell>
                 <StyledTableCell align="right">{item.sport}</StyledTableCell>
                 <StyledTableCell align="right">{item.gold}</StyledTableCell>
                 <StyledTableCell align="right">{item.silver}</StyledTableCell>
                 <StyledTableCell align="right">{item.bronze}</StyledTableCell>
                 <StyledTableCell align="right">{item.total}</StyledTableCell>
               
               </StyledTableRow>
             ))}
           </TableBody>
         </Table>
       </TableContainer>
        <Grid container spacing={1}>
            {
                data.length>0 && data.map(item=>
                    
                    <OlympicItem item={item}/>
                    )
            }
        </Grid>
    </div>
)
}