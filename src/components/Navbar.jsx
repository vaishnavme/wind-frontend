import { useState, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Navlinks } from ".";

export const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    
    const toggleBtnHandler = () => setToggle(
        (prevState) => !prevState
    )

    return (
        <Fragment>
            <header className="fixed top-0 left-0 w-full shadow bg-white px-4 z-20">
                <div className="flex items-center justify-between h-12 py-2">
                    <NavLink to="/" className="flex items-center text-xl to-blue-500">
                        <i className="bx bx-wind text-2xl transform -rotate-90 mx-4"></i>
                        Wind
                    </NavLink>
                    <div className="text-2xl cursor-pointer md:hidden" onClick={() => toggleBtnHandler()}>
                        <i className={toggle ? `bx bx-x` : `bx bx-menu-alt-right`}></i>
                    </div>
                </div>
            </header>

            <div className={toggle ? `${navStyle} left-0 w-full` : `${navStyle} -left-full md:left-0 w-72 pt-5 px-6`}>
                <nav className="flex justify-between flex-col h-full pb-12 overflow-auto">
                    <div>
                        <NavLink to="/" className="mb-10 font-semibold to-blue-500 flex items-center">
                            <i className="bx bx-wind text-2xl transform -rotate-90"></i>
                            <span className="text-lg whitespace-nowrap ml-4">Wind</span>
                        </NavLink>

                        <div className="flex items-center bg-white p-3 shadow rounded-md mb-8">
                            <img 
                                className="w-12 h-auto rounded-md"
                                src="https://avatars.githubusercontent.com/u/42497931?v=4" alt="profile"/>
                            <div className="ml-2">
                                <h4 className="font-medium">Vaishnav Chandurkar</h4>
                                <span className="text-sm text-gray-500">@vaishnav</span>
                            </div>
                        </div>

                        <div className="grid gap-y-10 bg-white rounded-xl shadow p-2">
                            <ul>
                                <li> <Navlinks link={"/"} icon={"home"} linkName={"Feed"}/> </li>
                                <li> <Navlinks link={"/explore"} icon={"planet"} linkName={"Explore"}/> </li>
                                <li> <Navlinks link={"/notifications"} icon={"bell"} linkName={"Notifications"}/> </li>
                                <li> <Navlinks link={"/profile"} icon={"user"} linkName={"Profile"}/> </li>
                            </ul>
                        </div>
                    </div>
                    <button to="/" className="flex items-center bg-white p-3 shadow rounded-md">
                        <i className="bx bx-log-out text-lg"></i>
                        <span className="text-base whitespace-nowrap ml-4">Log Out</span>
                    </button>
                </nav>
            </div>
        </Fragment>
    )
}
//left-0 show
//-left-full hide
const navStyle = "fixed top-0 h-full pt-4 px-2 pb-0 bg-gray-50 z-10 overflow-hidden transition-all duration-500 ease"