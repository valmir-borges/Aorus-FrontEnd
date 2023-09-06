import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import Cadastro from "./Cadastro"
import { createTheme, ThemeProvider } from '@mui/material/styles';

//Mudando o tema dos componentes do material UI
const theme = createTheme({
  //aqui dentro vai ter cor primária, secundária e etc
  palette: {
    mode: 'dark',
    primary: {
      main: '#000000',
      dakr: '#e50914',
    },
    secondary: {
      main: '#e50914',
    },
    background: {
      default: '#000000',
      paper: '#ffffff',
    },
    text: {
      primary: 'rgba(255,255,255,0.87)',
      secondary: 'rgba(255,255,255,0.6)',
    },
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
    }
  ]
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme} >
    <RouterProvider router={router}/>
    </ThemeProvider>

);