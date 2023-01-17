import React from "react";
import "./slider.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import {AiFillCloseCircle} from "react-icons/ai"
import { useState } from "react";
import "./modal.css"
import Description from "./Description"

// const apiKey = process.env.REACT_APP_NASA_KEY;

const CardSlider = (props) => {
  const [modal, setModal] = useState(false);
  const photoData = props.propsData.photoData;
  if (!photoData) return <div />;

  console.log("photo data:::", photoData);
  const slides = [1, 2, 3, 4, 5, 6, 7];
  let slide;


  //modal
  

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }


  return (
    <div>
        {slides.map(
          (slide,
          (index) => {
            return ( 
    <div className="main-slider-container">
      <div className="slider">
        {slides.map(
          (slide,
          (index) => {
            return (
              <div
                className="slider-card"
                key={index}
                onClick={toggleModal}
                style={{ backgroundImage: `url(${photoData.url})` }}
              >
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
                  <p className="slider-card-title">
                    {photoData.title.substring(0, 22)}
                    ...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {photoData.date}
                  </p>
                </div>
                {/* <p className="slider-card-description">{photoData.explanation}</p> */}
              </div>
            );
          })
        )}
      </div>

      {modal && (
    <div className="modal">
      <div onClick={toggleModal} className="overlay"></div>
      <div className="modal-content">
        <Description photoData={photoData}/>
        <AiFillCloseCircle className="close-modal" onClick={toggleModal}/>
      </div>
    </div>
   )} 
    </div>
            )}))}
    </div>

  );
};

export default CardSlider;
