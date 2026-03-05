import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Contest/ContestApi';

const Nav = () => {
    let { user, logOut } = useContext(AuthContext)
    let link = <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/regi'}>Register</NavLink>
        <NavLink to={'/'}>Upcoming Events</NavLink>
        <NavLink to={'/creat'}>Creat an Events</NavLink>

    </>
    const handleLogout = () => {
        logOut()
            .then(() => {
                //Navigate("/login"); // redirect after logout
            })
            .catch(error => {
                console.error(error.message);
            });
    };
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">SDEP</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-5 px-1">
                    {link}
                </ul>
            </div>

            <div className="navbar-end">
                {user ? (
                    <button className="btn" onClick={handleLogout}>
                        Logout
                    </button>
                ) : (
                    <NavLink to={'/login'}><a className="btn">Log in</a></NavLink>
                )}

            </div>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    {
                        user ? (
                            <div className="flex items-center gap-2">
                                <img
                                    src={user.photoURL}
                                    alt="profile"
                                    title={user.displayName}
                                    className="w-10 h-10 rounded-full cursor-pointer"
                                />
                            </div>
                        ) : (
                            <img src="../assets/download - Copy.png" alt="" />
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default Nav;