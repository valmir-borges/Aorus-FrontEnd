import React from 'react'
import Style from './css/header.module.css'
import logoescrito from './img/logo aorus.png'
import logodesenho from './img/somente logo.png'
import user from './img/user.png'

function Header() {

  return (
    <>
    <header className={Style.header}>
        <section className={Style.secaoesquerda}>
            <img className={Style.logoescrito} src={logoescrito} alt=""/>
            <a href=""><span className={Style.produtos}>Products</span></a>
        </section>
        <section className={Style.secaodireita}>
        <button type='submit' className={Style.btnuser}>
                <img src={user} alt="" />
            </button>
            <img src={logodesenho} alt="" className={Style.logodesenho}/>
        </section>
    </header>
    </>
  )
}

export default Header