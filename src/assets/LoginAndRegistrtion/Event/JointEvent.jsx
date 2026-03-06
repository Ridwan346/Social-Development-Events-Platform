import React, { useContext } from 'react';
import { AuthContext } from '../../../Contest/ContestApi';
import { useParams } from 'react-router';

const JointEvent = () => {
    const { id } = useParams();
    let { user } = useContext(AuthContext)
    console.log(user)

    const handleSubmit = (e) => {
        e.preventDefault();

        const newEvent = {
             eventId: id,
            name: user?.displayName,
            email: user?.emai
           
        };

        console.log(newEvent);
       

        // Send to backend
        fetch("http://localhost:5000/events", {
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
                        </fieldset>
                    </form>
                </div></div></div>
    );
};

export default JointEvent;