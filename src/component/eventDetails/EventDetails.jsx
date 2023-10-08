import { useLoaderData, useParams } from "react-router-dom";

const EventDetails = () => {
    const events = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const event = events.find(event => event.id === idInt);
    //console.log(event);
    const {image,title, price,description} = event;

    return (
        <div>
            <div className="grid py-5 justify-items-center ">
            <div className="card lg:card-side w-4/5 h-80 bg-blue-100 shadow-xl">
            <figure className="w-full lg:w-1/2"><img src={image} alt="Album"/></figure>
            <div className="card-body">
            <h2 className="card-title text-3xl font-bold text-orange-800">{title}</h2>
            <p className="text-2xl text-orange-500 font-semibold"><span className="text-zinc-950">Price: </span>{price} $</p>
            <p></p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
            </div>
            </div>
            </div>
            </div>
            <div>
            <h2 className="text-4xl px-5 underline text-red-400 my-10">Description</h2>
            <p className="text-xl px-20 text-justify">{description}</p>
            </div>
        </div>
    );
};

export default EventDetails;