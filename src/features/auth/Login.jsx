import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logInUserWithCredentials, resetStatus } from "./authSlice";

export default function Login() {
    const { status, isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logInHandler = async() => {
        await dispatch(
            logInUserWithCredentials({
                email,
                password
            })
        )
    }

    useEffect(() => {
        dispatch(resetStatus());
        isAuthenticated && navigate("/");
        // eslint-disable-next-line
      }, [isAuthenticated, navigate]);



    return (
        <div className="flex items-center h-screen bg-gray-50">
            <div className="bg-white w-96 m-auto py-10 shadow-xl rounded-md">
            <div className="py-8 px-8 rounded-xl">
                <h1 className="font-light text-4xl mt-3 text-center">Welcome Back</h1>
                <form action="" className="mt-6">
                    <div className="my-5 text-sm">
                        <label htmlFor="username" className="block text-black">Email</label>
                        <input 
                            onChange={(e) => setEmail(e.target.value)}
                            type="text" 
                            autoFocus id="username" 
                            className="rounded-sm font-normal px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" 
                            placeholder="Email" />
                    </div>
                    <div className="my-5 text-sm">
                        <label htmlFor="password" className="block text-black">Password</label>
                        <input 
                            onChange={(e) => setPassword(e.target.value)}
                            type="password" 
                            id="password" 
                            className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" 
                            placeholder="Password" />
                    </div>

                    <button 
                        onClick={(e) => {e.preventDefault(); logInHandler();}}
                        className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">
                            {status === "loading" ? "Loading..." : "Login"}
                    </button>
                </form>
                <p className="mt-12 text-sm text-center font-normal text-gray-900"> Don't have an account? <Link to="/signup" className="text-black font-medium"> Create One </Link>  </p> 
            </div>
        </div>
    </div>
    )
}