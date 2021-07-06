import { Routes, Route } from "react-router";
import {Login, SignUp } from "./features";


function App() {
 
  return (
    <div>
        <Routes> 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
    </div>
  );
}

export default App;
