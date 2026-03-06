import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contest/ContestApi';
import { NavLink, useParams } from 'react-router';

const JointEvent = () => {
    const { id } = useParams();
    let { user } = useContext(AuthContext)
    console.log(user)
    const [event, setEvent] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/events/${id}`)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();

        const newEvent = {  
        eventId: id,
        title: event.title,
        date: event.date,
        thumbnail: event.thumbnail,
        location: event.location,
        name: user?.displayName,
        email: user?.email    
        };

        console.log(newEvent);
       

        // Send to backend
        fetch("http://localhost:5000/events/participate", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newEvent),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert("Event Created Successfully!");
                }
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input defaultValue={user?.displayName} type="Name" className="input" placeholder="eventType" />
                            <label className="label">Email</label>
                            <input defaultValue={user?.email} type="email" className="input" placeholder="Email" />

                            <button className="btn btn-neutral mt-4">Join Now</button>
                            <NavLink to={'/jonitingList'}> <button className="btn btn-neutral mt-4">See your Joining List</button></NavLink>
                        </fieldset>
                    </form>
                </div></div></div>
    );
};

export default JointEvent;