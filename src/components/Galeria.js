import React from 'react'
import imgGaleria1 from '../img/imagen_1.jpg';
import imgGaleria2 from '../img/imagen_2.jpg';
import imgGaleria3 from '../img/imagen_3.jpg';
import imgGaleria4 from '../img/imagen_4.jpg';
import imgGaleria5 from '../img/imagen_5.jpg';
import imgGaleria6 from '../img/imagen_6.jpg';
import imgGaleria7 from '../img/imagen_7.jpg';
const Galeria = () => {
  return (
    <section className='contenedor'>
         <h2>Galeria</h2>

         <div className='galeria'>
            <div className='galeria-imagen'>
                <img src={imgGaleria1} alt='img gal 1'/>
            </div>


            <div className='galeria-imagen'>
                <img src={imgGaleria2} alt='img gal 1'/>
            </div>

            <div className='galeria-imagen'>
                <img className='img3' src={imgGaleria3} alt='img gal 1'/>
            </div>

            <div className='galeria-imagen'>
                <img className='img4' src={imgGaleria4} alt='img gal 1'/>
            </div>

            <div className='galeria-imagen'>
                <img src={imgGaleria5} alt='img gal 1'/>
            </div>

            <div className='galeria-imagen'>
                <img src={imgGaleria6} alt='img gal 1'/>
            </div>

            <div className='galeria-imagen'>
                <img src={imgGaleria7} alt='img gal 1'/>
            </div>

            


            
         </div>
        </section>
  )
}

export default Galeria