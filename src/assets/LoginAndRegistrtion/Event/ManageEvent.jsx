import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Contest/ContestApi";

const ManageEvents = () => {
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/myEvents/${user.email}`)
        .then((res) => res.json())
        .then((data) => setEvents(data));
    }
  }, [user]);

  const handleUpdate = (id) => {
    console.log(id)
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/deleteEvent/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email }),
    })
      .then((res) => res.json())
      .then(() => {
        
        setEvents(events.filter((event) => event._id !== id));
      });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-4">
        My Created Events
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event._id} className="card bg-base-100 shadow p-4">
            <img src={event.thumbnail} alt="" className="h-48 w-full object-cover" />
            <h2 className="card-title mt-2">{event.title}</h2>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>

            <div className="mt-2 flex gap-2">
              <button
                className="btn btn-sm btn-primary"
                onClick={() => handleUpdate(event._id)}
              >
                Update
              </button>

              <button
                className="btn btn-sm btn-error"
                onClick={() => handleDelete(event._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageEvents;