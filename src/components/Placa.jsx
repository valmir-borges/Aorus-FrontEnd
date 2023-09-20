import React from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Link } from '@mui/material'
import Style from '../css/cardplaca.module.css'


function placa(props) {
  return (
    <Card  className={Style.transitioncard} sx={{maxWidth:315, backgroundColor:"#202020", padding:'10px'}}>
        <CardActionArea>
        <CardMedia               
        component="img"
        height="319"
        width="319"
        image={props.imagem}
        alt={props.titulo}
        />
        <CardContent>
            <Typography gutterBottom variant="span" component="div" sx={{display:"block", wordBreak:"break-word", fontSize:"1.5rem", textAlign:"center"}}>
                {props.titulo}           
            </Typography>
            <Typography variant="span" color="text.secondary" sx={{display:"block",mt:"1rem", fontSize:"1rem", textAlign:'center'}}>
            {props.descricao}
            </Typography>
            <Grid container sx={{mt:"1rem"}}>
            <Grid item xs={20} sx={{display:"flex",flexDirection:"row", justifyContent:"space-between"}}>
                <span style={{fontSize:"0.9rem"}}>Uso:</span>
                <span  style={{color:"#FF6400",fontSize:"0.9rem"}}>{props.categoria}</span>
            </Grid>
            <Grid item xs={20} sx={{display:"flex",flexDirection:"row", justifyContent:"space-between", mt:"1vh"}}>
                <span style={{fontSize:"0.9rem"}} >Ano de lançamento:</span>
                <span  style={{color:"#FF6400",fontSize:"0.9rem"}}>{props.ano}</span>
            </Grid>
            <Grid item xs={20} sx={{display:"flex",flexDirection:"row", justifyContent:"space-between", mt:"1vh"}}>
                <span style={{fontSize:"0.9rem"}}>Preço:</span>
                <span  style={{color:"#FF6400",fontSize:"0.9rem"}}>{props.duracao}</span>
            </Grid>
            </Grid>
            <Grid container sx={{mt:2, display:'flex',flexDirection:'row', justifyContent:'space-between', textAlign:'center'}}>
            <Grid item xs={6}>
                <button className={Style.btndel} onClick={props.excluir}>Excluir</button>
            </Grid>            
            <Grid item xs={6}>
                <button className={Style.btnedit}><Link href={"editaplaca/"+props.id} sx={{textDecoration:"none", color:"white"}}>Editar</Link></button>
            </Grid>
        </Grid>
        </CardContent>
        </CardActionArea>
  </Card>
  
  )
}

export default placa