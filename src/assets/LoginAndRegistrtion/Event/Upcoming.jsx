import React from 'react';
import  { useEffect, useState } from "react";
import SingleCard from './SingleCard';

const Upcoming = () => {

  const [events, setEvents] = useState([]);
   const [search, setSearch] = useState(""); 

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

   const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(search.toLowerCase())
  );

    return (
         <div>
      <h2 className="text-green-800 m-7 text-4xl font-bold text- drop-shadow-lg">All Events</h2>
        <input
        type="text"
        placeholder="Search event..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 m-7 w-1/2"
      />
    <div className='grid grid-cols-3'>
          {
        filteredEvents.map(event => (
           <SingleCard key={event._id} event={event} />
        ))
      }
    </div>

    </div>
    );
};

export default Upcoming;