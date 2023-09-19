import React from 'react'
import { Alert, Box, Button, Checkbox, Container, FormControl, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material'
import { useState, useEffect } from 'react';
import { Navigate, json, useNavigate } from 'react-router-dom';
import Header from './Header';
import Style from './css/login.module.css'


function Loginaorus() {
  return (
    <>
        <Header/>
        <div className={Style.fundologin}>
        <Container component="section" maxWidth="xs">
            <Box sx={{ backgroundColor:"rgba(0, 0, 0, 0.6)",padding: "40px", borderRadius: "10px", boxShadow: "2px", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Typography component="h1" variant='h4' sx={{fontWeight:"bolder", fontFamily: 'Aldrich'}}>Crie sua conta</Typography>
            <Box component="form">
                <TextField 
                label="Nome" 
                variant='outlined' 
                type='name'
                margin='normal' 
                fullWidth
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