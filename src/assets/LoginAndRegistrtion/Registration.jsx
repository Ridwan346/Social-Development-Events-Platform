import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contest/ContestApi';
import { useLocation, useNavigate } from 'react-router';

const Registretion = () => {
    let { createUser, googleLogin, updateUserProfile } = useContext(AuthContext)
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    let Handlegoogle = () => {
        googleLogin()
            .then(result => {
                setSuccess(`Logged in as ${result.user.email}`);
                navigate(from, { replace: true });
            })
            .catch(err => {
                setError(err.message);
            });
    }
    let handleWithEmailPass = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError('')
        setSuccess('')
        createUser(email, password)
            .then((result) => {
                updateUserProfile(name, photo)
                    .then(() => {
                        setSuccess(`Registration successful as ${result.user.email}`);
                        navigate(from, { replace: true });
                    })
                    .catch(error => {
                        setError(error.message);
                    });
                setSuccess(`Login successful as ${result.user.email}`);
            })
            .catch(error => { setError(error.message) })


    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleWithEmailPass}>
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input name="name" type="text" className="input" placeholder="Your Name" />
                            <label className="label">Photo URL</label>
                            <input name="photo" type="text" className="input" placeholder="Photo URL" />
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                            {success && <p className="text-green-500 text-sm mt-2">{success}</p>}
                            <button className="btn btn-neutral mt-4">Registration</button>
                            <button onClick={Handlegoogle} className="btn bg-white text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Registration with Google
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Registretion;