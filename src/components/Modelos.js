import React from "react";
import Modelo from "./Modelo";
import imgBasica from "../img/modelo_basico.jpg";
import imgPremier from "../img/modelo_premier.jpg";
import imgElite from "../img/modelo_elite.jpg";
const Modelos = () => {
  return (
    <div className="contenedor">
      <h2 className="titulo-modelo">Conoce nuestros modelos</h2>

      <div className="modelo">
        <Modelo
          titulo="Modelo Básico"
          comentario="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id tincidunt erat."
          enlace="/"
        />

        <div className="contenedorImg">
          <img src={imgBasica} alt="imgbas" className="imagen" />
        </div>

        {/* -------------------- */}

        

        
         <Modelo
          titulo="Modelo Premier"
          comentario="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id tincidunt erat."
          enlace="/"
        />
        <div className="contenedorImg">
        <img src={imgPremier} alt="imgPres" className="imagen" />
        </div>

      <Modelo
        titulo="Modelo Elite"
        comentario="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id tincidunt erat."
        enlace="/"
      />
      <div className="contenedorImg">
      <img src={imgElite} alt="imgelite" className="imagen" /> 
      </div>
           
      </div>
    </div>
      
  );
};

export default Modelos;
