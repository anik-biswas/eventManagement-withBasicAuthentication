import { useLoaderData } from "react-router-dom";
import GallerySet from "./GallerySet";

const Gallery = () => {
    const events = useLoaderData();
    
    return (
        <div>
            <h2 className="text-5xl text-orange-600 text-center mt-4">Gallery</h2> 
           <div className="grid grid-cols-1  gap-y-5 justify-items-center  mt-10">
            {
                
                events.map(event => <GallerySet event={event} key={event.id}></GallerySet>)
            }
        </div>
        </div>
    );
};

export default Gallery;