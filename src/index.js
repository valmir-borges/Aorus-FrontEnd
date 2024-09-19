import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//Importando Pages
import Home from './Pages/Home';
import Loginaorus from './Pages/Loginaorus';
import Cadastroaorus from './Pages/Cadastroaorus';
import Catalogo from './Pages/Catalogo';
import CadastroProduct from './Pages/CadastroProduct';
import EditaProduct from './Pages/EditaProduct';
import DashBoardCatalogo from './Pages/DashBoardCatalogo'

import AuthProvider from './context/authProvider';
import ProtectedRoute from './routes/ProtectedRoute';
import Detalhes from './components/Detalhes';
import CardCarrossel from './components/CardCarrossel';

// Mudando o tema dos componentes do material UI
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FF6400',
    },
    secondary: {
      main: '#660025',
    },
    background: {
      default: '#1e1e1e',
      paper: 'black'
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255,255,255,0.6)',
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    )
  },
  {
    path: 'Loginaorus',
    element: <Loginaorus />
  },
  {
    path: 'Cadastroaorus',
    element: <Cadastroaorus />
  },
  {
    path: 'Catalogo',
    element: (
      <ProtectedRoute>
        <Catalogo />
      </ProtectedRoute>
    )
  },
  {
    path: 'CadastroProduct',
    element: (
      <ProtectedRoute>
        <CadastroProduct />
      </ProtectedRoute>
    )
  },
  {
    path: '/editaproduct/:id',
    element: (
      <ProtectedRoute>
        <EditaProduct />
      </ProtectedRoute>
    )
  },
  {
    path: 'DashBoardCatalogo',
    element: (
      <ProtectedRoute>
        <DashBoardCatalogo />
      </ProtectedRoute>
    )
  },
  {
    path: '/detalhesproduct/:id',
    element: (
      <ProtectedRoute>
        <Detalhes />
      </ProtectedRoute>
    )
  },
  {
    path: '/teste',
    element: (
      <ProtectedRoute>
        <CardCarrossel />
      </ProtectedRoute>
    )
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </ThemeProvider>
);
