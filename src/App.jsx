import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import RoomIndex from "./pages/Rooms/RoomIndex";
import NavBar from "./components/NavBar/NavBar";
import PlantIndex from "./pages/Plants/PlantIndex";

function App() {
  const [user, setUser] = useState("");

  return (
    <main>
      <NavBar setUser={setUser} user={user} />
      {user ? (
        <>
          <h2>You are signed in</h2>
        </>
      ) : (
        <>
          <h2>You are not signed in</h2>
        </>
      )}
      <Routes>
        <Route path="/" />
        <Route path="/signup/" element={<SignUp setUser={setUser} />} />
        <Route path="/signin/" element={<SignIn setUser={setUser} />} />
        <Route path="/rooms/" element={<RoomIndex user={user} />} />
        <Route path="/plants/" element={<PlantIndex />} />
        <Route path="/about/" />
      </Routes>
    </main>
  );
}

export default App;
