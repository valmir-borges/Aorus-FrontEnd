import { Box, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import banner from './img/banner 1.png'
import Header from './Header'
import logo from './img/logo aorus.png'
import Style from './css/home.module.css'
import placa1 from './img/placa1.png'
import placa2 from './img/placa2.png'
import placa3 from './img/placa3.png'
import placa4 from './img/placa4.png'
import './css/global.css'
import bannerr from './img/teste.jpg'

function Home() {
  return (
    <>
    <Header/>
    <section className={Style.containerbanner}>
      <div className={Style.boxbanner}>
        <span className={Style.span1banner}>Carry your game</span>
        <span className={Style.span2banner}>AORUS ELITE Graphics Cards and Motherboards</span>
        <button className={Style.btnbanner}>SEE MORE</button>
        <img src={bannerr} className={Style.bannerimg} alt="" />
      </div>
      <div>
        <span></span>
      </div>
    </section>
    <section className={Style.container}>
      <div className={Style.containerspan1}>
        <span className={Style.spanbanner1}>Desafie seus limites</span>
      </div>
      <div className={Style.containerspan2}>
        <span className={Style.spanbanner2}>Linhas de placas de vídeos desde o uso básico até o high-end</span>
      </div>
      <div className={Style.containerimg}>
        <div>
          <img className={Style.fotoplaca} src={placa1} alt="" />
        </div>
        <div>
          <img className={Style.fotoplaca} src={placa2} alt="" />
        </div>
        <div className={Style.placanone325}>
          <img className={Style.fotoplaca} src={placa3} alt="" />
        </div>
        <div className={Style.placanone325}>
          <img className={Style.fotoplaca} src={placa4} alt="" />
        </div>
      </div>
    </section>

    </>
  )
}
//    <div className={Style.divbanner}>
//<img src={banner} alt="" className={Style.banner} />
//  </div>
export default Home
