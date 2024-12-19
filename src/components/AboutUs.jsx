import React from 'react'
import "../css/AboutUs.css"
function AboutUs() {
    return (
        <>
            <section className='aboutUs-presentation'>
                <div className='background-filter'></div>
                <article className='whoIs-and-text'>
                    <img src="/voltar5.png" alt="" style={{ width: "10rem" }} />
                    <h1 className='title-aboutUs'>
                        <strong className='strong-aboutUs-n1'>
                            <mark>¿Quienes </mark>
                            <mark className='mark-yellow'>Somos </mark>
                        </strong>
                        <strong className='strong-aboutUs-n2'>
                            <mark>y por qué nace </mark>
                            <mark className='mark-yellow'>Voltar</mark>
                            ?
                        </strong>
                    </h1>

                    <p>Somos una empresa comprometida con la excelencia en la asistencia hotelera. Con base en Posadas, Misiones, nuestro propósito es brindar soluciones estratégicas para ayudar a los hoteles a alcanzar su máximo rendimiento operativo, financiero y de servicio.</p>
                    <p>Nos especializamos en optimizar procesos, mejorar la experiencia del huésped y potenciar la rentabilidad de nuestros clientes. En Voltar, no solo prestamos servicios, sino que nos convertimos en socios estratégicos de los hoteles que confían en nosotros, con el objetivo de posicionarlos como referentes en el mercado.</p>

                    <a href="/contacto">Quiero asistencia</a>
                </article>
            </section>
            <h2 className='aboutUs-colabs-title'>
                    <strong style={{ color: "#353535" }} className='strong-aboutUs-n1'>
                        <mark>¿Con quién colabora </mark>
                        <mark className='mark-yellow'>Voltar</mark>?
                    </strong>
                </h2>
            <section className='aboutUs-colabs-container'>
                
                <article className='aboutUs-colabs'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7RJNfi-1C8oJZPvQL-guogEDOTlT1EE0J6Q&s" alt="" />
                    <p>En colaboración con <a href="https://rturistica.com/" target='_blank'>Red Turística</a>, brindamos asesoría especializada para maximizar la rentabilidad y el desempeño de los alojamientos que forman parte de su red. Ayudamos a optimizar la comercialización, mejorar la gestión operativa y adaptar la oferta a las necesidades del mercado B2B en América.</p>
                </article>
                <article className='aboutUs-colabs'>
                    <img src="/la reserva-logo_1.jpg" alt="" />
                    <p>Somos los representantes comerciales de <a href="https://lareservavirginlodge.com/" target='_blank'>La Reserva Virgin Lodge</a> un exclusivo alojamiento ubicado en la selva de Misiones. Promovemos su propuesta única, que combina confort, aventura y sostenibilidad, destacando su compromiso con la preservación del medio ambiente. Con árboles centenarios y especies protegidas en sus 3 hectáreas, el Lodge ofrece una experiencia ideal para el descanso y la conexión con la naturaleza, asegurando un servicio de excelencia para cada huésped</p>
                </article>
            </section>
        </>
    )
}

export default AboutUs