import React from 'react'
import Carousel from './components/Carousel-Ventajas';
import Map from './components/Map';
// icons
import { FaAngleRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true, // La animación se ejecuta solo una vez al entrar en el viewport
    threshold: 0.2, // El porcentaje del elemento visible en el viewport antes de activarse
  });
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
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ width: "100%", height: "100%" }}
          >
            <img src="/img1.png" alt="La reserva Virgin Lodge" />
          </motion.div>
        </a>
        <a className='img-ig-container' href='https://www.instagram.com/p/CuhuHDMve0W/'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ width: "100%", height: "100%" }}
          >
            <img src="/img2.png" alt="Red Turistica Buzios" />
          </motion.div>
        </a>
        <a className='img-ig-container' href='https://www.instagram.com/p/DDILj0ASzc-/?img_index=1'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ width: "100%", height: "100%" }}
          >
            <img src="/img3.png" alt="Red Turistica Buzios" />
          </motion.div>
        </a>
        <a className='img-ig-container' href='https://www.instagram.com/p/C0wTfZKqCvJ/?img_index=1'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ width: "100%", height: "100%" }}
          >
            <img src="/img4.png" alt="La reserva Virgin Lodge" />
          </motion.div>
        </a>
      </section>

      <motion.div
        ref={ref}
        animate={inView ? { opacity: 1, scale: 1 } : {}} // Animación al entrar al viewport
        initial={{ opacity: 0, scale: 0 }}
        // whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ width: "100%", height: "100%" }}
      >
        <h3 className='ig-hashtag'>
          Instagram Feed - #ViajesConPropósito
        </h3>
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}} // Animación al entrar al viewport
        // whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        style={{ width: "100%", height: "100%" }}
      >
        <a href='/contacto' className='start-now-action'>
          <FaAngleRight />
          Empezá Ahora
        </a>
      </motion.div>

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