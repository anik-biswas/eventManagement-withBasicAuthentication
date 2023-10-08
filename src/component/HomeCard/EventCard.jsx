
const EventCard = (event) => {
    //console.log(event)
    // const {id,image ,card_color , title_color, text_color, title , category} = donation.donation;
    const {id,image,title, price} = event.event;
    console.log(title)
    return (
        <div>
            <div className="card w-72 h-96 glass">
            <figure><img src={image} alt={title}/></figure>
            <div className="card-body">
            <h2 className="card-title text-2xl text-slate-700">{title}</h2>
            <p className="text-lg font-medium text-orange-400">{price} $</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
            </div>
            </div>
            </div>
        </div>
    );
};

export default EventCard;