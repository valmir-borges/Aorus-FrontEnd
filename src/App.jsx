import { useEffect, useState } from "react";
import Filme from "./components/Filme"
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
  function Excluir(evento, id){//Foi passado para a função o evento de click e o id do elemento que foi clicado
    evento.preventDefault();
    fetch( process.env.REACT_APP_BACKEND + "filmes",
    {method: "DELETE",//O método agora será delete, ou seja, a requisição será para deletar um elemento no banco de dados
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        id: id//A requisição será para deletar algo, portanto é necessário dar o id que do elemento que será deletado
      }
    )})
    .then((resposta) => resposta.json())//Irá pegar a resposta e tranformar em json
    .then((json) => {
      const novalista = filmes.filter( (filme) => filme._id !== id);//Com a resposta em json será criado uma nova lista que será igual a lista de filmes anterior que não está atualizada
      //A lista antiga será passado um filtro que irá retirar o filme que possuir o id igual ao que foi clicado
      setFilmes(novalista)//Agora a lista de filmes será igual a novalista que foi filtrada
    })
    .catch((erro) => { setErro(true)})
  }

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
      <Filme 
      imagem={filme.imagem} 
      titulo={filme.titulo} 
      descricao={filme.descricao} 
      categoria={filme.categoria} 
      ano={filme.ano} 
      duracao={filme.duracao}
      excluir={(e)=> Excluir(e, filme._id)}
      id={filme._id}
      />
      ))
    )}
    </Container>
    </>
  );
}

export default App;
//quando precisar importar um componente já feito, primeiro escreve ele como componente para importar automaticamente e depois copia e cola o componente do site