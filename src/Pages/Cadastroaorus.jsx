import React, { useContext } from 'react';
import { Alert, Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import Style from '../css/login.module.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authProvider';

function Cadastroaorus() {
    const [email, setEmail] = useState("");
    const [confirmsenha, setConfirmSenha] = useState("");
    const [nascimento, setNascimento] = useState("");
    const [senha, setSenha] = useState("");
    const [telefone, setTelefone] = useState("");
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [imagem, setImagem] = useState("");
    const navigate = useNavigate();
    const [erro, setErro] = useState(false);
    const { Cadastro, message, logado } = useContext(AuthContext);

    const RealizaCadastro = (evento) => {
        evento.preventDefault();
        Cadastro(nome, email, cpf, telefone, nascimento, imagem, senha, confirmsenha);
    };

    useEffect(() => {
        if (logado) {
            setNome("");
            setEmail("");
            setCpf("");
            setTelefone("");
            setSenha("");
            navigate("/");
        }
    }, [logado, navigate]);

    return (
        <div className={Style.fundologin}>
            <Container component="section" maxWidth="xs">
                <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.6)", padding: "40px", borderRadius: "10px", boxShadow: "2px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography component="h1" variant='h4' sx={{ fontWeight: "bolder", fontFamily: 'Aldrich' }}>Crie sua conta</Typography>
                    {message && (<Alert severity='warning' sx={{backgroundColor:"black", textAlign:"center", border:'1px solid #FF6400'}}>{message}</Alert>)}
                    <Box component="form" onSubmit={RealizaCadastro}>
                        <TextField
                            label="Nome"
                            variant='outlined'
                            type='text'
                            margin='normal'
                            fullWidth
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            sx={{ background: "rgba(40,40,40,0.75)" }}
                        />
                        <TextField
                            label="Email"
                            variant='outlined'
                            type='email'
                            margin='normal'
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{ background: "rgba(40,40,40,0.75)" }}
                        />
                        <TextField
                            label="Telefone"
                            variant='outlined'
                            type='tel'
                            margin='normal'
                            fullWidth
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            sx={{ background: "rgba(40,40,40,0.75)" }}
                        />
                        <TextField
                            label="CPF"
                            variant='outlined'
                            type='text'
                            margin='normal'
                            fullWidth
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            sx={{ background: "rgba(40,40,40,0.75)" }}
                        />
                        <TextField
                            label="Data de Nascimento"
                            variant='outlined'
                            type='text'
                            margin='normal'
                            fullWidth
                            value={nascimento}
                            onChange={(e) => setNascimento(e.target.value)}
                            sx={{ background: "rgba(40,40,40,0.75)" }}
                        />
                        <TextField
                            label="Imagem do Perfil"
                            variant='outlined'
                            type='text'
                            margin='normal'
                            fullWidth
                            value={imagem}
                            onChange={(e) => setImagem(e.target.value)}
                            sx={{ background: "rgba(40,40,40,0.75)" }}
                        />
                        <TextField
                            label="Senha"
                            variant='outlined'
                            type='password'
                            margin='normal'
                            fullWidth
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            sx={{ background: "rgba(40,40,40,0.75)" }}
                        />
                        <TextField
                            label="Confirmar Senha"
                            variant='outlined'
                            type='password'
                            margin='normal'
                            fullWidth
                            value={confirmsenha}
                            onChange={(e) => setConfirmSenha(e.target.value)}
                            sx={{ background: "rgba(40,40,40,0.75)" }}
                        />
                        <Button type='submit' variant="contained" fullWidth sx={{ mt: 2, mb: 2 }}>Cadastrar</Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href={"/Loginaorus"} sx={{color: 'white'}}>Já possuo uma conta</Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}

export default Cadastroaorus;
