import React, { useState, useEffect } from 'react';
import { Alert, Autocomplete, Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Style from '../css/login.module.css';

function EditaPlaca() {
  const { id } = useParams(); // Obtém o ID da URL

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");

  const [nameUser , setNameUser] = useState('')
  const [userPhoto, setUserPhoto] = useState('')

  const navigate = useNavigate();

  const optionsCategory = ["High-End", "Intermediário", "Básico"];
  const [valueCategory, setValueCategory] = useState(null);
  const [inputValueCategory, setInputValueCategory] = useState('');

  const optionsBrand = ["NVIDEA", "AMD", "AORUS", "INTEL", "GIGABYTE"];
  const [valueBrand, setValueBrand] = useState(null);
  const [inputValueBrand, setInputValueBrand] = useState('');

  const optionsType = ["Placa de Vídeo", "Placa Mãe", "Memória Ram", "SSD", "Water Cooler", "Monitor", "Notebook", "Gabinete", "Teclado", "Mouse", "Cadeira", "Fonte"];
  const [valueType, setValueType] = useState(null);
  const [inputValueType, setInputValueType] = useState(''); 

  const [atualizar, setAtualizar] = useState(false);
  const [erro, setErro] = useState(false);
  const [message, setMessage] = useState('');

  // Quando carregar a página
  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND + `products/${id}`, {
      method: "GET",
      headers: { 'Content-Type': 'application/json' },
    })
      .then((resposta) => resposta.json())
      .then((json) => {
        setName(json.product.name);
        setValueType(json.product.type)
        setValueBrand(json.product.brand);
        setValueCategory(json.product.category);
        setYear(json.product.year);
        setAmount(json.product.amount);
        setPrice(json.product.price);
        setImage(json.product.image);
        setNameUser(json.product.user.name);
        setUserPhoto(json.product.user.image)
      })
      .catch((erro) => { setErro(true); });
  }, [id]);

  function Editar(evento) {
    const token = localStorage.getItem('token');
    evento.preventDefault();
    const formattedPrice = price.replace(',', '.');
    fetch(process.env.REACT_APP_BACKEND + `products/${id}`, {
      method: "PATCH",
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
        price: formattedPrice
      })
    })
      .then((resposta) => resposta.json())
      .then((json) => {
        if (json.message) {
          setAtualizar(true);
          setErro(false);
          setMessage(json.message);
        } else {
          setErro(true);
          setAtualizar(false);
        }
      })
      .catch((erro) => { setErro("Erro ao processar sua requisição"); });
  }

  return (
    <>
      <Header />
      <div className={Style.fundologin} style={{ paddingTop: '13rem' }}>
        <Container component="section" maxWidth="md">
          <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.6)", padding: "40px", borderRadius: "10px", boxShadow: "2px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            {message && (<Alert severity="info" sx={{ backgroundColor: "black", textAlign: "center", border: '1px solid #FF6400', mb: '1rem'}}>{message}</Alert>)}
            <Typography component="h1" variant='span' sx={{ fontWeight: "bolder", fontFamily: 'Aldrich', fontSize: "2rem", textAlign: "center", marginBottom: 1 }}>Editando o produto</Typography>
            <Typography component="h2" variant='span' sx={{ fontWeight: "bolder", fontFamily: 'Aldrich', fontSize: "1.5rem", textAlign: "center", color: "#FF6400", marginBottom: 2 }}>{name}</Typography>
            {image && (
              <Box sx={{ marginBottom: 2 }}>
                <img src={image} alt={name} style={{ maxWidth: '100%', borderRadius: '10px' }} />
              </Box>
            )}
            <Typography component="h1" variant='span' sx={{ fontWeight: "bolder", fontFamily: 'Aldrich', fontSize: "2rem", textAlign: "center", marginBottom: 1 }}>Produto de:</Typography>
            <Typography component="h2" variant='span' sx={{ fontWeight: "bolder", fontFamily: 'Aldrich', fontSize: "1.5rem", textAlign: "center", color: "#FF6400", marginBottom: 2 }}>
            {userPhoto && <img src={userPhoto} alt="Foto do usuário" className={Style.userPhoto} />}
            {nameUser}
            </Typography>
            <Box component="form" onSubmit={Editar} sx={{ width: '100%' }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Nome da Placa"
                    variant='filled'
                    type='name'
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Ano de Lançamento"
                    variant='filled'
                    type='number'
                    fullWidth
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Quantidade em Estoque"
                    variant='filled'
                    type='text'
                    fullWidth
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Preço"
                    variant='filled'
                    type='text'
                    fullWidth
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Foto da placa"
                    variant='filled'
                    type='text'
                    fullWidth
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Button type='submit' variant="contained" fullWidth sx={{ mt: 2, mb: 2 }}>Atualizar</Button>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
}

export default EditaPlaca;
