import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [logado, setLogado] = useState(!!localStorage.getItem("token"));
    const [message, setMessage] = useState('');
    const [erro, setErro] = useState(false);
    const [dados, setDados] = useState({});

    function Login(email, senha) {
        fetch(process.env.REACT_APP_BACKEND + "users/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                email: email,
                 password: senha })
        })
        .then((resposta) => resposta.json())
        .then((json) => {
            if (json.token) {
                setLogado(true);
                setMessage(json.message);
                setDados(json.user);
                localStorage.setItem("token", json.token);
                localStorage.setItem("name", json.user.name);
            } else {
                setLogado(false);
                setMessage(json.message);
            }
        })
        .catch((error) => {
            console.error('Erro ao tentar fazer login:', error);
            setErro(true);
        });
    }

    function Cadastro(nome, email, cpf, telefone, nascimento, imagem, senha, confirmsenha) {
        fetch(process.env.REACT_APP_BACKEND + "users/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nome,
                email: email,
                phone: cpf,
                cpf: telefone,
                birth: nascimento,
                image: imagem,
                password: senha,
                confirmpassword: confirmsenha
            })
        })
        .then((resposta) => resposta.json())
        .then((json) => {
            if (json.token) {
                setMessage(json.message);
                setLogado(true);
                setDados(json.user);
                localStorage.setItem("token", json.token);
                localStorage.setItem("name", json.user.name);
            } else {
                setLogado(false);
                setMessage(json.message);
            }
        })
        .catch((error) => {
            console.error('Erro ao tentar cadastrar:', error);
            setErro(true);
        });
    }

    function Logout(){
        setLogado(false);
        setDados({});
        localStorage.clear();
        setMessage('')
    }

    return (
        <AuthContext.Provider value={{ logado, message, Login, Cadastro, dados, Logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
