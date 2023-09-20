import React, { useState } from 'react'
import Style from './css/header.module.css'
import logoescrito from './img/logo aorus.png'
import logodesenho from './img/somente logo.png'
import user from './img/user.png'
import { Link, Typography } from '@mui/material'
import foto from './img/somente logo.png'

function Header() {
  const [ exibe, setExibe ] = useState( "none" );
  const logado = localStorage.getItem('usuario');
  const nome = localStorage.getItem('name')
  const firstname = nome.split(" ")
  const newname = firstname[0].split("")
  
  function blockmobilemenu(e){
    e.preventDefault();
    if( exibe == "none" )
      setExibe( "block" );
    else
      setExibe( "none" );
  }
  return (
    <>
    <header className={Style.header}>
      <nav className={Style.nav}>
        <section className={Style.secaoesquerda}>
            <Link href={"/"}><img className={Style.logoescrito} src={logoescrito} alt=""/></Link>
            <a href=""><span className={Style.homemobile} onClick={(e)=> blockmobilemenu(e)}>Home</span></a>
            <div className={Style.linknone}>
              <a href="/"><span className={Style.produtos}>Home</span></a>
              <a href="/catalogo"><span className={Style.produtos}>Lançamentos</span></a>
              <a href="/cadastroplaca"><span className={Style.produtos}>Cadastre sua Placa</span></a>
            </div>
        </section>
        <section className={Style.secaodireita}>
        <Link sx={{textDecoration:"none"}} href={"loginaorus"}>{logado ?  <Link href={"loginaorus"}  sx={{textDecoration:"none"}}><Typography sx={{fontSize:"1.2rem", color:"white", textAlign:"center"}}>Olá {firstname[0]}"</Typography></Link>: <Link><img src={user} alt="" /></Link>}</Link>
            <Link href="/"><img src={logodesenho} alt="" className={Style.logodesenho}/></Link>
        </section>
      </nav>
      <div className={Style.mobilemenu} style={{ display: exibe }}>
          <a href="/catalogo"><span className={Style.navmobile}>Lançamentos</span></a>
          <a href="/cadastroplaca"><span className={Style.navmobile}>Cadastre sua Placa</span></a>
        </div>
    </header>
    </>
  )
}
export default Header