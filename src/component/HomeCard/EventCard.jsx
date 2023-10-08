import { Link } from "react-router-dom";

const EventCard = (event) => {
    
    const {id,image,title, price} = event.event;
    console.log(title)
    return (
        <div>
            <div className="card w-72 h-96 bg-blue-100">
            <figure><img src={image} alt={title}/></figure>
            <div className="card-body">
            <h2 className="card-title text-2xl text-orange-800">{title}</h2>
            <p className="text-lg font-medium text-orange-500"><span className="text-slate-950">Price: </span> {price} $</p>
            <div className="card-actions justify-end">
            <Link to={`/event/${id}`}><button className="btn btn-primary bg-red-500 border-none">Details</button></Link>
            </div>
            </div>
            </div>
            
        </div>
    );
};

export default EventCard;