import React from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Link } from '@mui/material';
import Style from '../css/cardproduct.module.css';

function Product(props) {
  return (
    <Card className={Style.transitioncard} sx={{ maxWidth: 315, backgroundColor: "#202020", padding: '10px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="319"
          width="319"
          image={props.image}
          alt={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="span" component="div" sx={{ display: "block", wordBreak: "break-word", fontSize: "1.5rem", textAlign: "center" }}>
            {props.name}
          </Typography>
          <Typography variant="span" color="text.secondary" sx={{ display: "block", mt: "1rem", fontSize: "1rem", textAlign: 'center' }}>
            {props.brand} SERIES
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: "1rem", mb: 2 }}>
            <Typography component="span" sx={{ fontWeight: "bolder", fontFamily: 'Aldrich', fontSize: "1.4rem", color: "text.secondary", mr: 1.5 }}>
              DE:
            </Typography>
            <img src={props.imageUser} alt="Foto do usuário" className={Style.userPhoto} />
            <Typography component="span" sx={{ fontWeight: "bolder", fontFamily: 'Aldrich', fontSize: "1.4rem", color: "#FF6400"}}>
              {props.userName}
            </Typography>
          </Box>
          <Grid container sx={{ mt: "1rem" }}>
            <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <span style={{ fontSize: "1rem" }}>Uso:</span>
              <span style={{ color: "#FF6400", fontSize: "1rem", fontWeight: "bolder" }}>{props.category}</span>
            </Grid>
            <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", mt: "1vh" }}>
              <span style={{ fontSize: "1rem" }}>Ano de lançamento:</span>
              <span style={{ color: "#FF6400", fontSize: "1rem", fontWeight: "bolder" }}>{props.year}</span>
            </Grid>
            <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", mt: "1vh" }}>
              <span style={{ fontSize: "1rem" }}>Preço:</span>
              <span style={{ color: "#FF6400", fontSize: "1rem", fontWeight: "bolder" }}>R$: {props.price}</span>
            </Grid>
            <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", mt: "1vh" }}>
              <span style={{ fontSize: "1rem" }}>Quantidade em estoque:</span>
              <span style={{ color: "#FF6400", fontSize: "1rem", fontWeight: "bolder" }}>{props.amount} unidades</span>
            </Grid>
          </Grid>
          {props.excluir && (
            <Grid container sx={{ mt: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', textAlign: 'center' }}>
            <Grid item xs={6}>
              <button className={Style.btnedit}>
                <Link href={`editaproduct/${props.id}`} sx={{ textDecoration: "none", color: "white" }}>
                  Editar
                </Link>
              </button>
            </Grid>
            <Grid item xs={6}>
              <button className={Style.btndel} onClick={props.excluir}>Excluir</button>
            </Grid>
          </Grid>
          )}
          <Grid container sx={{ mt: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', textAlign: 'center', }}>
            <Grid item xs={12}>
              <button className={Style.btnedit}>
                <Link href={`detalhesproduct/${props.id}`} sx={{ textDecoration: "none", color: "white" }}>
                  Detalhes
                </Link>
              </button>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Product;
