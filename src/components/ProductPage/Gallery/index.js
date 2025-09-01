
import { useState } from 'react'
import './index.css'


const Gallery = () => {

 const [mainImage, setMainImage] = useState("/images/fruit-basket.jpg")




 const thumbnails  = [

    { src: "/images/apple.jpg", alt: "Apple" },
    { src: "/images/banana.jpg", alt: "Banana" },
    { src: "/images/grapes.jpg", alt: "Grapes" },
    { src: "/images/orange.jpg", alt: "Orange" },
    { src: "/images/carrot.jpg", alt: "Carrot" },
    { src: "/images/Broccoli.jpg", alt: "Broccoli" },
    { src: "/images/tomato.jpg", alt: "Tomato" },



 ];

  return (
    <aside className='gallery'>

 
    <div className='main-image'>
        <img src={mainImage} alt='main' className='veg-fruits-basket'/>
      
    </div>
      <div className='thumbs'>
      {
        thumbnails.map((thumb, index) => (
            <img
            key={index}
            src={thumb.src}
            alt={thumb.alt}
            className='thumbs-image'
            onClick={() => setMainImage(thumb.src)}
            
            
            />
        ))
      }

      </div>

       </aside>
  )
}

export default Gallery
