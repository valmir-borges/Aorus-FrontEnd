import React, { useContext } from 'react';
import Style from '../css/login.module.css';
import { Alert, Autocomplete, Box, Button, Container, TextField, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import { AuthContext } from '../context/authProvider';
import Footer from '../components/Footer';

function CadastroPlaca() {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");

  const optionsBrand = ["NVIDEA", "AMD", "AORUS", "INTEL", "GIGABYTE"];
  const [valueBrand, setValueBrand] = useState(null);
  const [inputValueBrand, setInputValueBrand] = useState('');

  const optionsCategory = ["High-End", "Intermediário", "Básico"];
  const [valueCategory, setValueCategory] = useState(null);
  const [inputValueCategory, setInputValueCategory] = useState('');

  const optionsType = ["Placa de Vídeo", "Placa Mãe", "Memória Ram", "SSD", "Water Cooler", "Monitor", "Notebook", "Gabinete", "Teclado", "Mouse", "Cadeira", "Fonte"];
  const [valueType, setValueType] = useState(null);
  const [inputValueType, setInputValueType] = useState('');

  const [cadastrado, setCadastrado] = useState(false);
  const [erro, setErro] = useState(false);

  const [message, setMessage] = useState('');

  function Cadastrar(e) {
    e.preventDefault();
    const token = localStorage.getItem('token');
  
    // Formatando o preço para substituir vírgulas por pontos
    const formattedPrice = price.replace(',', '.');
  
    fetch(process.env.REACT_APP_BACKEND + "products/register", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name: name,
        type: inputValueType,
        brand: inputValueBrand,
        category: inputValueCategory,
        year: year,
        image: image,
        amount: amount,
        price: formattedPrice  // Usando o preço formatado
      })
    })
    .then((resposta) => resposta.json())
    .then((json) => {
      if (json.status === 200) {
        setCadastrado(true);
        setErro(false);
        setMessage(json.message);
      } else {
        setErro(true);
        setCadastrado(false);
        setMessage(json.message);
      }
    })
    .catch((erro) => { 
      setErro(true); 
    });
  }
  

  useEffect(() => {
    if (cadastrado) {
      setName('');
      setValueBrand('');
      setValueType('');
      setValueCategory('');
      setYear('');
      setAmount('');
      setImage('');
      setPrice('');
      setCadastrado(false)
    }
  }, [cadastrado]);

  return (
    <>
      <Header />
      <div className={Style.fundologin}>
        <Container component="section" maxWidth="xs">
          <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.6)", padding: "40px", borderRadius: "10px", boxShadow: "2px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            {message && (<Alert severity="info" sx={{ backgroundColor: "black", textAlign: "center", border: '1px solid #FF6400', mb: '1rem' }}>{message}</Alert>)}
            <Typography component="h1" variant='span' sx={{ fontWeight: "bolder", fontFamily: 'Aldrich', fontSize: "2rem" }}>Cadastre sua placa</Typography>
            <Box component="form" onSubmit={Cadastrar}>
              <TextField 
                label="Nome do Produto" 
                variant='filled' 
                type='name'
                margin='normal' 
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
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
              />
              <Autocomplete
                value={valueBrand}
                onChange={(event, newValue) => {
                  setValueBrand(newValue);
                }}
                inputValue={inputValueBrand}
                onInputChange={(event, newInputValue) => {
                  setInputValueBrand(newInputValue);
                }}
                id="controllable-states-demo"
                options={optionsBrand}
                renderInput={(params) => <TextField {...params} label="Linha" variant='filled' />}
              />
              <Autocomplete
                value={valueCategory}
                onChange={(event, newValue) => {
                  setValueCategory(newValue);
                }}
                inputValue={inputValueCategory}
                onInputChange={(event, newInputValue) => {
                  setInputValueCategory(newInputValue);
                }}
                id="controllable-states-demo"
                options={optionsCategory}
                renderInput={(params) => <TextField {...params} label="Categoria" variant='filled' />}
              />
              <TextField 
                label="Ano de Lançamento" 
                variant='filled' 
                type='number'
                margin='normal' 
                fullWidth
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
              <TextField 
                label="Quantidade em Estoque" 
                variant='filled' 
                type='text'
                margin='normal' 
                fullWidth
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <TextField 
                label="Preço" 
                variant='filled' 
                type='text'
                margin='normal' 
                fullWidth
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <TextField 
                label="Foto do produto" 
                variant='filled' 
                type='text'
                margin='normal' 
                fullWidth
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <Button type='submit' variant="contained" fullWidth sx={{ mt: 2, mb: 2 }}>Cadastrar</Button>
            </Box>
          </Box>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default CadastroPlaca;
