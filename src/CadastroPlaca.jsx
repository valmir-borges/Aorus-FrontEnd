import React from 'react'
import Style from './css/login.module.css'
import { Alert, Autocomplete, Box, Button, Checkbox, Container, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useState, useEffect } from 'react';
import { Navigate, json, useNavigate } from 'react-router-dom';
import Header from './Header';

function CadastroPlaca() {
    const options = [ "High-End", "Intermediário", "Básico"];    

    const [value, setValue] = useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');
  return (
    <>
    <Header/>
        <div className={Style.fundologin}>
        <Container component="section" maxWidth="xs">
            <Box sx={{ backgroundColor:"rgba(0, 0, 0, 0.6)",padding: "40px", borderRadius: "10px", boxShadow: "2px", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Typography component="h1" variant='span' sx={{fontWeight:"bolder", fontFamily: 'Aldrich', fontSize:"2rem"}}>Cadastre sua placa</Typography>
            <Box component="form">
            <TextField 
            label="Nome da Placa" 
            variant='filled' 
            type='name'
            margin='normal' 
            fullWidth
            />
            <TextField 
            label="Linha" 
            variant='filled' 
            type='text' 
            margin='normal' 
            fullWidth
            />
            <Autocomplete
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={options}
            renderInput={(params) => <TextField {...params} label="Categoria" variant='filled' 
            />}
            />
            <TextField 
            label="Ano de Lançamento" 
            variant='filled' 
            type='number'
            margin='normal' 
            fullWidth
            />
            <TextField 
            label="Preço" 
            variant='filled' 
            type='text'
            margin='normal' 
            fullWidth
            />
            <TextField 
            label="Foto da placa" 
            variant='filled' 
            type='text'
            margin='normal' 
            fullWidth
            />
            <Button type='submit' variant="contained" fullWidth sx={{mt:2, mb:2}}>Cadastrar</Button>
            </Box>
            </Box>
      </Container>
      </div>
    </>
  )
}

export default CadastroPlaca