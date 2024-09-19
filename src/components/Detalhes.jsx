import { Alert, Autocomplete, Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Header from './Header';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Footer from './Footer';

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
                <Grid item xs={12}>
                  <Typography sx={{fontSize: 30, textAlign: 'center', color: '#FF6400'}}>{name}</Typography>
                </Grid>
                <Grid container spacing={10} sx={{padding: 2, justifyContent: 'center', alignItems: 'center'}}>
                  <Grid item xs={6} sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography sx={{display: 'flex', flexDirection: 'row', color: "rgba(255, 255, 255, 0.5)", fontSize: 20}}>
                      De R$: <Typography sx={{color: "rgba(255, 255, 255, 0.5)", textDecorationLine: 'line-through', fontSize: 20}}>{price + 1000}</Typography>, por
                    </Typography>
                      <Typography sx={{color: "#FF6400", fontSize: 35}}>
                      R$ {price}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Button variant='contained' color='success' size='large' sx={{width: '100%', fontWeight: 'bold'}}>
                      COMPRAR AGORA <ShoppingCartIcon/>
                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography sx={{display: 'flex', flexDirection: 'row',gap: 1, marginBottom: 4, fontSize: 20, alignItems: 'center'}}>
                      <CreditCardIcon fontSize='large'/> Parcelamento
                  </Typography>
                  <Grid container spacing={2} sx={{ backgroundColor: '#424242', borderRadius: 2 }}>
                    <Grid item xs={6}>
                      <Typography>1x de R$344,11 (com 10% de desconto)</Typography>
                      <Typography>2x de R$181,61 (com 5% de desconto)</Typography>
                      <Typography>3x de R$121,07 (com 5% de desconto)</Typography>
                      <Typography>4x de R$92,72 (com 3% de desconto)</Typography>
                      <Typography>5x de R$74,17 (com 3% de desconto)</Typography>
                      <Typography>6x de R$61,81 (com 3% de desconto)</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>7x de R$54,62 (sem juros)</Typography>
                      <Typography>8x de R$47,79 (sem juros)</Typography>
                      <Typography>9x de R$42,48 (sem juros)</Typography>
                      <Typography>10x de R$38,23 (sem juros)</Typography>
                      <Typography>11x de R$34,76 (sem juros)</Typography>
                      <Typography>12x de R$31,86 (sem juros)</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={2} sx={{alignItems: 'center' }}>
                    <Grid item xs={2}>
                      <img src="https://logopng.com.br/logos/visa-17.png" alt="Visa" style={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={2}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/800px-MasterCard_Logo.svg.png" alt="MasterCard" style={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={2}>
                      <img src="https://anadef.org.br/wp-content/uploads/2022/04/277580440007211_baaefe070804f03ea4d8f4d1a809a2a1-1.png" alt="American Express" style={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={2}>
                      <img src="https://seeklogo.com/images/E/elo-logo-0B17407ECC-seeklogo.com.png" alt="Elo" style={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={2}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Hipercard_logo.svg/2000px-Hipercard_logo.svg.png" alt="Hipercard" style={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={2}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Diners_Club_Logo3.svg/1945px-Diners_Club_Logo3.svg.png" alt="Diners Club" style={{ width: '100%' }} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
          </Container>
        </Container>
        <Footer />
        </>
    )
}

export default Detalhes;