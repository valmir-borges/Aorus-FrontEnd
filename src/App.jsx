import { Box, CardMedia, Container, Typography, Link } from '@mui/material'
import React from 'react'
import Header from './Header'
import logo from './img/logo aorus.png'
import Style from './css/home.module.css'
import placa1 from './img/placa1.png'
import placa2 from './img/placa2.png'
import placa3 from './img/placa3.png'
import placa4 from './img/placa4.png'
import './css/global.css'
import bannerr from './img/bannerhome.jpg'
import Placa from './components/Placa'
import { useEffect } from 'react';
import{ useState } from 'react'

function Home() {
  const [placa, setPlaca]= useState();
  const [ erro, setErro]=useState(false)

  //No momento da montagem da página ele irá pegar os filmes no banco de dados pelo método GET
  useEffect(()=>{
    const usuario = localStorage.getItem('usuario')

    fetch( process.env.REACT_APP_BACKEND + "produtos/" + usuario,
    {method: "GET",//A requisição irá ser do método post, ou seja, por baixo dos panos (Existe 5 métodos de requisição)
    headers: {
      'Content-Type': 'application/json'
    },//Não terá corpo da requisição, pois irá ser buscado e irá ser pegado tudo que estiver dentro do banco
    })
    .then((resposta) => resposta.json())//Então se tudo deu certo pega a resposta e transforma em JSON
    .then((json) => { setPlaca(json)})//E a resposta em json coloca dentro da variável filmes
    .catch((erro) => { setErro(true)})
  }, [])

  //Deletando um filme da lista
  function Excluir(evento, id){//Foi passado para a função o evento de click e o id do elemento que foi clicado
    evento.preventDefault();
    fetch( process.env.REACT_APP_BACKEND + "produtos",
    {method: "DELETE",//O método agora será delete, ou seja, a requisição será para deletar um elemento no banco de dados
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        id: id,//A requisição será para deletar algo, portanto é necessário dar o id que do elemento que será deletado
        usuario: localStorage.getItem('usuario')
      }
    )})
    .then((resposta) => resposta.json())//Irá pegar a resposta e tranformar em json
    .then((json) => {
      const novalista = placa.filter( (placa) => placa._id !== id);//Com a resposta em json será criado uma nova lista que será igual a lista de filmes anterior que não está atualizada
      //A lista antiga será passado um filtro que irá retirar o filme que possuir o id igual ao que foi clicado
      setPlaca(novalista)//Agora a lista de filmes será igual a novalista que foi filtrada
    })
    .catch((erro) => { setErro(true)})
  }
  return (
    <>
    <Header/>
    <section className={Style.containerbanner}>
      <div className={Style.boxbanner}>
        <span className={Style.spanimg1}>Carry your game</span>
        <span className={Style.spanimg2}>AORUS ELITE Graphics Cards and Motherboards</span>
        <button className={Style.btnbanner}><Link href={"catalogo"} sx={{textDecoration:"none", color:"white"}}>SEE MORE </Link></button>
        <img src={bannerr} className={Style.bannerimg} alt="" />
      </div>
    </section>
    <Container component='section' sx={{alignItems:'center', textAlign:'center', padding:'2rem', display:'flex', flexDirection:'column', gap:"2rem"}}>
        <Typography component="span" variant='span' sx={{fontWeight:"bolder", fontFamily: 'Aldrich', color:"#FF6400", fontSize:'5vh'}}>Desafie seus limites</Typography>
        <Typography component="span" variant='span' sx={{fontWeight:"bolder", fontFamily: 'Aldrich', color:" #c4c4c4", fontSize:"3vh"}}>Linhas de placas de vídeos desde o uso básico até o high-end</Typography>
        </Container>
            <Container sx={{
          display: "flex",
          flexFlow:"row",
          flexWrap:"wrap",
          gap:"2rem",
          mt:"1rem"
        }}>
        {placa && (
          placa.map((placa, index ) => (//.map serve para que a variável filmes seja mapeada e dentro dela cada filme será colocado dentro do argumento filme e sua posição dentro do argumento index
          //Dentro do argumento filme terá o titulo, descrição, duração etc, portanto pegaremos somento o titulo
          <Placa 
          imagem={placa.imagem} 
          titulo={placa.titulo} 
          descricao={placa.descricao} 
          categoria={placa.categoria} 
          ano={placa.ano} 
          duracao={placa.duracao}
          excluir={(e)=> Excluir(e, placa._id)}
          id={placa._id}
          />
          ))
        )}
        </Container>
    </>
  )
}
export default Home
