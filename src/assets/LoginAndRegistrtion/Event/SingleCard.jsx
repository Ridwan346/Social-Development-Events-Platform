import React from 'react';
import { NavLink } from 'react-router';

const SingleCard = ({ event }) => {
    const { title, date ,thumbnail,_id} = event
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const eventDate = new Date(date)
    const Upcoming = eventDate >= today

    // Status define 
    const isUpcoming = eventDate >= today;
    const status = isUpcoming ? "Upcoming" : "Closed";

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img className='h-52 w-50'
                    src={thumbnail}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">
                        {isUpcoming && <div>{status}</div>}
                        {!isUpcoming && <div>{status}</div>}
                    </div>
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="bg-white p-6">
                    <NavLink to={`/jonitEvent/${_id}`}> <button className="btn btn-neutral btn-outline">Join event</button></NavLink>
                    
                    <NavLink to={`/eventDetai/${_id}`}> <button className="btn btn-neutral btn-outline">Event details</button></NavLink>    
                </div>
            </div>
        </div>
    );
};

export default SingleCard;