import React, { useEffect, useRef, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// ICONS
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { HiBars3BottomLeft } from "react-icons/hi2";


import "../css/Header-Footer.css"


const Header = () => {
    // const navigate = useNavigate();

    const headerRef = useRef(null);
    // const bookingRef = useRef(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showHeader, setShowHeader] = useState(true);
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


        }
    };
    // Funcion para abrir submenu de opciones de menu hamburguesa
    const openSubMenu = (event) => {
        event.stopPropagation(); // Evita que el clic en la flechita afecte otros elementos

        const flechita = event.currentTarget; // El ícono clicado
        const menuItem = flechita.parentElement; // El contenedor del ícono
        const abrirCaja = menuItem.nextElementSibling; // El submenú asociado

        if (abrirCaja) {
            abrirCaja.classList.toggle('active');
            flechita.classList.toggle('active');
        }
    };



    return (
        <>

            <header className={`header ${showHeader ? "visible" : "hidden"}`}>
                <div className='header-colLeft'>
                    <HiBars3BottomLeft onClick={handleMobileNavClick} className="hamburger-button" />

                    {/* <svg onClick={handleMobileNavClick} xmlns="http://www.w3.org/2000/svg" fill="#e0e0e0" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hamburger-button">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg> */}
                    <ul>
                        <a>Hotel</a>
                        <a>Apartamentos</a>
                        |
                        <a>Rooftop</a>
                    </ul>
                </div>
                <a className="link-img-container" href="/"><img src="/voltar_white.png" className="img-logo" alt="" /></a>
                <div className='header-colRight'>
                    <a className='contact-header'>
                        <FaWhatsapp></FaWhatsapp>
                    </a>
                    <button>reservar</button>
                </div>
            </header>
            <nav id="mobile-nav">
                <section className='container-mobile-nav'>

                    <section className='btn-and-img'>
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
                    </section>


                    <article className='listas-container'>
                        {/* <ul className='list-hotels-nav'>
                                <li><a>Hotel</a></li>
                                <li><a>Apartamentos</a></li>
                                <li><a>Rooftop</a></li>
                            </ul>
                            <div className='linea'></div> */}
                        <ul className='list-idk-nav'>
                            <li><a>Home</a></li>
                            <li><a>Nosotros</a></li>
                            <li><a>Hoteles</a></li>
                            <li><a>Agencias</a></li>
                            <li><a>Contacto</a></li>
                            <li><a>Servicios</a></li>
                        </ul>
                    </article>

                    <ul className='list-socials-nav'>
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
                </section>
            </nav>
            {/* <!-- menu hamburguesa termina -->*/}
            {/* <OptionsHeader /> */}
        </>
    );
};

export default Header;