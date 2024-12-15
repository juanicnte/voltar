import React from 'react'
import CountdownTimer from './InConstruction'

import "../css/Hotels.css"
function Hotels() {
  return (
    <>
    <div className='hotels-main'>
    <CountdownTimer />
    <img style={{width: "15rem"}} src="/hotel.jpg" alt="" />
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

export default Hotels