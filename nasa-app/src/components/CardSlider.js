import React from "react";
import "./slider.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiFillCloseCircle,AiFillPlayCircle } from "react-icons/ai";
import { useState } from "react";
import "./modal.css";
import "./Modal"
import Description from "./Description";
import Modal from "./Modal";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";

// const apiKey = process.env.REACT_APP_NASA_KEY;

const CardSlider = (props) => {
  const [modal, setModal] = useState(false);
  const photoData = props.propsData.photoDataBundle;

  if (!photoData) return <div />;

  const l = Math.floor(photoData.length / 7);
  const verticalSlides = Array.from(Array(l).keys());
  console.log("vvvbbjwnd", verticalSlides);
  const slides = [1, 2, 3, 4, 5, 6, 7];
  let slide,type;

  const mediaType = (type) => {
       if (type==="image")
       {
        
         return "url";
         
       }
       else{
         return "thumbnail_url";
       }
      };
  //modal

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  
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
