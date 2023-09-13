import React from 'react'
import Style from '../css/header.module.css'
import logo from '../img/logo aorus.png'
import user from '../img/user.png'


function Header() {
  return (
    <>
        <header>
            <section className={Style.divmain}>
                <div className={Style.menuleft}>
                    <img src={logo} alt="" />
                    <span className={Style.products}>Products</span>
                </div>
                <div>
                    <img src={user} alt="" />
                </div>
            </section>
        </header>
    </>
  )
}

export default Header
