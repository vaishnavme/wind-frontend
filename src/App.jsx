import { Routes, Route } from "react-router";
import { Login, SignUp } from "./features";
import { Home } from "./pages";
import { PrivateRoute } from "./components";

function App() {
 
  return (
    <div>
        <Routes> 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <PrivateRoute path="/" element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
