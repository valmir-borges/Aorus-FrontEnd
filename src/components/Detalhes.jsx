import { Alert, Autocomplete, Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Header from './Header';
import StarIcon from '@mui/icons-material/Star';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function Detalhes(props){
    const { id } = useParams(); // Obtém o ID da URL
    
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [year, setYear] = useState("");
    const [image, setImage] = useState("");
    const [amount, setAmount] = useState("");
    const [price, setPrice] = useState("");
  
    const [nameUser , setNameUser] = useState('')
    const [userPhoto, setUserPhoto] = useState('')
  
    const navigate = useNavigate();
  
    const optionsCategory = ["High-End", "Intermediário", "Básico"];
    const [valueCategory, setValueCategory] = useState(null);
    const [inputValueCategory, setInputValueCategory] = useState('');
  
    const optionsBrand = ["NVIDEA", "AMD", "AORUS", "INTEL", "GIGABYTE"];
    const [valueBrand, setValueBrand] = useState(null);
    const [inputValueBrand, setInputValueBrand] = useState('');
  
    const optionsType = ["Placa de Vídeo", "Placa Mãe", "Memória Ram", "SSD", "Water Cooler", "Monitor", "Notebook", "Gabinete", "Teclado", "Mouse", "Cadeira", "Fonte"];
    const [valueType, setValueType] = useState(null);
    const [inputValueType, setInputValueType] = useState(''); 
  
    const [atualizar, setAtualizar] = useState(false);
    const [erro, setErro] = useState(false);
    const [message, setMessage] = useState('');

    const [endDate, setEndDate] = useState(new Date("2024-12-31T23:59:59")); // Data da promoção
    const [timeRemaining, setTimeRemaining] = useState("");

    // Função para atualizar o contador regressivo
    useEffect(() => {
        const updateRemainingTime = () => {
            const now = new Date();
            const difference = endDate - now;

            if (difference <= 0) {
                setTimeRemaining("Promoção Expirada");
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeRemaining(`${days}D ${hours}H ${minutes}M ${seconds}S`);
        };

        // Atualiza o tempo a cada segundo
        const intervalId = setInterval(updateRemainingTime, 1000);

        // Limpa o intervalo quando o componente for desmontado
        return () => clearInterval(intervalId);
    }, [endDate]);

    // Quando carregar a página
    useEffect(() => {
        fetch(process.env.REACT_APP_BACKEND + `products/${id}`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
        })
        .then((resposta) => resposta.json())
        .then((json) => {
            setName(json.product.name);
            setValueType(json.product.type);
            setValueBrand(json.product.brand);
            setValueCategory(json.product.category);
            setYear(json.product.year);
            setAmount(json.product.amount);
            setPrice(json.product.price);
            setImage(json.product.image);
            setNameUser(json.product.user.name);
            setUserPhoto(json.product.user.image);
        })
        .catch((erro) => { setErro(true); });
    }, [id]);

    return(
        <>
        <Header/>
        <Container sx={{maxWidth: 'xl', display: 'flex', marginTop: 10, marginBottom: 10}}>
            <Container component='section' sx={{backgroundColor: 'transparent', maxWidth:"xl", alignItems: 'center', justifyContent: 'center', alignContent: 'center', textAlign: 'center'}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography
                    sx={{textAlign: 'center', fontWeight: 'bold', fontSize: 25}}
                  >
                    {name}
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2 }}>
                  <Typography sx={{fontWeight: 'bold', fontSize: 15}}>{valueType}</Typography>
                  <Typography sx={{fontWeight: 'bold', fontSize: 15}}>|</Typography>
                  <StarIcon sx={{ color: '#FF6400' }} />
                  <StarIcon sx={{ color: '#FF6400' }} />
                  <StarIcon sx={{ color: '#FF6400' }} />
                  <StarIcon sx={{ color: '#FF6400' }} />
                  <StarIcon sx={{ color: '#FF6400' }} />
                  <Typography sx={{fontWeight: 'bold', fontSize: 15}}>|</Typography>
                  <Typography sx={{fontWeight: 'bold', fontSize: 15}}>{valueBrand}</Typography>
                </Grid>              
              </Grid>
              <img src={image} alt={name} style={{maxHeight: 400, maxWidth: 400, marginTop: 10}}/>
            </Container>
            <Container component="section" sx={{maxWidth:"md", backgroundColor: '#1E1E1E', padding: 1, borderRadius: 3}}>
              <Grid container spacing={3}>
                <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                  <Typography style={{ fontSize: 20, fontWeight: 'bold' }}>PROMOÇÃO TERMINA EM:</Typography>
                  <Typography style={{ color: "#FF6400", fontSize: 20, fontWeight: "bolder" }}>{timeRemaining}</Typography>
                </Grid>    
                <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                  <Container component="div" sx={{textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 1}}>
                      <Typography style={{ fontSize: 20, fontWeight: 'bold', padding: 10, border: "2px solid black", color: "#FF6400" }}>25%</Typography>
                      <Typography style={{ fontSize: 20}}>Desconto Extra</Typography>                                   
                    </Container>
                    <Container component="div" sx={{textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 1}} spacing={100}>
                      <Typography style={{ fontSize: 20, fontWeight: 'bold', padding: 10, border: "2px solid black", color: "#FF6400" }}>{amount}</Typography>
                      <Typography style={{ fontSize: 20}}>Restam</Typography>                                   
                    </Container>              
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", justifyContent: "initial", gap: 3}}>
                  <Typography style={{fontSize: 15, fontWeight: "bolder", display: 'flex', flexDirection: 'row', justifyContent: 'center', 
                    alignContent: 'center', alignItems: 'center' }}>
                    <StarIcon fontSize='small'/> Novo</Typography>
                  <Typography style={{fontSize: 15, fontWeight: "bolder", display: 'flex', flexDirection: 'row', justifyContent: 'center', 
                    alignContent: 'center', alignItems: 'center' }}><CalendarMonthIcon fontSize='small'/> 12 meses de garantia</Typography>
                </Grid>
              </Grid>
          </Container>
        </Container>
        </>
    )
}

export default Detalhes;
