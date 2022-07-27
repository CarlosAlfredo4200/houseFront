import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="contenedor contenido-header">
        <div className="barra">

          <div className="logo">
            <h1 className="nombre-sitio">
              Arquitectura <span>BOSQUE</span>
            </h1>
          </div>


          <div className="contacto">
            <a className="telefono" href="tel:312-823-25-61">
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

      <div className="slogan">
        <h1>Tu casa en el bosque</h1>
        <p>Construimos la casa d tus sueños</p>
      </div>
      </div>
    </div>
  );
};

export default Header;
