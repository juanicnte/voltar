import React, { useEffect, useRef } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css'; // Importa el CSS de Flickity
import { FaHotel, FaChartLine, FaCog, FaCalendarAlt, FaStar } from "react-icons/fa";

const flickityOptions = {
    cellAlign: 'left',
    autoPlay: 3000,
    contain: true,
    lazyLoad: 1,
    resize: true,
    fade: true,
    prevNextButtons: false,
    draggable: true,
    wrapAround: true,
};

function Carousel() {
    const carouselRef = useRef(null); // Referencia al contenedor del carrusel

    useEffect(() => {
        // Inicializar Flickity
        const flkty = new Flickity(carouselRef.current, flickityOptions);

        // Limpieza al desmontar el componente
        return () => {
            flkty.destroy();
        };
    }, []);

    return (
        <div ref={carouselRef} className="carousel">
            <div className="gallery-cell">
                <article className='ventajas-container'>
                    <FaChartLine></FaChartLine>
                    <h3>Asesoría personalizada</h3>
                    <p>
                        Diseñamos estrategias adaptadas a las necesidades únicas de tu negocio.
                    </p>
                </article>
            </div>
            <div className="gallery-cell">
                <article className='ventajas-container'>

                    <FaCog></FaCog>
                    <h3>Optimización de procesos</h3>
                    <p>
                        Mejoramos tu operación para maximizar eficiencia y resultados.
                    </p>
                </article>

            </div>
            <div className="gallery-cell">
                <article className='ventajas-container'>

                    <FaCalendarAlt></FaCalendarAlt>
                    <h3>Aumenta tus reservas</h3>
                    <p>
                        Impulsa la visibilidad de tu negocio y conecta con más clientes.
                    </p>
                </article>

            </div>
            <div className="gallery-cell">
                <article className='ventajas-container'>
                    <FaStar></FaStar>
                    <h3>Experiencia comprobada</h3>
                    <p>
                        Años de experiencia respaldan nuestras soluciones innovadoras y efectivas.
                    </p>
                </article>

            </div>
        </div>
    );
}

export default Carousel;
