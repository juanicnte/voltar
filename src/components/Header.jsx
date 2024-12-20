import React, { useEffect, useRef, useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

// ICONS
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { HiBars3BottomLeft } from "react-icons/hi2";


import "../css/Header-Footer.css"


const Header = () => {

    const [ref, inView] = useInView({
        triggerOnce: true, // La animación se ejecuta solo una vez al entrar en el viewport
        threshold: 0.2, // El porcentaje del elemento visible en el viewport antes de activarse
    });

    // const navigate = useNavigate();
    const location = useLocation(); // Obtenemos la ruta actual

    const headerRef = useRef(null);
    // const bookingRef = useRef(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showHeader, setShowHeader] = useState(true);
    // Estado para controlar la visibilidad del mobile menú
    const [isOpen, setIsOpen] = useState(false);
    // const [showBooking, setShowBooking] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                // Si el usuario baja y ha pasado un poco del inicio, esconder el header
                setShowHeader(false);
                // setShowBooking(false)
            } else {
                // Si el usuario sube, mostrar el header
                setShowHeader(true);
                // setShowBooking(true)
            }

            setLastScrollY(currentScrollY); // Actualizar la posición del scroll
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup para eliminar el event listener al desmontar
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);


    // Función para manejar el click en el botón del menú móvil
    const handleMobileNavClick = () => {
        const mobileNav = document.querySelector('#mobile-nav');
        const body = document.body;
        const overlay = document.querySelector('.overlay-active')
        if (mobileNav) {
            mobileNav.classList.toggle('active');
            body.classList.toggle('no-scroll');
            overlay.classList.toggle('active');
            setIsOpen(prevState => !prevState);
        }
    };
    // Funcion para abrir submenu de opciones de menu hamburguesa
    // const openSubMenu = (event) => {
    //     event.stopPropagation(); // Evita que el clic en la flechita afecte otros elementos

    //     const flechita = event.currentTarget; // El ícono clicado
    //     const menuItem = flechita.parentElement; // El contenedor del ícono
    //     const abrirCaja = menuItem.nextElementSibling; // El submenú asociado

    //     if (abrirCaja) {
    //         abrirCaja.classList.toggle('active');
    //         flechita.classList.toggle('active');
    //     }
    // };



    return (
        <>

            <header className={`header ${showHeader ? "visible" : "hidden"}`}>
                <a className="link-img-container" href="/"><img src="/voltar_white.png" className="img-logo" alt="" /></a>
                <div className='header-colLeft'>
                    <HiBars3BottomLeft onClick={handleMobileNavClick} className="hamburger-button" />

                    {/* <svg onClick={handleMobileNavClick} xmlns="http://www.w3.org/2000/svg" fill="#e0e0e0" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hamburger-button">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg> */}
                    <ul className='header-colLeft-laptop'>
                        {/* <a>Agencias</a>
                        |
                        <a>Hoteles</a>
                        | */}
                        <a href='/contacto'>Contacto</a>
                        |
                        <a href='/nosotros'>Nosotros</a>
                    </ul>
                </div>
                {/* <div className='header-colRight'>
                    <a className='contact-header'>
                        <FaWhatsapp></FaWhatsapp>
                    </a>
                    <button>reservar</button>
                </div> */}
            </header>
            <nav id="mobile-nav">
                <section className='container-mobile-nav'>

                    <section className='btn-and-img'>
                        <motion.div
                            ref={ref}
                            animate={
                                isOpen ?
                                    {
                                        rotate: [0, -180],
                                    }
                                    : {}
                            }
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                                times: [0.5],

                            }}
                        >
                            <svg
                                onClick={handleMobileNavClick}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6 hamburger-button-close"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </motion.div>

                    </section>


                    <article className='listas-container'>
                        {/* <ul className='list-hotels-nav'>
                                <li><a>Hotel</a></li>
                                <li><a>Apartamentos</a></li>
                                <li><a>Rooftop</a></li>
                            </ul>
                            <div className='linea'></div> */}
                        <ul className='list-idk-nav'>
                            <li>
                                <motion.div
                                    ref={ref}
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={isOpen ? { opacity: 1, x: 0 } : {}} // Animación al entrar al viewport
                                    // whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                // style={{ width: "100%", height: "100%" }}
                                >

                                    <a className={`list-mobileNav-option ${location.pathname === "/" ? "active" : ""
                                        }`} href='/'>Home</a>
                                </motion.div>
                            </li>
                            <li>
                                <motion.div
                                    ref={ref}
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={isOpen ? { opacity: 1, x: 0 } : {}} // Animación al entrar al viewport
                                    // whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.9, ease: "easeInOut" }}
                                // style={{ width: "100%", height: "100%" }}
                                >
                                    <a className={`list-mobileNav-option ${location.pathname === "/nosotros" ? "active" : ""
                                        }`} href='/nosotros'>Nosotros</a>
                                </motion.div>
                            </li>
                            <li>
                                <motion.div
                                    ref={ref}
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={isOpen ? { opacity: 1, x: 0 } : {}} // Animación al entrar al viewport
                                    // whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                // style={{ width: "100%", height: "100%" }}
                                >
                                    <a className={`list-mobileNav-option ${location.pathname === "/hoteles" ? "active" : ""
                                        }`} href='/hoteles'>Hoteles</a>
                                </motion.div>
                            </li>
                            <li>
                                <motion.div
                                    ref={ref}
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={isOpen ? { opacity: 1, x: 0 } : {}} // Animación al entrar al viewport
                                    // whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 1.1, ease: "easeInOut" }}
                                // style={{ width: "100%", height: "100%" }}
                                >
                                    <a className={`list-mobileNav-option ${location.pathname === "/agencias" ? "active" : ""
                                        }`} href='/agencias'>Agencias</a>
                                </motion.div>
                            </li>
                            <li>
                                <motion.div
                                    ref={ref}
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={isOpen ? { opacity: 1, x: 0 } : {}} // Animación al entrar al viewport
                                    // whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 1.2, ease: "easeInOut" }}
                                // style={{ width: "100%", height: "100%" }}
                                >
                                    <a className={`list-mobileNav-option ${location.pathname === "/contacto" ? "active" : ""
                                        }`} href='/contacto'>Contacto</a>
                                </motion.div>
                            </li>
                            {/* <li><a>Servicios</a></li> */}
                        </ul>
                    </article>

                    <ul className='list-socials-nav'>
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isOpen ? { opacity: 1, scale: 1 } : {}} // Animación al entrar al viewport
                            transition={{ duration: 1.1, ease: "easeInOut" }}
                        >
                            <li><a href="https://www.facebook.com">
                                <FaFacebookF />
                            </a></li>
                        </motion.div>
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isOpen ? { opacity: 1, scale: 1 } : {}} // Animación al entrar al viewport
                            transition={{ duration: 1, ease: "easeInOut" }}
                        >
                            <li><a href="https://www.instagram.com">
                                <FaInstagram />
                            </a></li>
                        </motion.div>
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isOpen ? { opacity: 1, scale: 1 } : {}} // Animación al entrar al viewport
                            transition={{ duration: .9, ease: "easeInOut" }}
                        >
                            <li><a href='https://wa.me/<543764239352>?text=Hola!%20Me%20gustaría%20saber%20más%20sobre%20tus%20servicios'>
                                <FaWhatsapp />
                            </a></li>
                        </motion.div>
                    </ul>
                </section>
            </nav >
            {/* <!-- menu hamburguesa termina -->*/}
            {/* <OptionsHeader /> */}
        </>
    );
};

export default Header;