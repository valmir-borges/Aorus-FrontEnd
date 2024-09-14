import { Box, CardMedia, Container, Typography, Link } from '@mui/material'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import Style from '../css/home.module.css'
import '../css/global.css'
import Product from '../components/Product'
import { useEffect } from 'react';
import{ useState } from 'react'
import Carrossel from '../components/Carrossel'

function Home() {
  const [product, setProduct]= useState();
  const [ erro, setErro]=useState(false)

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND + "products/", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((resposta) => resposta.json()) // Então se tudo deu certo pega a resposta e transforma em JSON
    .then((json) => {
      if (Array.isArray(json.products)) { // Verifica se a resposta tem um array products
        setProduct(json.products);
      } else {
        setProduct([]);
      }
    })
    .catch((erro) => { 
      setErro(true); 
    });
  }, []);
  return (
    <>
    <Header/>
    <Carrossel/>
    <Container component='section' sx={{alignItems:'center', textAlign:'center', padding:'2rem', display:'flex', flexDirection:'column', gap:"2rem"}}>
        <Typography component="span" variant='span' sx={{fontWeight:"bolder", fontFamily: 'Aldrich', color:"#FF6400", fontSize:'5vh'}}>Desafie seus limites</Typography>
        <Typography component="span" variant='span' sx={{fontWeight:"bolder", fontFamily: 'Aldrich', color:" #c4c4c4", fontSize:"3vh"}}>Linhas de produtos desde o uso básico até o high-end</Typography>
    </Container>
      <Container sx={{
        display: "flex",
        flexFlow:"row",
        flexWrap:"wrap",
        gap:"2rem",
        mt:"1rem",
        mb: "3rem"
      }}>
      {product && (
        product.map((product, index ) => (//.map serve para que a variável filmes seja mapeada e dentro dela cada filme será colocado dentro do argumento filme e sua posição dentro do argumento index
        //Dentro do argumento filme terá o titulo, descrição, duração etc, portanto pegaremos somento o titulo
        <Product 
        key={index} // Adicione uma key para cada item no map
        image={product.image} 
        name={product.name}
        type={product.type}
        brand={product.brand}
        category={product.category} 
        year={product.year} 
        amount={product.amount}
        price={product.price}
        userName={product.user.name}
        imageUser={product.user.image}
        id={product._id}
        />
        ))
      )}
      </Container>
      <Footer />
    </>
  )
}
export default Home
