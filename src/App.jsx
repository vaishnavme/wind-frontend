import { useEffect } from "react";
import { Routes, Route } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Login, SignUp, Profile, Settings, Explore } from "./features";
import { PrivateRoute, Navbar } from "./components";
import { initializeAuthUser } from "./features/auth/authSlice";

function App() {
  const dispatch = useDispatch();
  const { status, userToken, userId } = useSelector((state) => state.auth);

  useEffect(() => {
    if(status === "tokenReceived" && userToken) {
      axios.defaults.headers.common["Authorization"] = userToken;
      userId && dispatch(initializeAuthUser(userId))
    }
  },[userId, status, dispatch, userToken])
 
  return (
    <div>
      <Navbar/>
       <div className="md:ml-72 lg:mr-72">
        <div className="p-2 my-16 max-w-3xl mx-auto">
            <Routes> 
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
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
