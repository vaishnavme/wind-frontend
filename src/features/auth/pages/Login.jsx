import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetStatus } from "../authSlice";
import { loginUserWithCredentials } from "../request";
import { InputFields } from "../../../components";

export default function Login() {
    const { status, isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [logInCred, setLoginCred] = useState("");

    const logInCredsHandler = (e) => {
        const value = e.target.value;
        setLoginCred({
            ...logInCred,
            [e.target.name] : value
        })
    }

    const logInHandler = () => {
        dispatch(loginUserWithCredentials(logInCred))
    }

    const loginAsGuest = () => {
        dispatch(loginUserWithCredentials({
            email: "testing@dev.com",
            password: "Password@123"
        }))
    }

    useEffect(() => {
        dispatch(resetStatus());
        isAuthenticated && navigate("/");
        // eslint-disable-next-line
      }, [isAuthenticated, navigate]);

    return (
        <div className="flex items-center bg-gray-50">
            <div className="bg-white w-96 m-auto py-10 shadow-xl rounded-md">
            <div className="py-8 px-8 rounded-xl">
                <h1 className="font-light text-4xl mt-3 text-center">Welcome Back</h1>
                <form action="" className="mt-6">
                    <InputFields
                        labelName={"Email"}
                        name={"email"}
                        type={"email"}
                        onChangeOperation={logInCredsHandler}
                    />
                    <InputFields
                        labelName={"Password"}
                        name={"password"}
                        type={"password"}
                        onChangeOperation={logInCredsHandler}
                    />
                    <button 
                        onClick={(e) => {e.preventDefault(); logInHandler();}}
                        className="my-2 block text-center text-white bg-gray-800 p-3 duration-300 rounded hover:bg-black w-full">
                            {status === "loading" ? "Loading..." : "Login"}
                    </button>
                    <button 
                        onClick={(e) => {e.preventDefault(); loginAsGuest();}}
                        className="block text-center text-white bg-gray-800 p-3 duration-300 rounded hover:bg-black w-full">
                            {status === "loading" ? "Loading..." : "Login as Guest"}
                    </button>
                </form>
                <p className="mt-12 text-sm text-center font-normal text-gray-900"> Don't have an account? <Link to="/signup" className="text-black font-medium"> Create One </Link>  </p> 
            </div>
        </div>
    </div>
    )
}