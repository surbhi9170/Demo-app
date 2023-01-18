import React from "react";
import "./slider.css";
import { AiFillPlayCircle } from "react-icons/ai";
import "./modal.css";
import "./Modal"



// const apiKey = process.env.REACT_APP_NASA_KEY;

const CardSlider = (props) => {
  const photoData = props.propsData.photoDataBundle;

  if (!photoData) return <div />;

  const l = Math.floor(photoData.length / 7);
  const verticalSlides = Array.from(Array(l).keys());
  const slides = [1, 2, 3, 4, 5, 6, 7];
  let slide;

  const mediaType = (type) => {
       if (type==="image")
       {
        
         return "url";
         
       }
       else{
         return "thumbnail_url";
       }
      };
  
  return (
    <div>
      {verticalSlides.map(
        (slide,
        (index1) => {
          return (
            <div className="main-slider-container" key={index1}>
              <div className="slider">
                {slides.map(
                  (slide,
                  (index) => {
                    return (
                      <div
                        className="slider-card"
                        key={index}
                        onClick={()=>props.propsData.clickEvent(photoData[index+index1*7])}
                        style={{
                          backgroundImage: `url(${photoData[index+index1*7][mediaType(photoData[index+index1*7].media_type)]})`,
                        }}
                      >
                        {/* {
                          (photoData[index+index1*7].media_type==="video")&&
                          <button className="overlay-button">
                          <AiFillPlayCircle className="overlay-play-button__overlay"></AiFillPlayCircle>
                          </button>
                        } */}

                        <div className="slider-card-title-bg">
                          <p className="slider-card-title">
                            {photoData[index+index1*7].title.substring(0, 20)}
                            ...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {photoData[index+index1*7].date}
                          </p>
                        </div>
                        {
                          (photoData[index+index1*7].media_type==="video")&&
                          <AiFillPlayCircle className="overlay-play-button__overlay" onClick={event =>  window.location.href=`${photoData[index+index1*7].url}`}>play</AiFillPlayCircle>}
                      </div>
                      
                    );
                  })
                )}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default CardSlider;
