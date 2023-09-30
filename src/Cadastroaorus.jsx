import React from 'react'
import { Alert, Box, Button, Checkbox, Container, FormControl, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material'
import { useState, useEffect } from 'react';
import Style from './css/login.module.css'
import Header from './Header';
import { Navigate, json, useNavigate } from 'react-router-dom';


function Loginaorus() {
  
  const [ email, setEmail]= useState("");
  const [ senha, setSenha]= useState("");
  const [ telefone, setTelefone] = useState("");
  const [ nome , setNome]=useState("");
  const [ cpf , setCpf]=useState("");

  const navigate = useNavigate()

  
  const [ cadastro, setCadastro]=useState(false);
  const [ erro, setErro]=useState(false);

  function Cadastrar(e){
    e.preventDefault();

    fetch( process.env.REACT_APP_BACKEND + "usuarios",//O fetch manda uma requisição para url digitada, futuramente será o link do banco de dados feitos por nós
    {method: "Post",//A requisição irá ser do método post, ou seja, por baixo dos panos (Existe 5 métodos de requisição)
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(//O corpo da requisição será essa
      {
        nome: nome,
        email: email,
        cpf: cpf,
        telefone: telefone,
        senha: senha
      }
    )})
    .then((resposta) => resposta.json())//Então se tudo deu certo pega a resposta e transforma em JSON
    .then((json) => {
      if (json.cpf)//Se a resposta do json tiver um cpf quer dizer que o cadastro foi bem sucedido
      { 
        localStorage.setItem("name", JSON.stringify(json.nome))
        setCadastro(true)
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
      setNome("");
      setEmail("");
      setCpf("");
      setTelefone("");
      setSenha("");
      setCadastro(false);
      navigate("/loginaorus");
    },[cadastro])


  
  return (
    <>
        <Header/>
        <div className={Style.fundologin}>
        <Container component="section" maxWidth="xs">
            <Box sx={{ backgroundColor:"rgba(0, 0, 0, 0.6)",padding: "40px", borderRadius: "10px", boxShadow: "2px", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Typography component="h1" variant='h4' sx={{fontWeight:"bolder", fontFamily: 'Aldrich'}}>Crie sua conta</Typography>
            {erro && (<Alert severity='warning' sx={{mt:2, mb:2, backgroundColor:"black", textAlign:"center"}}>Desculpe tente novamente</Alert>)}
            {cadastro && (<Alert severity="success" sx={{backgroundColor:"black", textAlign:"center"}}>Você foi cadastrado com sucesso</Alert>)}
            <Box component="form" onSubmit={Cadastrar}>
                <TextField 
                label="Nome" 
                variant='outlined' 
                type='name'
                margin='normal' 
                fullWidth
                value={nome}
                onChange={(e)=>setNome(e.target.value)}
                sx={{
                background:"rgba(40,40,40,0.75)"
                }}
                />
                <TextField 
                label="Email" 
                variant='outlined' 
                type='email'
                margin='normal' 
                fullWidth
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                sx={{
                background:"rgba(40,40,40,0.75)"
                }}
                />
                <TextField 
                label="Telefone" 
                variant='outlined' 
                type='tel'
                margin='normal' 
                fullWidth
                value={telefone}
                onChange={(e)=>setTelefone(e.target.value)} 
                sx={{
                background:"rgba(40,40,40,0.75)"
                }}
                />
                <TextField 
                label="CPF" 
                variant='filled' 
                type='text'
                margin='normal' 
                fullWidth
                value={cpf}
                onChange={(e)=>setCpf(e.target.value)}  
                sx={{
                  background:"rgba(40,40,40,0.75)"
                  }}
                />
                <TextField 
                label="Senha" 
                variant='filled' 
                type='password'
                margin='normal' 
                fullWidth
                value={senha}
                onChange={(e)=> setSenha(e.target.value)}  
                sx={{
                  background:"rgba(40,40,40,0.75)"
                  }}
                />
                <Button type='submit' variant="contained" fullWidth sx={{mt:2, mb:2}}>Cadastrar</Button>
                <Grid container >
                    <Grid item xs>
                        <Link href={"loginaorus"}>Já possuo uma conta</Link>
                    </Grid>
                </Grid>
            </Box>
            </Box>
      </Container>
      </div>
    </>
  )
}

export default Loginaorus