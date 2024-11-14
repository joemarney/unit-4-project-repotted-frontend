import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Home from "./pages/Home/Home";

function App() {
  const [user, setUser] = useState("");

  const navigate = useNavigate();
  return (
    <main>
      <h1>Hello World</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        <Route path="/signin" element={<SignIn setUser={setUser} />} />
        <Route path="/rooms" />
        <Route path="/plants" />
      </Routes>
    </main>
  );
}

export default App;
