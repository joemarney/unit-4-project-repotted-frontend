import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { getUser } from "./utilities/auth";

import { index } from "./services/plant";

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

export default function App() {
  const [user, setUser] = useState(getUser());

  const [plants, setPlants] = useState([]);

  const [rooms, setRooms] = useState([]);

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    async function fetchPlants() {
      try {
        const { data } = await index();
        setPlants(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPlants();
  }, []);

  return (
    <main>
      <NavBar setUser={setUser} user={user} />
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Home user={user} rooms={rooms} setRooms={setRooms} wishlist={wishlist} setWishlist={setWishlist} />} />
            <Route path="/about" element={<About />} />
            <Route path="/plants" element={<PlantIndex plants={plants} setPlants={setPlants} />} />
            <Route path="/plants/:plantId" element={<PlantDetails wishlist={wishlist} setWishlist={setWishlist} />} />
            <Route path="/rooms" element={<RoomIndex user={user} rooms={rooms} setRooms={setRooms} />} />
            <Route path="/rooms/:roomId" element={<RoomDetails user={user} plants={plants} />} />
            <Route path="/rooms/new" element={<RoomCreate />} />
            <Route path="/rooms/:roomId/edit" element={<RoomUpdate plants={plants} />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUp setUser={setUser} />} />
            <Route path="/signin" element={<SignIn setUser={setUser} />} />
          </>
        )}
      </Routes>
    </main>
  );
}
