import { Routes, Route } from "react-router";
import { Login, SignUp, Profile, Account } from "./features";
import { Home } from "./pages";
import { PrivateRoute, Navbar } from "./components";

function App() {
 
  return (
    <div>
      <Navbar/>
        <div className="p-2">
          <Routes> 
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <PrivateRoute path="/" element={<Home/>}/>
            <PrivateRoute path="/profile" element={<Profile/>}/>
            <PrivateRoute path="/account" element={<Account/>}/>
          </Routes>
        </div>
    </div>
  );
}

export default App;
