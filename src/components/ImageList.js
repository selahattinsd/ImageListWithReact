import React from "react";
import "./ImageList.css" ;

const ImageList = (props) => {
  const images = props.images.map(image => {
        return <img className="image-item" key={image.id} src={image.webformatURL}/>
    });
    return(
        <div className="image-list">
            {images}
        </div>
    )
}
export default ImageList;