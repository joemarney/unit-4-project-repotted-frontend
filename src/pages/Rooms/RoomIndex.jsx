import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { index } from "../../services/room";

export default function RoomIndex({ user }) {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    async function fetchRooms() {
      try {
        const { data } = await index();
        setRooms(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRooms();
  }, [setRooms]);

  // TODO loading screen

  return (
    <main>
      <h1>Rooms</h1>
      <p>Hi {user.username}</p>
      {rooms.map((room) => {
        return (
          <Link key={room.name} to={`/${room._id}`}>
            <h2>{room.name}</h2>
          </Link>
        );
      })}
    </main>
  );
}
