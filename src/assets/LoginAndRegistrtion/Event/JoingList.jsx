import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contest/ContestApi';

const JoingList = () => {
    const { user } = useContext(AuthContext);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/joinedEvents/${user.email}`)
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [user.email])
    return (
        <div>
            <h2 className="text-3xl font-bold text-center">
                My Joined Events
            </h2>

            <div className="grid gap-6 mt-6">
                {
                    events.map(event => (
                        <div key={event._id} className="card bg-base-100 shadow">
                            <div className='flex'>        
                            <tr>
                                <th>  
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={event.thumbnail}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{event.title}</div>
                                            <div className="text-sm opacity-50">{event.location}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {event.date}
                                    
                                </td>
                                
                            </tr>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
export default JoingList;