import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOutUser } from "../features/auth/authSlice";

export const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [stackVisible, setStackVisible] = useState(false)
    const dispatch = useDispatch();

    const logOutHandler = () => {
        dispatch(logOutUser())
    }

    return (
        <nav className="flex justify-between p-2 rounded shadow">
            <div className="flex items-center">
                <i className='bx bx-wind transform -rotate-90 text-2xl'></i>
                <div className="text-xl font-normal mx-4">Hyper</div>
            </div>
            <div className="flex items-center">
                <ul className="flex cursor-pointer">
                    <li className="mx-2">
                        <Link to="/"><i className='bx bx-home-circle text-xl'></i></Link>
                    </li>
                    <li className="mx-2">
                        <button 
                            onClick={() => setStackVisible((preState) => !preState)}
                            className="relative">
                            <i className='bx bx-bell text-xl'></i>
                        </button>
                        <div className={`${stackVisible ? "block" : "hidden"} origin-top-left absolute mt-3 w-64 rounded overflow-hidden shadow-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                            <ul>
                                <li className="px-1 py-1 hover:bg-gray-50 border-b">She'd were female from blessed fifth whose. Face had own.</li>
                                <li className="px-1 py-1 hover:bg-gray-50 border-b">She'd were female from blessed fifth whose. Face had own.</li>
                                <li className="px-1 py-1 hover:bg-gray-50 border-b">She'd were female from blessed fifth whose. Face had own.</li>
                            </ul>
                        </div>
                    </li>
                    <li className="mx-2">
                        <button 
                            onClick={() => setMenuVisible((preState) => !preState)}
                            className="relative">
                            <i className='bx bx-user text-xl'></i>
                        </button>
                        <div className={`${menuVisible ? "block" : "hidden"} origin-top-right absolute mt-3 w-28 rounded overflow-hidden shadow-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                            <ul>
                                <li className="py-1 px-2 hover:bg-blue-50">Profile</li>
                                <li className="py-1 px-2 hover:bg-blue-50">Account</li>
                                <li className="py-1 px-2 hover:bg-red-50 hover:text-red-600">
                                    <button onClick={logOutHandler}>Log Out</button>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}