import { useState, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Navlinks } from ".";

export const Navbar = () => {

    return (
        <Fragment>
            <header className="fixed top-0 left-0 w-full shadow bg-white px-4 z-20">
                <div className="flex items-center justify-center md:justify-start h-12 py-2">
                    <NavLink to="/" className="flex items-center text-xl to-blue-500">
                        <i className="bx bx-wind text-2xl transform -rotate-90 mx-4"></i>
                        <span className="hidden md:block">Wind</span>
                    </NavLink>
                </div>
            </header>

                <nav className="md:flex justify-between flex-col fixed bottom-2 w-full md:w-72 md:top-0 md:mt-16 p-4">  
                    <div>
                        <div className="hidden md:flex items-center bg-white p-3 shadow rounded-md mb-8">
                            <img 
                                className="w-12 h-auto rounded-md"
                                src="https://avatars.githubusercontent.com/u/42497931?v=4" alt="profile"/>
                            <div className="ml-2">
                                <h4 className="font-medium">Vaishnav Chandurkar</h4>
                                <span className="text-sm text-gray-500">@vaishnav</span>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow p-2">
                            <ul className="flex justify-around md:flex-col">
                                <li className="hover:bg-gray-50 hover:text-blue transition duration-250 ease"> 
                                    <Navlinks link={"/"} icon={"home"} linkName={"Feed"}/> </li>
                                <li className="hover:bg-gray-50 hover:text-blue transition duration-250 ease"> 
                                    <Navlinks link={"/explore"} icon={"planet"} linkName={"Explore"}/> </li>
                                <li className="hover:bg-gray-50 hover:text-blue transition duration-250 ease"> 
                                    <Navlinks link={"/notifications"} icon={"bell"} linkName={"Notifications"}/> </li>
                                <li className="hover:bg-gray-50 hover:text-blue transition duration-250 ease"> 
                                    <Navlinks link={"/profile"} icon={"user"} linkName={"Profile"}/> </li>
                            </ul>
                        </div>
                    </div>
                    <button to="/" className="hidden md:flex items-center bg-white p-3 shadow hover:text-blue rounded-md">
                        <i className="bx bx-log-out text-lg"></i>
                        <span className="text-base whitespace-nowrap ml-4">Log Out</span>
                    </button>
                </nav>
        </Fragment>
    )
}

