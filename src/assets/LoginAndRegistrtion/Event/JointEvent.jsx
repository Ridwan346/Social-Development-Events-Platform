import React, { useContext } from 'react';
import { AuthContext } from '../../../Contest/ContestApi';

const JointEvent = () => {
     let { user } = useContext(AuthContext)
     console.log(user)
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div  className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
             <div className="card-body">
            <form >
                <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input  defaultValue={user?.displayName} type="Name" className="input" placeholder="Name" />
                    <label className="label">Email</label>
                    <input defaultValue={user?.email} type="email" className="input" placeholder="Email" />

                    <button className="btn btn-neutral mt-4">Join Now</button>
                </fieldset>
            </form>
        </div></div></div>
    );
};

export default JointEvent;