import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs.js";
import { GifItem } from "./GifItem.jsx";



const GifGrid = ({category}) => { 

  const [images, setImages] = useState([]);

  const getImages = async() => {
    const newImages = await getGifs( category );
    setImages(newImages);
  }

  useEffect( () => {
    getImages(); 
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map( (image) => 
          (<GifItem 
            key={image.id}
            { ...image }
            // también con image={image} van todas las propiedades
          />)
        )}        
      </div>
      
    </>
  )
}

export default GifGrid
