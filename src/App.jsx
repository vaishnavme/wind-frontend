import { Routes, Route } from "react-router";
import {Login } from "./features";


function App() {
 
  return (
    <div>
        <Routes> 
          <Route path="/login" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
