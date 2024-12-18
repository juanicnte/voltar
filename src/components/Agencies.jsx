import React from 'react'
import CountdownTimer from './InConstruction'
import AgenciesData from '../data/agencies.json';

function Agencies() {
  return (
    <>
    <h2 className='title-section-options'>
        Agencias
      </h2>
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
          <article className='data-item'>
            <img src={agencie.imagen} alt={agencie.nombre} />
            <h4>{agencie.nombre}</h4>
            <p>{agencie.descripcion}</p>
            <a href="#">Saber más</a>
          </article>
        ))}
      </div>
    </>
  )
}

export default Agencies