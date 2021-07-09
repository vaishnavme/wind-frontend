import { Routes, Route } from "react-router";
import { Login, SignUp, Profile, Settings } from "./features";
import { Home } from "./pages";
import { PrivateRoute, Navbar } from "./components";

function App() {
 
  return (
    <div>
      <Navbar/>
       <div className="md:ml-72 lg:mr-72">
        <div className="p-2 my-16 max-w-3xl mx-auto">
            <Routes> 
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <PrivateRoute path="/" element={<Home/>}/>
              <PrivateRoute path="/profile" element={<Profile/>}/>
              <PrivateRoute path="/setting" element={<Settings/>}/>
            </Routes>
          </div>
       </div>
    </div>
  );
}

export default App;
