import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

import Style from '../css/carrossel.module.css';
import '../css/global.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';
import CardCarrossel from './CardCarrossel';
import { Container, Typography } from '@mui/material';

function Carrossel() {
    const slides = [
        { image: 'https://www.aorus.com/assets/img/Motherboard.6b87c3cf.png.webp', buttonText: 'Placa-Mãe para jogos' },
        { image: 'https://www.aorus.com/assets/img/Graphics.8b61a0c9.png.webp', buttonText: 'Placa de Vídeo para jogos' },
        { image: 'https://www.aorus.com/assets/img/Laptop.993a3a9a.png.webp', buttonText: 'Notebook para gamers' },
        { image: 'https://www.aorus.com/assets/img/Desktop-PC.d2a8d228.png.webp', buttonText: 'Computador' },
        { image: 'https://www.aorus.com/assets/img/Peripherals.77068125.png.webp', buttonText: 'Periféricos gamers' },
        { image: 'https://www.aorus.com/assets/img/Components.15962053.png.webp', buttonText: 'Componentes Premium' },
    ];

    return (
        <div className={Style.container} id='carrossel'>
            <Container sx={{display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'center', alignItems: 'center'}}>
                <Typography sx={{textAlign: 'center', fontWeight: 'bold', fontSize: 40}}>LINHA DE PRODUTOS</Typography>
                <Typography sx={{textAlign: 'center', fontWeight: 'bold', fontSize: 20, color: '#c4c4c4', maxWidth: '1000px'}}>A AORUS é uma empresa líder em placas-mãe de alto desempenho, 
                    placas gráficas, laptops, hardware para jogos e sistemas. Somos apaixonados por nos juntarmos aos jogadores para desafiar os limites sem medo e lutar 
                    enquanto subimos para a glória final!
                </Typography>
            </Container>
            <Swiper
                modules={[Navigation, Scrollbar, A11y, EffectFade, Autoplay]}
                autoplay={{ delay: 5000 }}
                loop
                navigation
                slidesPerView={4}
                spaceBetween={10}
                style={{marginTop: -100, width: '100%'}} // Garantir que o Swiper ocupa 100% da largura disponível
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4, // Garantir que o padrão seja 4 slides
                        spaceBetween: 20,
                    },
                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} style={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                        <CardCarrossel image={slide.image} buttonText={slide.buttonText} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Carrossel;
