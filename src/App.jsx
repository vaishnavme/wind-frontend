import { useEffect } from "react";
import { Routes, Route } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Login, SignUp, Feed, Explore, Profile, Settings } from "./features";
import { PrivateRoute, Navbar } from "./components";
import { initializeAuthUser } from "./features/auth/authSlice";

function App() {
  const dispatch = useDispatch();
  const { status, userToken, userId, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if(status === "tokenReceived" && userToken) {
      axios.defaults.headers.common["Authorization"] = userToken;
      userId && dispatch(initializeAuthUser(userId))
    }
  },[userId, status, dispatch, userToken])
 
  return (
    <div>
      {isAuthenticated && <Navbar/>} 
       <div className={`md:ml-0 ${isAuthenticated && "md:ml-72 lg:mr-72"}`}>
        <div className="p-2 my-16 max-w-3xl mx-auto">
            <Routes> 
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <PrivateRoute path="/" element={<Feed/>}/>
              <PrivateRoute path="/explore" element={<Explore/>}/>
              <PrivateRoute path="/profile/:profileId" element={<Profile/>}/>
              <PrivateRoute path="/profile/settings" element={<Settings/>}/>
            </Routes>
          </div>
       </div>
    </div>
  );
}

export default App;
