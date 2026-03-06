import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Contest/ContestApi';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';
const Createvent = () => {
  const { user } = useContext(AuthContext);

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
    //date check
    if (!startDate) {
      Swal.fire("Please select a date");
      return;
    }

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
          Swal.fire("Event Created Successfully!");
          form.reset()
        }
      });
  };

  return (
    <div className=''>
      <h2 className=' text-green-800 text-xl font-bold text- drop-shadow-lg'>Create Event</h2>
      <div className='flex items-center justify-center hero bg-base-200 '>
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
            />
            <br />
            <button className='border-2' type="submit">Create Event</button>
          </fieldset>
        </form>
      </div>
    </div>


  );
};

export default Createvent;