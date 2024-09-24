import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Product from '../components/Product';
import { Autocomplete, Button, Container, TextField, Typography } from "@mui/material";
import Footer from '../components/Footer';
import Style from '../css/global.css'

function Catalogo() {
  const [product, setProduct] = useState([]);
  const [allProducts, setAllProducts] = useState([]); // Adiciona um estado para armazenar todos os produtos
  const [erro, setErro] = useState(false);

  const optionsType = ["Placa de Vídeo", "Placa Mãe", "Memória Ram", "SSD", "Water Cooler", "Monitor", "Notebook", "Gabinete", "Teclado", "Mouse", "Cadeira", "Fonte"];
  const [valueType, setValueType] = useState(null);
  const [inputValueType, setInputValueType] = useState('');

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND + "products/", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((resposta) => resposta.json())
    .then((json) => {
      if (Array.isArray(json.products)) {
        setProduct(json.products);
        setAllProducts(json.products); // Armazena todos os produtos no estado adicional
      } else {
        setProduct([]);
      }
    })
    .catch((erro) => { 
      setErro(true); 
    });
  }, []);

  function FiltrarCatalogo() {
    const token = localStorage.getItem('token');
    fetch(process.env.REACT_APP_BACKEND + `products/catalogo/filtro/${inputValueType}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
    .then((resposta) => resposta.json())
    .then((json) => {
      if (Array.isArray(json.products)) {
        setProduct(json.products);
      } 
      else {
        setProduct([]);
      }
    })
    .catch((erro) => { 
      setErro(true); 
    });
  }
  
  function MenorPreco(){
    const token = localStorage.getItem('token');
    fetch(process.env.REACT_APP_BACKEND + "products/catalogo/menorpreco/", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
    .then((resposta) => resposta.json())
    .then((json) => {
      if (Array.isArray(json.products)) {
        setProduct(json.products);
      } 
      else {
        setProduct([]);
      }
    })
    .catch((erro) => { 
      setErro(true); 
    });
  }

  function MaiorPreco(){
    const token = localStorage.getItem('token');
    fetch(process.env.REACT_APP_BACKEND + "products/catalogo/maiorpreco/", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
    .then((resposta) => resposta.json())
    .then((json) => {
      if (Array.isArray(json.products)) {
        setProduct(json.products);
      } 
      else {
        setProduct([]);
      }
    })
    .catch((erro) => { 
      setErro(true); 
    });
  }

  function LimparFiltro() {
    setProduct(allProducts); // Redefine os produtos para o estado inicial
    setValueType(null); // Opcional: redefine o valor do filtro
    setInputValueType(''); // Opcional: redefine o valor de entrada do filtro
  }

  return (
    <>
      <Header />
      <Container component='section' sx={{ alignItems: 'center', textAlign: 'center', padding: '2rem' }}>
        <Typography component="span" variant='span' sx={{ fontWeight: "bolder", fontFamily: 'Aldrich', color: "#FF6400", fontSize: '2.5rem' }}>Conheça nossa linha Premium de produtos</Typography>
      </Container>
      <Container sx={{
        display: "flex",
        flexFlow: "row",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center"
      }}>
        <Container component='section' sx={{ 
          alignItems: 'center', 
          textAlign: 'center', 
          padding: '2rem', 
          backgroundColor: "#202020", 
          display: 'flex', 
          alignItems: 'center',
          width: '100%',
        }}>
          <Typography component="span" variant='span' sx={{ 
            fontWeight: "bolder", 
            fontFamily: 'Aldrich', 
            color: "#FF6400", 
            fontSize: '2.5rem', 
            marginRight: '1rem' 
          }}>
            FILTRO
          </Typography>
          <Autocomplete
            value={valueType}
            onChange={(event, newValue) => {
              setValueType(newValue);
            }}
            inputValue={inputValueType}
            onInputChange={(event, newInputValue) => {
              setInputValueType(newInputValue);
            }}
            id="controllable-states-demo"
            options={optionsType}
            renderInput={(params) => <TextField {...params} label="Tipo do Produto" variant='filled' />}
            sx={{ flexGrow: 1, marginRight: '1rem', minWidth: '300px' }}
          />
          <Button variant="contained" sx={{ alignSelf: 'stretch', background: 'transparent', color: 'white', fontWeight: 'bolder', border: '1px solid white' }} onClick={LimparFiltro}>
            Limpar Filtro
          </Button>
          <Button variant="contained" sx={{ alignSelf: 'stretch', background: 'transparent', color: 'white', fontWeight: 'bolder', border: '1px solid white', marginLeft: '1rem' }} onClick={FiltrarCatalogo}>
            Filtrar
          </Button>
          <Button variant="contained" sx={{ alignSelf: 'stretch', background: 'transparent', color: 'white', fontWeight: 'bolder', border: '1px solid white', marginLeft: '1rem' }} onClick={MenorPreco}>
            Menor Preço
          </Button>
          <Button variant="contained" sx={{ alignSelf: 'stretch', background: 'transparent', color: 'white', fontWeight: 'bolder', border: '1px solid white', marginLeft: '1rem' }} onClick={MaiorPreco}>
            Maior Preço
          </Button>
        </Container>
        {product && product.map((product, index) => (
          <Product 
            key={index}
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
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default Catalogo;
