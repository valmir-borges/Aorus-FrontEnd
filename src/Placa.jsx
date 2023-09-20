import React from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Link } from '@mui/material'
import Style from './css/cardplaca.module.css'


function placa() {
  return (
    <Card sx={{maxWidth:345, backgroundColor:"#202020", padding:"20px"}}>
        <CardActionArea>
        <CardMedia               
        component="img"
        height="319"
        width="319"
        image="https://static.gigabyte.com/StaticFile/Image/Global/97c6dabbcc22d1b2b7aa0aee499491a6/Product/35619/webp/400"
        alt
        />
        <CardContent>
            <Typography gutterBottom variant="span" component="div" sx={{display:"block", wordBreak:"break-word", fontSize:"1.5rem", textAlign:"center"}}>
                AORUS GeForce RTX™ 4070 Ti 12GB XTREME WATERFORCE            
            </Typography>
            <Typography variant="span" color="text.secondary" sx={{display:"block",mt:"1rem", fontSize:"1rem", textAlign:'center'}}>
            Linha RTX
            </Typography>
            <Grid container sx={{mt:"1rem"}}>
            <Grid item xs={20} sx={{display:"flex",flexDirection:"row", justifyContent:"space-between"}}>
                <span style={{fontSize:"0.9rem"}}>Uso:</span>
                <span  style={{color:"#FF6400",fontSize:"0.9rem"}}>High-end</span>
            </Grid>
            <Grid item xs={20} sx={{display:"flex",flexDirection:"row", justifyContent:"space-between", mt:"1vh"}}>
                <span style={{fontSize:"0.9rem"}} >Ano de lançamento:</span>
                <span  style={{color:"#FF6400",fontSize:"0.9rem"}}>2022</span>
            </Grid>
            <Grid item xs={20} sx={{display:"flex",flexDirection:"row", justifyContent:"space-between", mt:"1vh"}}>
                <span style={{fontSize:"0.9rem"}}>Preço:</span>
                <span  style={{color:"#FF6400",fontSize:"0.9rem"}}>R$8999</span>
            </Grid>
            </Grid>
            <Grid container sx={{mt:2, display:'flex',flexDirection:'row', justifyContent:'space-between', textAlign:'center'}}>
            <Grid item xs={6}>
                <button className={Style.btndel}>Excluir</button>
            </Grid>            
            <Grid item xs={6}>
                <button className={Style.btnedit}>Editar</button>
            </Grid>
        </Grid>
        </CardContent>
        </CardActionArea>
  </Card>
  
  )
}

export default placa