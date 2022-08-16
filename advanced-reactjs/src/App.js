import React from "react"
import PhotoGallery from "./Components/PhotoGallery"

//programacao funcional
//Smart Component

function App () {

  //site que gera fotos aleatorias
  const photos = [
    'http://placeimg.com/140/60/people',
    'http://placeimg.com/140/60/animals',
    'http://placeimg.com/140/60/tech',
    'http://placeimg.com/140/60/nature',
  ]

  // chama no botao a funcao handleClick ao evento onClick
  return (
    <>
      <div>
        <h1>Galeria de Fotos</h1>
        <PhotoGallery 
          photos={photos}
        />
      </div>
    </>
  )
}


export default App