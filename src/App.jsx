import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import RoomIndex from "./pages/Rooms/Read/RoomIndex";
import NavBar from "./components/NavBar/NavBar";
import PlantIndex from "./pages/Plants/PlantIndex";
import About from "./pages/About/About";
import PlantDetails from "./pages/Plants/PlantDetails";
import RoomCreate from "./pages/Rooms/Create/RoomCreate";
import RoomUpdate from "./pages/Rooms/Update/RoomUpdate";
import RoomDetails from "./pages/Rooms/Read/RoomDetails";
import Home from "./pages/Home/Home";
import Wishlist from "./pages/Wishlist/Wishlist";

export default function App() {
  const [user, setUser] = useState(null);

  const [plants, setPlants] = useState([]);

  const [rooms, setRooms] = useState([]);

  console.log(user);

  return (
    <main>
      <NavBar setUser={setUser} user={user} />
      {user ? (
        <>
          <h6>You are signed in</h6>
        </>
      ) : (
        <>
          <h6>You are not signed in</h6>
        </>
      )}
      <Routes>
        {/* {user ? ( */}
        <>
          <Route path="/" element={<Home user={user} rooms={rooms} setRooms={setRooms} />} />
          <Route path="/about/" element={<About />} />
          <Route path="/plants/" element={<PlantIndex plants={plants} setPlants={setPlants} />} />
          <Route path="/plants/:plantId/" element={<PlantDetails />} />
          <Route path="/rooms/" element={<RoomIndex user={user} rooms={rooms} setRooms={setRooms} />} />
          <Route path="/rooms/:roomId/" element={<RoomDetails user={user} />} />
          <Route path="/rooms/new" element={<RoomCreate />} />
          <Route path="/rooms/:roomId/edit" element={<RoomUpdate />} />
          <Route path="/wishlist/" element={<Wishlist />} />
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
