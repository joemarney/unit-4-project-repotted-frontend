import { useEffect } from "react";
import { Link } from "react-router-dom";

import { index } from "../../../services/room";
import Loading from "../../../components/Loading/Loading";

export default function RoomIndex({ user, rooms, setRooms }) {
  useEffect(() => {
    async function fetchRooms() {
      try {
        const { data } = await index();
        setRooms(data);
      } catch (error) {
        console.log(error.response.data);
      }
    }
    fetchRooms();
  }, [setRooms]);

  console.log(rooms);

  if (!rooms) return <Loading />;

  return (
    <main>
      <h1>Rooms</h1>
      {user && <Link to={"/rooms/new"}>Add new room</Link>}
      <section>
        {rooms.map((room) => {
          return (
            <article key={room.id}>
              <Link to={`/rooms/${room.id}/`}>
                <h2>{room.name}</h2>
              </Link>
            </article>
          );
        })}
      </section>
    </main>
  );
}
