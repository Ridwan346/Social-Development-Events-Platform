import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import { AuthContext } from "../../../Contest/ContestApi";

const UpdateEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [event, setEvent] = useState({ title: "", date: "", location: "", type: "", thumbnail: "" });

  // Fetch event
  useEffect(() => {
    fetch(`http://localhost:5000/events/${id}`)
      .then(res => res.json())
      .then(data => setEvent(data));
  }, [id]);

  const handleChange = e => setEvent({ ...event, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`http://localhost:5000/updateEvent/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...event, email: user.email }),
    }).then(() => navigate("/Manageevent")); // update হলে redirect
  };

  return (
    <div className="max-w-md mx-auto p-4">

    <h2 className=' text-green-800 text-xl font-bold text- drop-shadow-lg'>Update Event</h2>
          <div className='flex items-center justify-center hero bg-base-200 '>
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset gap-3 bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <input type="text"  name="title" placeholder="Event Title" value={event.title} readOnly />
                <br />
                <select name="eventType" readOnly required>
                  <option value="">Select Event Type</option>
                  <option value="Cleanup">Cleanup</option>
                  <option value="Plantation">Plantation</option>
                  <option value="Donation">Donation</option>
                </select>
                <br />
                <input
                  type="text"
                  name="thumbnail"
                  placeholder="Thumbnail Image URL"
                  value={event.thumbnail} readOnly
                  required
                />
                <br />
                <input type="text" value={event.location} readOnly name="location" placeholder="Location" required />
                <br />
                <input type="date" name="date" value={event.date} onChange={handleChange} />
                <button className='border-2' type="submit">Update Event</button>
              </fieldset>
            </form>
          </div>
      

    </div>
  );
};

export default UpdateEvent;