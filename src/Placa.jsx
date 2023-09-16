import React from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Link } from '@mui/material'
import Style from '../src/css/cardplaca.module.css'


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
            <Typography gutterBottom variant="h6" component="div" sx={{display:"block", wordBreak:"break-word"}}>
            AORUS GeForce RTX™ 4070 Ti 12GB XTREME WATERFORCE            
            </Typography>
            <Typography variant="body2" color="text.secondary">
            RTX
            </Typography>
            <Grid container>
            <Grid item xs={3}>
                <span>High-end</span>
            </Grid>
            <Grid item xs={3}>
                <span>2022</span>
            </Grid>
            <Grid item xs={3    }>
                <span>R$2000</span>
            </Grid>
            </Grid>
            <Grid container sx={{mt:2}}>
            <Grid item xs={6}>
                <button style={{backgroundColor:"transparent"}}>Excluir</button>
            </Grid>            
            <Grid item xs={6}>
                <Link>Editar</Link>
            </Grid>
        </Grid>
        </CardContent>
        </CardActionArea>
  </Card>
  
  )
}

export default placa