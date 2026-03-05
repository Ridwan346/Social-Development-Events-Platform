import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Contest/ContestApi';
import { useNavigate } from 'react-router';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Createvent = () => {
    const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const newEvent = {
      title: form.title.value,
      description: form.description.value,
      eventType: form.eventType.value,
      thumbnail: form.thumbnail.value,
      location: form.location.value,
      date: startDate,
      email: user?.email,
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
          navigate("/upcoming-events");
        }
      });
  };

  return (
    <div>
        <h2>Create Event</h2>
         <div className='flex items-center justify-center'>
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset gap-3 bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <input type="text" name="title" placeholder="Event Title" required />
         <br />
        <textarea
          name="description"
          placeholder="Event Description"
          required
        ></textarea>
        <br />
        <select name="eventType" required>
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
          required
        />
         <br />
        <input type="text" name="location" placeholder="Location" required />
        <br />
        {/* Date Picker */}
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          minDate={new Date()} // ❗ Prevent Past Date
          placeholderText="Select Event Date"
          required
        />
        <br />
        <button type="submit">Create Event</button>
        </fieldset>
      </form>
    </div>
    </div>
    
   
  );
};

export default Createvent;