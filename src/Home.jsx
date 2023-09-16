import { Box, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import './css/style.css'
import banner from './img/banner 1.png'
import Header from './Header'
import logo from './img/logo aorus.png'
import Style from './css/home.module.css'

function Home() {
  return (
    <>
    <Header/>
    <div className={Style.divbanner}>
      <img src={banner} alt="" className={Style.banner} />
    </div>
    </>
  )
}

export default Home
