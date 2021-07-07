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
                email, password
            })
        )
    }

    useEffect(() => {
        dispatch(resetStatus());
        isAuthenticated && navigate("/");
        // eslint-disable-next-line
      }, [isAuthenticated, navigate]);

    return (
        <div className="flex items-center h-screen">
            <div className="w-96 m-auto py-10 shadow-xl rounded-md bg-dark-800">
            <div className="py-8 px-8 rounded-xl">
                <h1 className="font-light text-4xl mt-3 text-center">Welcome Back</h1>
                <form action="" className="mt-6">
                    <div className="my-5 text-sm">
                        <label htmlFor="email" className="block">Email</label>
                        <input 
                            onChange={(e) => setEmail(e.target.value)}
                            type="text" 
                            autoFocus id="email" 
                            className="rounded font-normal px-4 py-3 mt-3 focus:outline-none bg-dark-900 w-full" 
                            placeholder="Email" />
                    </div>
                    <div className="my-5 text-sm">
                        <label htmlFor="password" className="block">Password</label>
                        <input 
                            onChange={(e) => setPassword(e.target.value)}
                            type="password" 
                            id="password" 
                            className="rounded px-4 py-3 mt-3 focus:outline-none bg-dark-900 w-full" 
                            placeholder="Password" />
                    </div>

                    <button 
                        onClick={(e) => {e.preventDefault(); logInHandler();}}
                        className="block text-center text-white font-medium bg-blue-light p-3 duration-300 rounded hover:bg-blue-dark w-full">
                            {status === "loading" ? "Loading..." : "Login"}
                    </button>
                </form>
                <p className="mt-12 text-sm text-center font-normal text-gray-100"> Don't have an account? <Link to="/signup" className="text-white font-medium"> Create One </Link>  </p> 
            </div>
        </div>
    </div>
    )
}