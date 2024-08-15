import Style from '../css/footer.module.css'
import Logo from '../img/logo aorus.png'

function Footer(){
    return(
        <>
    <footer>
        <div className={Style.footercontent} id='footer'>
            <div className={Style.footercontacts}>
                <div className={Style.logo}>
                    <img src={Logo} alt="" />
                </div>
                <p className={Style.sublogo}>Desafie seus limites</p>

                <div className={Style.footersocialmedia}>
                    <a href="https://www.instagram.com/" target='_blank' className={`${Style.footerlink} ${Style.instagram}`}>
                        <i class="fa-brands fa-instagram"></i>
                    </a>

                    <a href="https://www.facebook.com/" target='_blank' className={`${Style.footerlink} ${Style.facebook}`}>
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>

                    <a href="#" className={`${Style.footerlink} ${Style.whatsapp}`}>
                        <i class="fa-brands fa-whatsapp"></i>
                    </a>
                </div>
            </div>
            
            <ul className={Style.footerlist}>
                <li>
                    <h3>Ajuda e Suporte</h3>
                </li>
                <li>
                    <a href="#" className={Style.footerlink}>A empresa</a>
                </li>
                <li>
                    <a href="#" className={Style.footerlink}>Segurança e Privacidade</a>
                </li>
                <li>
                    <a href="#" className={Style.footerlink}>FAQ</a>
                </li>
            </ul>

            <ul className={Style.footerlist}>
                <li>
                    <h3>Produtos</h3>
                </li>
                <li>
                    <a href="#" className={Style.footerlink}>Placas de Vídeo</a>
                </li>
                <li>
                    <a href="#" className={Style.footerlink}>Placas Mãe</a>
                </li>
                <li>
                    <a href="#" className={Style.footerlink}>Teclados</a>
                </li>
                <li>
                    <a href="#" className={Style.footerlink}>Mouses</a>
                </li>
                <li>
                    <a href="#" className={Style.footerlink}>Headsets</a>
                </li>
            </ul>

            <div className={Style.footersubscribe}>
                <h3>Inscreva-se Já</h3>

                <p>
                    Coloque seu e-mail para receber notificações sobre nossas novidades
                </p>

                <div className={Style.inputgroup}>
                    <input type="email" id="email" placeholder='Insira seu Email...'/>
                    <button>
                    <i class="fa-solid fa-envelope" style={{color: '#000000'}}></i>                    
                    </button>
                </div>
            </div>
        </div>

        <div className={Style.footercopyright}>
            Aorus &
            2024 all rights reserved
        </div>
    </footer>
        </>
    )
}
export default Footer;