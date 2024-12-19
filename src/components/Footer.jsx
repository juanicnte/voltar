import "../css/Header-Footer.css"
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <>
            <footer>
                <section className="footer-content">
                    <article className="footer-img-and-socials">
                        <a href="#" className='footer-image'>
                            <img src="/voltar_white.png" alt="" />
                        </a>
                        <ul className='list-socials-nav-footer'>
                            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF />
                            </a></li>
                            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a></li>
                            <li><a href="https://wa.me" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp />
                            </a></li>
                        </ul>
                    </article>
                    <article className="footer-options">
                        <ul className="footer-options-items1">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/nosotros">Nosotros</a>
                            </li>
                            <li>
                                <a href="/hoteles">Hoteles</a>
                            </li>
                            <li>
                                <a href="/agencias">Agencias</a>
                            </li>
                        </ul>
                        <ul className="footer-options-items1">
                            <li>
                                <a href="/">Corporativo</a>
                            </li>
                            <li>
                                <a href="/contacto">Contacto</a>
                            </li>
                            <li>
                                <a href="/asesorias">Asesorías</a>
                            </li>
                        </ul>
                    </article>

                    {/* <article className='footer-copyright-and-socials'> */}
                    {/* <ul className="list-unstyled">
                            <li className="item"><a href="https://www.altahousehotel.com/politica-de-privacidad">Política de Privacidad</a></li>
                            <li className="item">/</li>
                            <li className="item"><a href="https://www.altahousehotel.com/aviso-legal">Aviso Legal</a></li>
                            <li className="item">/</li>
                            <li className="item"><a href="https://www.altahousehotel.com/politica-de-cookies">Política de cookies</a></li>
                        </ul> */}

                    {/* </article> */}
                </section>
                <div className='copyright-container'>
                    Voltar © 2025. Todos los derechos reservados. <br />
                    Desarrollado por
                    <a>CWW</a>
                </div>
            </footer>
        </>
    )
}

export default Footer;