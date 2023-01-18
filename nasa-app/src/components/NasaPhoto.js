/* eslint-disable no-template-curly-in-string */
import React from "react";
import { useEffect, useState } from "react";
import NavBar from "./Navbar";
import CardSlider from "./CardSlider";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import Description from "./Description";
import { AiFillCloseCircle } from "react-icons/ai";
import { json } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import CardSkeleton from "./CardSkeleton";
import NasaPhotoSkeleton from "./NasaPhotoSkeleton";


const apiKey = process.env.REACT_APP_NASA_KEY;

// const sliderClick = (slider)=>{
//     alert("item selected");
// }

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);
  const [photoDataBundle, setPhotoDataBundle] = useState(null);

  useEffect(() => {
    fetchPhoto();

    //photo of the day
    async function fetchPhoto(date) {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    }
  }, []);


  //bulk data using start date and end date
  useEffect(() => {
    fetchPhotoBundle();
  async function fetchPhotoBundle() {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=2022-09-20&end_date=2022-10-29&thumbs=true`
    ,{
        method: 'GET',
        mode: 'cors',
        dataType: json,
        headers: {Accept: 'application/json',"Access-Control-Allow-Credentials" : true ,'Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'application/json'},}).catch((err) => console.log(err));
    const data = await res.json();
    setPhotoDataBundle(data);
    console.log(data);
  }
}, []);
console.log("photodatabundle",photoDataBundle)

//modal
    const [modal, setModal] = useState(false);
    const [slider,setSlider]=useState(null);
    const toggleModal = (data) => {
        console.log("slider dtat:::",data)
        setSlider(data);
        setModal(!modal);
      };
    
      if (modal) {
        document.body.classList.add("active-modal");
      } else {
        document.body.classList.remove("active-modal");
      }

const propsData = {photoDataBundle: photoDataBundle, clickEvent: toggleModal}
  if (!photoData) return <div />;

  

  return (
    <>
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
    
    <NavBar />
    {!photoData && <NasaPhotoSkeleton/>}
    <div className="description" >
    <div>
    <h1 className="title">{photoData.title}</h1>
    <p className="explanation">{photoData.explanation}</p>
    {photoData.copyright && <p className="author">Authored by <b>{photoData.copyright}</b></p>}
    </div>
    <div className="nasa-photo">
    
      {
        (photoData.media_type = "image" ? (
          <img className="photo" src={photoData.url || <Skeleton circle width={6}/>} alt={photoData.title} />
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
       || <Skeleton height={300} width={300}/>}
      
      {/* <p className="date">{photoData.date}</p> */}
      
    </div>
    </div>
{!photoDataBundle && <CardSkeleton/>}
    <CardSlider propsData={propsData}/>
    {modal && (
                          <div className="modal">
                            <div
                              onClick={toggleModal}
                              className="overlay"
                            ></div>
                            <div className="modal-content">
                              <Description photoData={slider} />
                              <AiFillCloseCircle
                                className="close-modal"
                                onClick={toggleModal}
                              />
                            </div>
                          </div>
                        )}
    </SkeletonTheme>
    </>
  );
}
