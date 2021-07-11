import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { logOutUser } from "../features/auth/authSlice";
import { Navlinks, InitialDP } from ".";

export const Navbar = () => {
    const { userId } = useSelector(state => state.auth);
    const { profile } = useSelector(state => state.profile);
    const dispatch = useDispatch();

    const logOutHandler = () => {
        dispatch(logOutUser());
    }

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
                        <div className="hidden md:flex items-center justify-around bg-white p-3 shadow rounded-md mb-8">
                            {
                                profile?.profilePhoto ?
                                <img 
                                    className="w-12 h-auto rounded-md"
                                    src="https://avatars.githubusercontent.com/u/42497931?v=4" alt="profile"/>
                                :
                                <InitialDP 
                                    name={profile?.name}
                                    size={14}
                                    fontSize={"text-3xl"}
                                />
                            }
                            <div className="">
                                <h4 className="font-medium">{profile?.name}</h4>
                                <span className="text-sm text-gray-400 font-medium">@{profile?.username}</span>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow p-2">
                            <ul className="flex justify-around md:flex-col">
                                <li> <Navlinks link={"/"} icon={"home"} linkName={"Feed"}/> </li>
                                <li> <Navlinks link={"/explore"} icon={"planet"} linkName={"Explore"}/> </li>
                                <li> <Navlinks link={"/notifications"} icon={"bell"} linkName={"Notifications"}/> </li>
                                <li> <Navlinks link={`/profile/${userId}`} icon={"user"} linkName={"Profile"}/> </li>
                            </ul>
                        </div>
                    </div>
                    <button 
                        onClick={() => logOutHandler()} 
                        className="hidden md:flex items-center bg-white p-3 shadow hover:text-blue rounded-md">
                            <i className="bx bx-log-out text-lg"></i>
                            <span className="text-base whitespace-nowrap ml-4">Log Out</span>
                    </button>
                </nav>
        </Fragment>
    )
}

