import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './App'
import Header from './Header';
import Loginaorus from './Loginaorus';
import Cadastroaorus from './Cadastroaorus'
import Catalogo from './Catalogo';
import CadastroPlaca from './CadastroPlaca';
import EditaPlaca from './EditaPlaca'

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
      paper:'black'
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255,255,255,0.6)',    },
  },
})

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home/>
    },
    {
      path: 'Header',
      element: <Header/>
    },
    {
      path: 'Loginaorus',
      element: <Loginaorus/>
    },
    {
      path: 'Cadastroaorus',
      element: <Cadastroaorus/>
    },
    {
      path: 'Catalogo',
      element: <Catalogo/>
    },
    {
      path: 'CadastroPlaca',
      element:<CadastroPlaca/>
    },
    {
      path: '/editaplaca/:id',
      element: <EditaPlaca/>
    }
  ]
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme} >
    <RouterProvider router={router}/>
    </ThemeProvider>

);