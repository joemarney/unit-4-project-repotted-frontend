import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { show, remove } from "../../../services/room";
import Loading from "../../../components/Loading/Loading";
import Countdown from "../../../components/Countdown/Countdown";

import styles from "./RoomDetails.module.scss";

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

  return (
    <>
      <main className={styles.container}>
        <header
          style={{
            backgroundImage: `url(${room.image})`,
          }}
        >
          <h1>{room.name}</h1>
          <h3>{room.direction_facing}</h3>
        </header>
        <section>
          {room.plants.map((plant) => {
            return (
              <article key={plant.id}>
                <img src={plant.image} alt={plant.name} />
                <p>{plant.name}</p>
                <Countdown plant={plant} />
              </article>
            );
          })}
        </section>
        {room.owner.id === user.id && (
          <div id="button-container">
            <Link to={`/rooms/${roomId}/edit`}>
              <button>Edit</button>
            </Link>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )}
      </main>
    </>
  );
}
