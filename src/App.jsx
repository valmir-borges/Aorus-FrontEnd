import { useEffect, useState } from "react";
import Filmes from "./components/Filme"
import { Container } from "@mui/material";

function App(props) {
  const [filmes, setFilmes]= useState();
  const [ erro, setErro]=useState(false)

  //No momento da montagem da página ele irá pegar os filmes no banco de dados pelo método GET
  useEffect(()=>{
    fetch( process.env.REACT_APP_BACKEND + "filmes",
    {method: "GET",//A requisição irá ser do método post, ou seja, por baixo dos panos (Existe 5 métodos de requisição)
    headers: {
      'Content-Type': 'application/json'
    },//Não terá corpo da requisição, pois irá ser buscado e irá ser pegado tudo que estiver dentro do banco
    })
    .then((resposta) => resposta.json())//Então se tudo deu certo pega a resposta e transforma em JSON
    .then((json) => { setFilmes(json)})//E a resposta em json coloca dentro da variável filmes
    .catch((erro) => { setErro(true)})
  }, [])
  //Deletando um filme da lista
  
  return (
    <>
    <h1>Filmes</h1>
    <Container sx={{
      display: "flex",
      flexFlow:"row",
      flexWrap:"wrap",
      gap:"2rem"
    }}>
    {filmes && (
      filmes.map((filme, index ) => (//.map serve para que a variável filmes seja mapeada e dentro dela cada filme será colocado dentro do argumento filme e sua posição dentro do argumento index
      //Dentro do argumento filme terá o titulo, descrição, duração etc, portanto pegaremos somento o titulo
      <Filmes imagem={filme.imagem} titulo={filme.titulo} descricao={filme.descricao} categoria={filme.categoria} ano={filme.ano} duracao={filme.duracao}/>
      ))
    )}
    </Container>
    </>
  );
}

export default App;
//quando precisar importar um componente já feito, primeiro escreve ele como componente para importar automaticamente e depois copia e cola o componente do site