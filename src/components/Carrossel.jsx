// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay'

//Import de Style próprio
import Style from '../css/carrossel.module.css'
import '../css/global.css'

//Import de Imagens
import Image1 from '../img/imgcarrossel1.jpg'
import Image2 from '../img/imgcarrossel2.jpg'
import Image3 from '../img/imgcarrossel3.jpg'
import Image4 from '../img/imgcarrossel4.jpg'
import Image5 from '../img/imgcarrossel5.jpg'
import Image6 from '../img/imgcarrossel6.jpg'

import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y,Autoplay, EffectFade } from 'swiper/modules';

function Carrossel(){
    const slides = [Image1, Image2, Image3, Image4, Image5, Image6]
    return (
        <>
        <div className={Style.container} id='carrossel'>
            <h2>ULTIMOS LANÇAMENTOS</h2>
            <Swiper style={{ 
                "--swiper-pagination-bullet-width": "147px",
                "--swiper-pagination-bullet-height": "5px",
                "--swiper-pagination-color": "#FF6400"
                }} 
                pagination={{clickable: true}}
                modules={[Navigation,Scrollbar,A11y, EffectFade, Autoplay, Pagination]}
                autoplay={{delay: 3000}}
                effect='fade'
                loop
                >
                {slides.map(slides => 
                    <SwiperSlide>
                        <img src={slides} alt={slides} className={Style.item}/>
                    </SwiperSlide>
                    )}
            </Swiper>
        </div>
        </>
    )
}
export default Carrossel