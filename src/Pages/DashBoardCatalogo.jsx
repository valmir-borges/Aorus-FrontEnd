import { Container, Link, Typography } from "@mui/material";
import Header from '../components/Header';
import Product from "../components/Product";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

function DashBoardCatalogo() {
    const [product, setProduct] = useState([]);
    const [erro, setErro] = useState('');
    const name = localStorage.getItem('name');

    useEffect(() => {
        const token = localStorage.getItem('token');
        fetch(process.env.REACT_APP_BACKEND + "products/myproducts", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        .then((resposta) => resposta.json()) // Então se tudo deu certo pega a resposta e transforma em JSON
        .then((json) => {
            if (Array.isArray(json.myProducts)) { // Verifica se a resposta tem um array products
                setProduct(json.myProducts);
            } else {
                setProduct([]);
            }
        })
        .catch((erro) => { 
            setErro(true); 
        });
    }, []);

    function Excluir(evento, id) { // Foi passado para a função o evento de click e o id do elemento que foi clicado
        const token = localStorage.getItem('token');
        evento.preventDefault();
        fetch(process.env.REACT_APP_BACKEND + `products/${id}`, {
            method: "DELETE", // O método agora será delete, ou seja, a requisição será para deletar um elemento no banco de dados
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({})
        })
        .then((resposta) => resposta.json()) // Irá pegar a resposta e tranformar em json
        .then((json) => {
            const novalista = product.filter((product) => product._id !== id); // Com a resposta em json será criado uma nova lista que será igual a lista de produtos anterior que não está atualizada
            setProduct(novalista); // Agora a lista de produtos será igual a novalista que foi filtrada
        })
        .catch((erro) => { 
            setErro(true); 
        });
    }

    return (
        <>
            <Header />
            <Container component='section' sx={{ alignItems: 'center', textAlign: 'center', padding: '2rem', display: 'flex', flexDirection: 'column', gap: "2rem" }}>
                <Typography component="span" variant='span' sx={{ fontWeight: "bolder", fontFamily: 'Aldrich', color: "#FF6400", fontSize: '5vh' }}>
                    Exibindo produtos de {name}
                </Typography>
                {product.length > 0 ? (
                    <Container sx={{ display: "flex", flexFlow: "row", flexWrap: "wrap", gap: "2rem", mt: "1rem" }}>
                        {product.map((product, index) => (
                            <Product
                                key={index} // Adicione uma key para cada item no map
                                image={product.image}
                                name={product.name}
                                type={product.type}
                                brand={product.brand}
                                category={product.category}
                                year={product.year}
                                amount={product.amount}
                                price={product.price}
                                userName={product.user.name}
                                imageUser={product.user.image}
                                excluir={(e) => Excluir(e, product._id)}
                                id={product._id}
                            />
                        ))}
                    </Container>
                ) : (
                    <Typography variant="body1">
                        Parece que você não possui nenhum produto cadastrado, <Link href={"cadastroProduct"}>cadastre um agora.</Link>
                    </Typography>
                )}
            </Container>
            <Footer />
        </>
    );
}

export default DashBoardCatalogo;
