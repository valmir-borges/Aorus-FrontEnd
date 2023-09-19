import React, { useState } from 'react'
import Style from './css/header.module.css'
import logoescrito from './img/logo aorus.png'
import logodesenho from './img/somente logo.png'
import user from './img/user.png'
import { Link } from '@mui/material'

function Header() {
  const [ exibe, setExibe ] = useState( "none" );

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
            <Link href={"Home"}><img className={Style.logoescrito} src={logoescrito} alt=""/></Link>
            <a href=""><span className={Style.homemobile} onClick={(e)=> blockmobilemenu(e)}>Home</span></a>
            <div className={Style.linknone}>
              <a href=""><span className={Style.produtos}>Home</span></a>
              <a href=""><span className={Style.produtos}>Lançamentos</span></a>
              <a href=""><span className={Style.produtos}>Sobre nós</span></a>
              <a href=""><span className={Style.produtos}>Contato</span></a>
            </div>
        </section>
        <section className={Style.secaodireita}>
        <Link href={"loginaorus"}><img src={user} alt="" /></Link>
            <img src={logodesenho} alt="" className={Style.logodesenho}/>
        </section>
      </nav>
      <div className={Style.mobilemenu} style={{ display: exibe }}>
          <a href=""><span className={Style.navmobile}>Lançamentos</span></a>
          <a href=""><span className={Style.navmobile}>Sobre nós</span></a>
          <a href=""><span className={Style.navmobile}>Contato</span></a>
        </div>
    </header>
    </>
  )
}

export default Header