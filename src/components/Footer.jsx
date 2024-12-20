import "../css/Header-Footer.css"
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
function Footer() {
    const [ref, inView] = useInView({
        triggerOnce: true, // La animación se ejecuta solo una vez al entrar en el viewport
        threshold: 0.1, // El porcentaje del elemento visible en el viewport antes de activarse
    });
    return (
        <>
            <footer>
                <section className="footer-content">
                    <article className="footer-img-and-socials">
                        <a href="/" className='footer-image'>
                            <img src="/voltar_white.png" alt="" />
                        </a>
                        <ul className='list-socials-nav-footer'>

                            <li><a href="https://www.facebook.com">
                                <FaFacebookF />
                            </a></li>

                            <li><a href="https://www.instagram.com">
                                <FaInstagram />
                            </a></li>

                            <li><a href='https://wa.me/<543764239352>?text=Hola!%20Me%20gustaría%20saber%20más%20sobre%20tus%20servicios'>
                                <FaWhatsapp />
                            </a></li>
                        </ul>
                    </article>
                    <article className="footer-options">
                        <ul className="footer-options-items1">
                            <li>
                                <motion.div
                                    ref={ref}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                // style={{ width: "100%", height: "100%" }}
                                >
                                    <a href="/">Home</a>
                                </motion.div>
                            </li>
                            <li>
                                <motion.div
                                    ref={ref}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                // style={{ width: "100%", height: "100%" }}
                                >
                                    <a href="/nosotros">Nosotros</a>
                                </motion.div>
                            </li>
                            <li>
                                <motion.div
                                    ref={ref}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.7, ease: "easeInOut" }}
                                // style={{ width: "100%", height: "100%" }}
                                >
                                    <a href="/hoteles">Hoteles</a>
                                </motion.div>
                            </li>
                            <li>
                                <motion.div
                                    ref={ref}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                // style={{ width: "100%", height: "100%" }}
                                >
                                    <a href="/agencias">Agencias</a>
                                </motion.div>
                            </li>
                        </ul>
                        <ul className="footer-options-items1">
                            <li>
                                <motion.div
                                    ref={ref}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.9, ease: "easeInOut" }}
                                // style={{ width: "100%", height: "100%" }}
                                >
                                    <a href="/">Corporativo</a>
                                </motion.div>
                            </li>
                            <li>
                                <motion.div
                                    ref={ref}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                // style={{ width: "100%", height: "100%" }}
                                >
                                    <a href="/contacto">Contacto</a>
                                </motion.div>
                            </li>
                            <li>
                                <motion.div
                                    ref={ref}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 1.1, ease: "easeInOut" }}
                                // style={{ width: "100%", height: "100%" }}
                                >
                                    <a href="/asesorias">Asesorías</a>
                                </motion.div>
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