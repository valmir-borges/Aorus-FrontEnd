import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import style from './css/style.css'
import banner from './img/banner 1.png'
import Header from './components/Header'

function Home() {
  return (
    <>
      <Header/>
      <img src={banner}></img>
    </>
  )
}

export default Home
