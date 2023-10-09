import { useEffect, useState } from "react";
import EventCard from "./EventCard";

const HomeCard = () => {
    const [events,setEvents] = useState([]);
    useEffect ( () => {
        fetch('events.json')
        .then (res => res.json())
        .then(data =>setEvents(data))
        
    },[])
    // console.log(events)
    return (
        <div >
           <h2 className="text-5xl text-orange-600 text-center">Events</h2> 
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 justify-items-center  mt-10">
            {
                
                events.map(event => <EventCard event={event} key={event.id}></EventCard>)
            }
        </div>
        </div>
    );
};

export default HomeCard;