import { Alert, Autocomplete, Box, Button, Checkbox, Container, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { Navigate, json, useNavigate } from 'react-router-dom';


function Filmes() {

  const [ titulo, setTitulo]= useState("");
  const [ descricao, setDescricao]= useState("");
  const [ ano, setAno] = useState("");
  const [ duracao , setDuracao]=useState("");
  const [ categoria , setCategoria]=useState("");
  const [ capa , setCapa]=useState("");
  const options = [ "Terror", "Drama", "Comédia"]
    

  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  const [ cadastrado, setCadastrado]=useState(false);
  const [ erro, setErro]=useState(false);

  function Cadastrar(e){
    e.preventDefault();
    fetch("http://10.139.75.32:8080/filmes",//O fetch manda uma requisição para url digitada, futuramente será o link do banco de dados feitos por nós
    {method: "Post",//A requisição irá ser do método post, ou seja, por baixo dos panos (Existe 5 métodos de requisição)
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(//O corpo da requisição será essa
      {
        titulo: titulo,
        descricao: descricao,
        ano: ano,
        duracao: duracao,
        categoria: inputValue,
        capa:capa
      }
    )})
    .then((resposta) => resposta.json())//Então se tudo deu certo pega a resposta e transforma em JSON
    .then((json) => {
      if (json.titulo)//Se a resposta do json tiver um cpf quer dizer que o cadastro foi bem sucedido
      {
        setCadastrado(true)
      }
      else{//Caso contrário, não foi aceito o cadastrado, portanto dará um erro
        setErro(true);
      }
    })
    .catch((erro) => { setErro(true)})
  }
    //limpando os campos após o cadastro, quando o cadastro for alterado
    useEffect( () =>
    {
        setTitulo("")
        setAno("")
        setDuracao("")
        setDuracao("")
        setCategoria("")
        setCapa("")
      setCadastrado(false);
    },[cadastrado])
  return (
    <>
    <Container component="section" maxWidth="sx">
    {erro && (<Alert severity='warning' sx={{mt:2, mb:2}}>Desculpe tente novamente</Alert>) /* Se a variável erro for true, ou seja, deu um erro, portanto será dado um alerta*/}
    {cadastrado && (<Alert severity="info">Seu filme foi cadastrado com sucesso</Alert>) /*se a variável cadastro for true, ou seja, o cadastro foi realizado com sucesso, portanto será dado um alerta*/}
        <Box sx={{
          mt: 10, 
          padding: "40px", 
          borderRadius: "10px", 
          boxShadow: "2px", 
          display:"flex", 
          flexDirection:"column", 
          alignItems:"center"}}
          >
          <Typography component="h1" variant='h5'>Cadastre seu filme</Typography>
          <Box component="form" onSubmit={Cadastrar} /*Quando clicar no botão para enviar o formulário irá chamar essa função*/>
            <TextField 
            label="Nome do Filme" 
            variant='filled' 
            type='name'
            margin='normal' 
            fullWidth
            value={titulo}
            onChange={(e)=> setTitulo(e.target.value)}
            />
            <TextField 
            label="Descrição" 
            variant='filled' 
            type='text' 
            margin='normal' 
            fullWidth
            value={descricao}
            onChange={(e)=> setDescricao(e.target.value)}
            />
            <TextField 
            label="Ano de lançamento" 
            variant='filled' 
            type='number'
            margin='normal' 
            fullWidth
            value={ano}
            onChange={(e)=>setAno(e.target.value)}  
            />
            <TextField 
            label="Duração do filme" 
            variant='filled' 
            type='time'
            margin='normal' 
            fullWidth
            value={duracao}
            onChange={(e)=>setDuracao(e.target.value)}  
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
            renderInput={(params) => <TextField {...params} label="Controllable" variant='filled' 
            />}
      />
            <TextField 
            label="Capa do filme" 
            variant='filled' 
            type='text'
            margin='normal' 
            fullWidth
            value={capa}
            onChange={(e)=> setCapa(e.target.value)}  
            />
            <Button type='submit' variant="contained" fullWidth sx={{mt:2, mb:2}}>Cadastrar</Button>
          </Box>
        </Box>
      </Container>
      </>
  )
}

export default Filmes
