import React from 'react'
import { FaHotel, FaPlaneDeparture } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

function OptionsHeader() {
  const location = useLocation(); // Obtenemos la ruta actual
  const navigate = useNavigate();

  return (
    <>
      <section className='options-container'>
      <article onClick={() => navigate("/hoteles")}
        className={`option-article ${
          location.pathname === "/hoteles" ? "active" : ""
        }`}
      >
          <FaHotel />
          <span>HOTELES</span>
        </article>
        <article onClick={() => navigate("/agencias")}
        className={`option-article ${
          location.pathname === "/agencias" ? "active" : ""
        }`}
      >
          <FaPlaneDeparture />
          <span>AGENCIAS</span>
        </article>
      </section>
    </>
  )
}

export default OptionsHeader