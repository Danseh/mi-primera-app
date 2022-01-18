import React, {useState} from 'react';
import "./ImagenesAleatorias.css";

const ImagenesAleatorias = (props) => {
    //Parte funcional de mi componente

    ImagenesAleatorias.defaultProps = {numero:18 };

    const[enabled, setEnabled] = useState(true);

    let imagen = "https://randomuser.me/api/portraits/women/" + props.numero + ".jpg"
    let classNameImg = enabled ? "" : "disabled";
    let classNamePicture = "";
    if (props.size === "small") {
        classNamePicture = "is-small";
    }
    else if (props.size === "large") {
        classNamePicture = "is-large";
    }

    return (
        <picture className={classNamePicture}>
            <img src={imagen} alt="women" className={classNameImg} 
            onClick={() => setEnabled(!enabled)}/>
            <h3>{props.nombre}</h3>
        </picture>
    )
}

export default ImagenesAleatorias;