import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import RoomIndex from "./pages/Rooms/RoomIndex";
import NavBar from "./components/NavBar/NavBar";
import PlantIndex from "./pages/Plants/PlantIndex";
import About from "./pages/About/About";
import PlantDetails from "./pages/Plants/PlantDetails";

export default function App() {
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
        {/* {user ? ( */}
        <>
          <Route path="/" />
          <Route path="/about/" element={<About />} />
          <Route path="/rooms/" element={<RoomIndex user={user} />} />
          <Route path="/plants/" element={<PlantIndex />} />
          <Route path="/plants/:plantId/" element={<PlantDetails />} />
        </>
        {/* ) : ( */}
        <>
          <Route path="/" />
          <Route path="/about/" element={<About />} />
          <Route path="/signup/" element={<SignUp setUser={setUser} />} />
          <Route path="/signin/" element={<SignIn setUser={setUser} />} />
        </>
        {/* )} */}
      </Routes>
    </main>
  );
}
