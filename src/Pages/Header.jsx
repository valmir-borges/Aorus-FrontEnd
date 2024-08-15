import React, { useContext, useEffect, useState } from 'react';
import { Link, IconButton } from '@mui/material';
import Style from '../css/header.module.css';
import logoescrito from '../img/logo aorus.png';
import { AuthContext } from '../context/authProvider';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import user from '../img/user.png';

function Header() {
  const { dados, Logout } = useContext(AuthContext);

  const name = localStorage.getItem("name");
  const [userPhoto, setUserPhoto] = useState('')

  const [ erro, setErro] = useState('')
  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch(process.env.REACT_APP_BACKEND + "users/checkuser", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
    .then((resposta) => resposta.json()) // Então se tudo deu certo pega a resposta e transforma em JSON
    .then((json) => {
      setUserPhoto(json.image)
    })
    .catch((erro) => { 
      setErro(true); 
    });
  }, []);

  const handleLogout = () => {
    Logout();
  };

  return (
    <>
      <header className={Style.header}>
        <nav className={Style.nav}>
          <section className={Style.secaoesquerda}>
            <Link href={"/"}><img className={Style.logoescrito} src={logoescrito} alt="Logo Aorus" /></Link>
            <div className={Style.linknone}>
              <a href="/"><span className={Style.produtos}>Home</span></a>
              <a href="/catalogo"><span className={Style.produtos}>Lançamentos</span></a>
              <a href="/cadastroProduct"><span className={Style.produtos}>Cadastre um Produto</span></a>
            </div>
          </section>
          <section className={Style.secaodireita}>
            {dados ? (
              <>
                <Link href='/DashBoardCatalogo' sx={{ fontSize: "1.3rem", color: "white", textAlign: "center", textDecoration: "none", display: "flex", alignItems: "center" }}>
                {userPhoto && <img src={userPhoto} alt="Foto do usuário" className={Style.userPhoto} />}
                Olá {name}
                </Link>
                <IconButton onClick={handleLogout} className={Style.logoutButton}>
                  <ExitToAppIcon />
                </IconButton>
              </>
            ) : (
              <Link href={"/loginaorus"}><img src={user} alt="Usuário" /></Link>
            )}
          </section>
        </nav>
      </header>
    </>
  );
}

export default Header;
