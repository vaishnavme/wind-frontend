import { useEffect } from "react";
import { Routes, Route } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";
import { Login, SignUp, Profile, Settings } from "./features";
import { Home } from "./pages";
import { PrivateRoute, Navbar } from "./components";

function App() {
  const { status, userToken } = useSelector((state) => state.auth);

  useEffect(() => {
    if(status === "tokenReceived" && userToken) {
      axios.defaults.headers.common["Authorization"] = userToken;
    }
  },[status,userToken])
 
  return (
    <div>
      <Navbar/>
       <div className="md:ml-72 lg:mr-72">
        <div className="p-2 my-16 max-w-3xl mx-auto">
            <Routes> 
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <PrivateRoute path="/" element={<Home/>}/>
              <PrivateRoute path="/profile/:profileId" element={<Profile/>}/>
              <PrivateRoute path="/setting" element={<Settings/>}/>
            </Routes>
          </div>
       </div>
    </div>
  );
}

export default App;
