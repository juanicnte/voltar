import React from 'react'
import CountdownTimer from './InConstruction'

function Agencies() {
  return (
    <>
    <div className='hotels-main'>
    <CountdownTimer />
    <img style={{width: "18rem"}} src="/agencias.png" alt="" />
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
     >Volver al Inicio</a>
    </div>
    </>
  )
}

export default Agencies