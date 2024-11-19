import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { show, remove } from "../../../services/room";
import Loading from "../../../components/Loading/Loading";

export default function RoomDetails({ user }) {
  const [room, setRoom] = useState(null);

  const { roomId } = useParams();
  const navigate = useNavigate();

  const fetchRoom = useCallback(async () => {
    try {
      const { data } = await show(roomId);
      setRoom(data);
    } catch (error) {
      console.log(error.response.data);
    }
  }, [roomId]);

  useEffect(() => {
    fetchRoom();
  }, [roomId, fetchRoom]);

  async function handleDelete() {
    try {
      await remove(roomId);
      navigate("/rooms/");
    } catch (error) {
      console.log(error);
    }
  }

  if (!room) return <Loading />;

  console.log("room -->", room);
  console.log("room.plants -->", room.plants);

  return (
    <main>
      <h1>{room.name}</h1>
      <h3>{room.direction_facing}</h3>
      {room.plants.map((plant) => {
        return <p key={plant.id}>{plant.name}</p>;
      })}
      {room.owner.id === user.id && (
        <>
          <Link to={`/rooms/${roomId}/edit/`}>
            <button>Edit</button>
          </Link>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </main>
  );
}
