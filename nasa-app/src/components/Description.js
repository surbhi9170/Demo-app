import React from "react";
import Skeleton from "react-loading-skeleton";

const Description=(props)=>{

    const photoData = props.photoData;
    return (
            <div className="description" >
    <div>
    <h1 className="title">{photoData.title}</h1>
    <p className="explanation">{photoData.explanation}</p>
    <p className="author">Authored by <b>{photoData.copyright}</b></p>
    </div>
    <div className="nasa-photo">
      {
        (photoData.media_type = "image" ? (
          <img className="photo photo-modal" src={photoData.url} alt={photoData.title} />
        ) : (
          <iframe
            title="space-video"
            src={photoData.url}
            frameBorder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
            className="photo"
          />
        ))
      }
      
      {/* <p className="date">{photoData.date}</p> */}
      
    </div>
    </div>

    )

}

export default Description;