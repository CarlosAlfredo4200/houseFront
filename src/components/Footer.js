import React from 'react'

const Footer = () => {
  return (
    <footer className="">

        <div className='footer'>

        <div className="barra footer-barra">

          <div className="logo">
            <h1 className="footer-nombre-sitio">
              Arquitectura <span>BOSQUE</span>
            </h1>
          </div>


          <div className="contacto">
            <a className="telefono footer-telefono" href="tel:312-823-25-61">
              312 823 25 61
            </a>

            <nav className="navegacion">
              <a className="link" href="/">
                Inicio
              </a>
              <a className="link" href="/">
                Nosotros
              </a>
              <a className="link" href="/">
                Modelos
              </a>
              <a className="link" href="/">
                Galeria
              </a>
              <a className="link" href="/">
                Contacto
              </a>
            </nav>
            {/* ---- */}
          </div>
          
        </div>
        <p className='copyright'>Todos los derechos reservados</p>

      
        </div>

      </footer>
  )
}

export default Footer