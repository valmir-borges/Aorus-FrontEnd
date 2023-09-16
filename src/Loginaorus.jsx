import React from 'react'
import { Alert, Box, Button, Checkbox, Container, FormControl, FormControlLabel, Grid, TextField, Typography, Link } from '@mui/material'
import { useState, useEffect } from 'react';
import { Navigate, json, useNavigate } from 'react-router-dom';
import Header from './Header';
import fundologin from './img/backgroundlogin.jpg';
import Style from './css/login.module.css'
import user from './img/user.png'

function Loginaorus() {
  return (
    <>
        <Header/>
        <div className={Style.fundologin}>
        <Container component="section" maxWidth="xs">
        <Box sx={{ backgroundColor:"rgba(0, 0, 0, 0.6)",padding: "40px", borderRadius: "10px", boxShadow: "2px", display:"flex", flexDirection:"column", alignItems:"center"}}>
          <Typography component="h1" variant='h4' sx={{fontWeight:"bolder", fontFamily: 'Aldrich'}}>Entrar</Typography>
          <Box component="form">
            <TextField 
            label="Email" 
            variant='outlined' 
            type='email'
            margin='normal' 
            fullWidth
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
            sx={{
              background:"rgba(40,40,40,0.75)"
            }}
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