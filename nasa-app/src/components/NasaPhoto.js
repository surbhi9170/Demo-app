/* eslint-disable no-template-curly-in-string */
import React from "react";
import { useEffect, useState } from "react";
import NavBar from "./Navbar";
import CardSlider from "./CardSlider";


const apiKey = process.env.REACT_APP_NASA_KEY;

const sliderClick = (slider)=>{
    alert("item selected");
}

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    }
  }, []);

  const propsData = {photoData: photoData, clickEvent: sliderClick}

  if (!photoData) return <div />;


  return (
    <>
    <NavBar />
    <div className="description" >
    <div>
    <h1 className="title">{photoData.title}</h1>
    <p className="explanation">{photoData.explanation}</p>
    <p className="author">Authored by <b>{photoData.copyright}</b></p>
    </div>
    <div className="nasa-photo">
      {
        (photoData.media_type = "image" ? (
          <img className="photo" src={photoData.url} alt={photoData.title} />
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
    
    <CardSlider propsData={propsData}/>
    </>
  );
}
