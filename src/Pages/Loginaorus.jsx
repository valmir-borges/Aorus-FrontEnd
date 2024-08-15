import React, { useContext } from 'react';
import { Alert, Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography, Link } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Style from '../css/login.module.css';
import { AuthContext } from '../context/authProvider';

function Loginaorus() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [lembrar, setLembrar] = useState(false);
    const [erro, setErro] = useState(false);
    const navigate = useNavigate();
    const { Login, message, logado } = useContext(AuthContext);

    const RealizaLogin = (evento) => {
        evento.preventDefault();
        Login(email, senha);
    };

    useEffect(() => {
        if (logado) {
            setEmail("");
            setSenha("");
            navigate("/"); // Redireciona para a página inicial após o login
        }
    }, [logado, navigate]);

    return (
        <div className={Style.fundologin}>
            <Container component="section" maxWidth="xs" sx={{ marginTop: "-5rem" }}>
                <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.6)", padding: "40px", borderRadius: "10px", boxShadow: "2px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography component="h1" variant='h4' sx={{ fontWeight: "bolder", fontFamily: 'Aldrich' }}>Entrar</Typography>
                    {message && (<Alert severity='warning' sx={{backgroundColor:"black", textAlign:"center", border:'1px solid #FF6400'}}>{message}</Alert>)}
                    <Box component="form" onSubmit={RealizaLogin}>
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
                            label="Senha"
                            variant='outlined'
                            type='password'
                            margin='normal'
                            fullWidth
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            sx={{ background: "rgba(40,40,40,0.75)" }}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={lembrar} onChange={() => setLembrar(!lembrar)} />}
                            label="Lembra-me"
                        />
                        <Button type='submit' variant="contained" fullWidth sx={{ mt: 2, mb: 2 }}>Login</Button>
                        <Grid container>
                            <Grid item xs>
                                Esqueci a senha
                            </Grid>
                            <Grid item>
                                <Link href={"/Cadastroaorus"}>Cadastre-se</Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}

export default Loginaorus;
