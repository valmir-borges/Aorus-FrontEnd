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

//Mudando o tema dos componentes do material UI
const theme = createTheme({
  //aqui dentro vai ter cor primária, secundária e etc
  palette: {
    mode: 'light',
    primary: {
      main: '#BD0B08',
    },
    secondary: {
      main: '#660025',
    },
    background:{
      default: '#1e1e1e',
      paper:'#fff'
    }
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
    }
  ]
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme} >
    <RouterProvider router={router}/>
    </ThemeProvider>

);