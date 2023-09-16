import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import Cadastro from "./Cadastro"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Filmes from './Filmes'
import EditaFilme from './EditaFilme';
import Home from './Home'
import Header from './Header';
import Loginaorus from './Loginaorus';

//Mudando o tema dos componentes do material UI
const theme = createTheme({
  //aqui dentro vai ter cor primária, secundária e etc
  palette: {
    mode: 'light',
    primary: {
      main: '#FF6400',
    },
    secondary: {
      main: '#660025',
    },
    background:{
      default: '#1e1e1e',
      paper:'#fff'
    },
    text: {
      primary: 'rgba(255,255,255,0)',
      secondary: 'rgba(255,255,255,0.6)',    },
  },
})

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App/>
    },
    {
      path: '/Login',
      element: <Login/>
    },
    {
      path: '/Cadastro',
      element: <Cadastro/>
    },
    {
      path: '/Filmes',
      element: <Filmes/>
    },
    {
      path: '/edicao/:id',
      element: <EditaFilme/>
    },
    {
      path: 'Home',
      element: <Home/>
    },
    {
      path: 'Header',
      element: <Header/>
    },
    {
      path: 'Loginaorus',
      element: <Loginaorus/>
    }
  ]
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme} >
    <RouterProvider router={router}/>
    </ThemeProvider>

);