import React from 'react'


const Modelo = (data) => {

    const {titulo, comentario, enlace} = data;
  return (
    <div className='' >
        

    <div className="contenido-modelo ">

        <h3>{titulo}</h3>

      <p>
         {comentario}
      </p> 

       <a className='enlace-modelo' href={enlace} >Más información</a>
        </div>
    </div>
  
  )
}

export default Modelo