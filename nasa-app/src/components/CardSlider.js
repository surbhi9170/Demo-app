import React from "react";
import "./slider.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useEffect, useState } from "react";

const apiKey = process.env.REACT_APP_NASA_KEY;

const CardSlider = (props) => {
  

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

  if (!photoData) return <div />;

  const slides = [1, 2, 3, 4, 5, 6, 7];
  let slide;
  return (
    <div className="main-slider-container">
      <MdChevronLeft size={40} className="slider-icon left" />
      <div className="slider">
        {slides.map(
          (slide,
          (index) => {
            return (
              <div className="slider-card" key={index} style={{backgroundImage:`url(${photoData.url})`}}>

                    {/* {
        (photoData.media_type = "image" ? (
          <div className="slider-card-image" style={{backgroundImage:`url(${photoData.url})`}} />
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
                */}
               <div className="slider-card-title-bg">
                <p className="slider-card-title">{photoData.title.substring(0, 22)}...&nbsp;&nbsp;&nbsp;{photoData.date}</p>
                </div>
                {/* <p className="slider-card-description">{photoData.explanation}</p> */}
              </div>
            );
          })
        )}
      </div>
      <MdChevronRight size={40} className="slider-icon right" />
    </div>
  );
};

export default CardSlider;
