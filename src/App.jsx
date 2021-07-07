import { Routes, Route } from "react-router";
import { Login, SignUp } from "./features";
import { Home } from "./pages";
import { PrivateRoute, Navbar } from "./components";

function App() {
 
  return (
    <div className="m-auto w-full max-w-6xl">
      <Navbar/>
        <Routes> 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <PrivateRoute path="/" element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
