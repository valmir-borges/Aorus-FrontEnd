import React from 'react'
import { Alert, Box, Button, Checkbox, Container, FormControl, FormControlLabel, Grid, TextField, Typography, Link } from '@mui/material'
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { json } from 'react-router-dom';
import Header from './Header';
import Style from './css/login.module.css'

function Loginaorus() {
  
  const [ email, setEmail]= useState("");
  const [ senha, setSenha]= useState("");
  const [ lembrar , setLembrar]= useState(false);
  const [ login, setLogin]= useState(false)
  const [ erro, setErro]= useState(false)
  const navigate = useNavigate()

  //função para quando enviar o formulário não recarregar a página e autenticar os dados
  function Autenticar(evento){
    evento.preventDefault();

    fetch( process.env.REACT_APP_BACKEND + "login",//O fetch manda uma requisição para url digitada, futuramente será o link do banco de dados feitos por nós
    {method: "Post",//A requisição irá ser do método post, ou seja, por baixo dos panos (Existe 5 métodos de requisição)
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(//O corpo da requisição será essa
      {
        email: email,//No banco de dados estará campos chamados email que neles será procurado o que está dentro da variável email
        senha: senha//No banco de dados estará campos chamados password que neles será procurado o que está dentro da variável senha
      }
    )})
    .then((resposta) => resposta.json())//Então se tudo deu certo pega a resposta e transforma em JSON
    .then((json) => {
      if (json.user){//Se a resposta do json vier com um número de usuário quer dizer que este usuário exste, portanto o login será liberado, e o setlogin será true
        localStorage.setItem("usuario", JSON.stringify(json.user._id))//Criando o item usuario no localstorage para salvar o id do usuario, para que ele possa fazer requisições futuras
        setLogin(true)
      } else {
        localStorage.removeItem('usuario');
        setErro(true);//Caso contrário, quer dizer que o login não foi autorizado e o setErro será true
      }
    })
    .catch((erro) => { setErro(true)})//Qualquer tipo de erro irá cair no cath
  }
  useEffect( () => {
    if (login){
      setEmail("");
      setSenha("");
      navigate("/");//Está mudando a url da react, após o login manda o usuário para a página raiz (app)
    }
  }, [login])
  return (
    <>
        <Header/>
        <div className={Style.fundologin}>
        <Container component="section" maxWidth="xs" sx={{marginTop:"-5rem"}}>
        <Box sx={{ backgroundColor:"rgba(0, 0, 0, 0.6)",padding: "40px", borderRadius: "10px", boxShadow: "2px", display:"flex", flexDirection:"column", alignItems:"center"}}>
          <Typography component="h1" variant='h4' sx={{fontWeight:"bolder", fontFamily: 'Aldrich'}}>Entrar</Typography>
          {erro && (<Alert severity='warning'>Revise seus dados e tente novamente</Alert>) }
          <Box component="form" onSubmit={Autenticar}>
            <TextField 
            label="Email" 
            variant='outlined' 
            type='email'
            margin='normal' 
            fullWidth
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              background:"rgba(40,40,40,0.75)"
            }}
            />
            <TextField 
            label="Senha" 
            variant='outlined' 
            type='password' 
            margin='normal' 
            fullWidth
            value={senha} 
            onChange={(e) => setSenha(e.target.value)}
            sx={{
              background:"rgba(40,40,40,0.75)"
            }}
            />
            <FormControlLabel 
            control={<Checkbox />}// a ! serve para colocar o contrário do que está dentro da variável lembrar, pode estar true vai para false, se estiver false vai para true.
            label="Lembra-me"
            />
            <Button type='submit' variant="contained" fullWidth sx={{mt:2, mb:2}}>Login</Button>
            <Grid container >
              <Grid item xs>
                Esqueci a senha
              </Grid>
              <Grid item>
                  <Link href={"cadastroaorus"}>Cadastre-se</Link>
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