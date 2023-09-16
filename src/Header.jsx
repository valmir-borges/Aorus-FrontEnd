import React from 'react'
import Style from './css/header.module.css'
import logoescrito from './img/logo aorus.png'
import logodesenho from './img/somente logo.png'
import user from './img/user.png'
import { Link } from '@mui/material'

function Header() {

  return (
    <>
    <header className={Style.header}>
        <section className={Style.secaoesquerda}>
            <Link href={"Home"}><img className={Style.logoescrito} src={logoescrito} alt=""/></Link>
            <a href=""><span className={Style.produtos}>Products</span></a>
        </section>
        <section className={Style.secaodireita}>
        <Link href={"loginaorus"}><img src={user} alt="" /></Link>
            <img src={logodesenho} alt="" className={Style.logodesenho}/>
        </section>
    </header>
    </>
  )
}

export default Header