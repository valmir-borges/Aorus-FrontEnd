import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { styled } from '@mui/material/styles';

const CustomButton = styled('button')(({ theme }) => ({
    textDecoration: 'none',
    cursor: 'pointer',
    outline: 'none',
    border: 'none',
    background: 'transparent',
    position: 'relative',
    overflow: 'hidden',
    padding: '15px',
    textAlign: 'center',
    margin: '0 5px',
    textTransform: 'uppercase',
    fontWeight: '900',
    transition: 'box-shadow 0.5s linear, transform 0.3s ease',
    
    '&:before': {
        position: 'absolute',
        content: '""',
        left: 0,
        bottom: 0,
        height: '2px',
        width: '100%',
        borderBottom: '1px solid transparent',
        borderLeft: '1px solid transparent',
        boxSizing: 'border-box',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s linear, height 0.3s linear',
    },

    '&:after': {
        position: 'absolute',
        content: '""',
        top: 0,
        left: 0,
        width: '100%',
        height: '2px',
        borderTop: '1px solid transparent',
        borderRight: '1px solid transparent',
        boxSizing: 'border-box',
        transform: 'translateX(-100%)',
        transition: 'transform 0.3s linear, height 0.3s linear',
    },

    '&:hover': {
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
        transform: 'scale(1.3)', // Aumenta o tamanho do botão no hover
    },

    '&:hover:before': {
        borderColor: '#FF6400',
        height: '100%',
        transform: 'translateX(0)',
        transition: 'transform 0.3s linear, height 0.3s linear 0.3s',
    },

    '&:hover:after': {
        borderColor: '#FF6400',
        height: '100%',
        transform: 'translateX(0)',
        transition: 'transform 0.3s linear, height 0.3s linear 0.5s',
    },

    '&:hover span': {
        color: '#FF6400', // Cor do texto do span durante o hover
    },

    '& .default-text': {
        color: '#8e8e8e', // Cor padrão do texto
    },

    '&.card-hovered': {
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
        transform: 'scale(1.3)', // Aumenta o tamanho do botão quando o card está sendo hoverado
    },

    '&.card-hovered:before': {
        borderColor: '#FF6400',
        height: '100%',
        transform: 'translateX(0)',
        transition: 'transform 0.3s linear, height 0.3s linear 0.3s',
    },

    '&.card-hovered:after': {
        borderColor: '#FF6400',
        height: '100%',
        transform: 'translateX(0)',
        transition: 'transform 0.3s linear, height 0.3s linear 0.5s',
    },

    '&.card-hovered span': {
        color: '#c9c9c9', // Cor do texto do span quando o card está sendo hoverado
    },
}));

function CardCarrossel({ image, buttonText }) {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <Card
            sx={{
                maxWidth: 345,
                marginTop: 20,
                height: 500,
                padding: 2,
                transition: 'transform 0.3s ease',
                '&:hover': {
                    transform: 'scale(1.1)', // Aumenta o card no hover
                },
                backgroundColor: 'transparent',
                position: 'relative', // Necessário para o botão ficar posicionado corretamente
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="319"
                    width="319"
                    image={image}
                    alt="Imagem do card"
                />
                <CardContent>
                </CardContent>
            </CardActionArea>
            <CardActions
                sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', position: 'relative' }}
            >
                <CustomButton className={isHovered ? 'card-hovered' : ''}>
                    <span className="default-text" style={{ display: 'block', width: '140px', height: 'auto' }}>
                        {buttonText}
                    </span>
                </CustomButton>
            </CardActions>
        </Card>
    );
}

export default CardCarrossel;
