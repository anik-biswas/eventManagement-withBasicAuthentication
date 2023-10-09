import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";

const EventDetails = () => {
    
    const events = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const event = events.find(event => event.id === idInt);
    //console.log(event);
    const {image,title,images, price,description} = event;
   
    console.log(images);
   
    return (
        
        <div>
            <div className="grid py-5 justify-items-center ">
            <div className="card lg:card-side w-4/5 h-80 lg:h-80 bg-blue-100 shadow-xl">
            <figure className="w-full md:w-full lg:w-1/2 h-full"><img src={image} alt="Album" className=""/></figure>
            <div className="card-body">
            <h2 className="card-title text-3xl font-bold text-orange-800">{title}</h2>
            <p className="text-2xl text-orange-500 font-semibold"><span className="text-zinc-950">Price: </span>{price} $</p>
            <p></p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Book</button>
            </div>
            </div>
            </div>
            </div>
            <div>
            <h2 className="text-5xl text-orange-600 text-center my-10">Description</h2>
            <p className="text-xl px-20 text-justify">{description}</p>
            </div>
            <div>
            <h2 className="text-5xl text-orange-600 text-center my-10">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
            {images.map((imgs, index) => (
                <li key={index} className="list-none">
                  <img src={imgs} alt={`Image ${index + 1}`} className="h-60 w-60" />
                </li>
              ))}
              </div>
            </div>

        </div>
    );
};

export default EventDetails;