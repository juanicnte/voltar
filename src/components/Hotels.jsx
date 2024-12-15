import React from 'react'
import CountdownTimer from './InConstruction'
import HotelsData from '../data/hotels.json';

import "../css/Hotels.css"
function Hotels() {
  return (
    <>

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

        {HotelsData.map((hotel) => (
          <article className='data-item'>
            <img src={hotel.imagen} alt={hotel.nombre} />
            <h4>{hotel.nombre}</h4>
            <p>{hotel.descripcion}</p>
            <a href="#">Saber más</a>
          </article>
        ))}
      </div>
    </>
  )
}

export default Hotels