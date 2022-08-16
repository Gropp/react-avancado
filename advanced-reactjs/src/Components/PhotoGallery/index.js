import React, {memo, useState} from "react";
import Button from "../Button";
//memo nao deixa o componente ser renderizado sem necessidade
//smartcomponent
//estado
//manipula dados externos
//retorna funcoes

function PhotoGallery (props) {

    const { photos } = props

    const [gallery, setGallery] = useState(photos)

    const handleRemove = (key) => {
        const newGallery = gallery.filter((img, index) => index !== key)
        setGallery(newGallery)
    }

    const renderPhotos = (img, key) => {
        return (
            <div>
                <img src={img} alt="Imagens aleatorias"/>
                <Button onClick={() => handleRemove(key)}>
                    Remover {key}
                </Button>
            </div>
        )
    }

    

    return (
        <div>
            {gallery.map(renderPhotos)}
        </div>
    )
}

export default memo(PhotoGallery)