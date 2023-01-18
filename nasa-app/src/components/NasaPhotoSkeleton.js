import Skeleton from "react-loading-skeleton";

const NasaPhotoSkeleton = ()=>{

    return (
        <div className="description" >
    <div>
    <h1 className="title"><Skeleton height={20}/></h1>
    <p className="explanation"><Skeleton count={20}/></p>
    <p className="author"><Skeleton/></p>
    </div>
    <div className="nasa-photo"><Skeleton/></div>
    </div>
    )
}
export default NasaPhotoSkeleton;