import React from 'react';
import { useLoaderData } from 'react-router';

const EventDetail = () => {
    const event = useLoaderData();
    console.log(event)
    return (
        <div className="card lg:card-side bg-base-100 shadow-sm">
            <figure>
                <img className='h-60 w-72'
                    src={event.thumbnail}
                    alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{event.title}</h2>
                <button className="btn btn-wide">{event.eventType}</button>
               
                <p>{event.description}</p>
                 <p>Location: {event.location}</p>
                <p>Time: {event.date}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"></button>
                </div>
            </div>
        </div>
    );
};

export default EventDetail;