import React from 'react'
import CountdownTimer from './InConstruction'
import AgenciesData from '../data/agencies.json';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
function Agencies() {
  const [ref, inView] = useInView({
    triggerOnce: true, // La animación se ejecuta solo una vez al entrar en el viewport
    threshold: 0.1, // El porcentaje del elemento visible en el viewport antes de activarse
  });
  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h2 className='title-section-options'>
          Agencias
        </h2>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className='hotels-main'>
          {/* <CountdownTimer />
        <img style={{ width: "15rem" }} src="/hotel.jpg" alt="" />
        <a
          style={{
            marginTop: "2rem",
            backgroundColor: "var(--yellow)",
            padding: "1rem 3rem",
            color: "#fff",
            fontWeight: "600",
            borderRadius: "5px",
            marginBottom: "2rem"
          }}
          href="/"
        >Volver al Inicio</a> */}

          {AgenciesData.map((agencie) => (
            <motion.div
              
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <article className='data-item'>
                <img src={agencie.imagen} alt={agencie.nombre} />
                <h4>{agencie.nombre}</h4>
                <p>{agencie.descripcion}</p>
                <a href="#">Saber más</a>
              </article>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default Agencies