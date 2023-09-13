import React from 'react'
import { Alert, Autocomplete, Box, Button, Checkbox, Container, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { Navigate, json, useNavigate, useParams } from 'react-router-dom';

function EditaFilme() {

    const {id} = useParams();//useParams pega todas as informções do usuario que acessou, porém está sendo pegado somente o id

    const [ titulo, setTitulo]= useState("");
    const [ descricao, setDescricao]= useState("");
    const [ ano, setAno] = useState("");
    const [ duracao , setDuracao]=useState("");
    const [ categoria , setCategoria]=useState("");
    const [ capa , setCapa]=useState("");
    const options = [ "Terror", "Drama", "Comédia"];    
  
    const [value, setValue] = useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');
  
    const [ atualizar, setAtualizar]=useState(false);
    const [ erro, setErro]=useState(false);

    //Quando carregar a página
    useEffect(()=>{
        fetch( process.env.REACT_APP_BACKEND + "filmes/" + id,
    {method: "GET",//Irá buscar o id que foi passado no clique do editar
    headers: {
      'Content-Type': 'application/json'
    },})
    .then((resposta) => resposta.json())//Então se tudo deu certo pega a resposta e transforma em JSON
    .then((json) => {
        if (!json.status){//Se não possuir status na resposta do json quer dizer que a requisição deu certo
        //Os campos da página serão preenchidos pela resposta json, pois é uma edição
        setTitulo(json.titulo);
        setDescricao(json.descricao);
        setAno(json.ano);
        setDuracao(json.duracao);
        setValue(json.categoria);
        setCapa(json.imagem);
        }
        else{
            setErro("Filme não encontrado")
        }
    })
    .catch((erro) => { setErro(true)})
  }
    , [])

    function Editar (evento){
      evento.preventDefault();
      fetch( process.env.REACT_APP_BACKEND + "filmes",//O fetch manda uma requisição para url digitada, futuramente será o link do banco de dados feitos por nós
      {method: "PUT",//A requisição será do tipo put, essa requisição compara com o que está no banco e o que foi mandado na requisição e atualiza somente o que estiver diferente
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(
      {
        id:id,
        titulo: titulo,
        descricao: descricao,
        ano: ano,
        duracao: duracao,
        categoria: inputValue,
        imagem: capa
      }
    )})
    .then((resposta) => resposta.json())
    .then((json) => {
      if (json._id)
      {
        setAtualizar(true)
        setErro(false)
      }
      else{
        setErro(true);
        setAtualizar(false)
      }
    })
    .catch((erro) => { setErro("Erro ao processar sua requisição")})
    }
  return (
    <>
    <Container component="section" maxWidth="xs">
        <Box sx={{
          mt: 10, 
          padding: "40px", 
          borderRadius: "10px", 
          boxShadow: "2px", 
          display:"flex", 
          flexDirection:"column", 
          alignItems:"center"}}
          >
          {erro && (<Alert severity='warning' sx={{mt:2, mb:2}}>{erro}</Alert>)}
          {atualizar && (<Alert severity="success">Filme editado com sucesso</Alert>)}
            <Typography component="h1" variant='h5'>Edite seu filme</Typography>
          <Box component="form" onSubmit={Editar}>
            <TextField 
            label="Nome do Filme" 
            variant='filled' 
            type='name'
            margin='normal' 
            fullWidth
            value={titulo}
            onChange={(e)=> setTitulo(e.target.value)}
            />
            <TextField 
            label="Descrição" 
            variant='filled' 
            type='text' 
            margin='normal' 
            fullWidth
            value={descricao}
            onChange={(e)=> setDescricao(e.target.value)}
            />
            <TextField 
            label="Ano de lançamento" 
            variant='filled' 
            type='number'
            margin='normal' 
            fullWidth
            value={ano}
            onChange={(e)=>setAno(e.target.value)}  
            />
            <TextField 
            label="Duração do filme" 
            variant='filled' 
            type='time'
            margin='normal' 
            fullWidth
            value={duracao}
            onChange={(e)=>setDuracao(e.target.value)}  
            />
            <Autocomplete
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={options}
            renderInput={(params) => <TextField {...params} label="Categoria" variant='filled' 
            />}
            />
            <TextField 
            label="Capa do filme" 
            variant='filled' 
            type='text'
            margin='normal' 
            fullWidth
            value={capa}
            onChange={(e)=> setCapa(e.target.value)}  
            />
            <Button type='submit' variant="contained" fullWidth sx={{mt:2, mb:2}}>Editar</Button>
          </Box>
        </Box>
      </Container> 
    </>
  )
}

export default EditaFilme
