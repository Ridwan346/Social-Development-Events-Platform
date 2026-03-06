import React from 'react';
import  { useEffect, useState } from "react";
import SingleCard from './SingleCard';

const Upcoming = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

    return (
         <div>
      <h2>All Events</h2>

    <div className='grid grid-cols-3'>
          {
        events.map(event => (
           <SingleCard key={event._id} event={event} />
        ))
      }
    </div>

    </div>
    );
};

export default Upcoming;