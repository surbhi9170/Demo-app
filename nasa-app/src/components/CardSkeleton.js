import Skeleton from "react-loading-skeleton";

const CardSkeleton = ()=>{
const slides=[1,2,3,4]
let slide;
    return (
        <div className="card-skeleton">
            <div className="main-slider-container">
              <div className="slider">
                {slides.map(
                  (slide,
                  (index) => {
                    return (
                      <div
                        className="slider-card"
                        key={index}
                      >
                        <Skeleton  width={345} height={250} />

                        <div className="slider-card-title-bg">
                            <Skeleton height={30}/>
                          {/* <p className="slider-card-title">
                            <Skeleton />
                            
                          </p> */}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
              </div>
              </div>
    )

}

export default CardSkeleton;