import React from 'react'
import Carousel from './components/Carousel-Ventajas';
import Map from './components/Map';
// icons
import { FaAngleRight } from "react-icons/fa";

function Home() {
  return (
    <>
      <section className='title-and-ig'>
        <article className='title-and-subT'>
          <h1>Asesoría en viajes y hoteles</h1>
          <p>Brindamos soluciones personalizadas para optimizar tu negocio en la industria de viajes y hospedaje.</p>
        </article>
      </section>
      <section className='collage-ig'>
        <a className='img-ig-container' href='https://www.instagram.com/p/DDNKcqXPwSB/?img_index=1'>
          <img src="/img1.png" alt="La reserva Virgin Lodge" />
        </a>
        <a className='img-ig-container' href='https://www.instagram.com/p/CuhuHDMve0W/'>
          <img src="/img2.png" alt="Red Turistica Buzios" />
        </a>
        <a className='img-ig-container' href='https://www.instagram.com/p/DDILj0ASzc-/?img_index=1'>
          <img src="/img3.png" alt="Red Turistica Buzios" />
        </a>
        <a className='img-ig-container' href='https://www.instagram.com/p/C0wTfZKqCvJ/?img_index=1'>
          <img src="/img4.png" alt="La reserva Virgin Lodge" />
        </a>
        <h3 className='img-ig-container'>
          Instagram Feed - #ViajesConPropósito
        </h3>
        <a href='https://www.instagram.com' className='start-now-action'>
          <FaAngleRight />
          Empezá Ahora
        </a>
      </section>
      <section className='aboutUs-home'>
        <h2>Transformamos la industria del turismo</h2>
        <p>
          Nos especializamos en brindar asesorías estratégicas a empresas de viajes y hoteles.
          Ayudamos a potenciar su crecimiento, optimizar sus operaciones y conectar con sus clientes de manera más efectiva.
          <br /><br />
          Nuestro enfoque personalizado nos permite entender las necesidades únicas de cada cliente,
          ofreciendo soluciones a medida que aseguren resultados tangibles y sostenibles.
          Ya sea que necesites posicionar tu hotel, fortalecer tus estrategias comerciales o innovar en la experiencia de tus viajeros,
          estamos aquí para llevar tu negocio al siguiente nivel.
        </p>
        <span>¡Haz de tu negocio un destino de éxito!</span>
      </section>
      <Carousel></Carousel>
      <Map />

    </>
  )
}

export default Home