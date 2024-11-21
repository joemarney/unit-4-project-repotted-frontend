import { useEffect } from "react";
import { Link } from "react-router-dom";

import { index } from "../../../services/room";
import Loading from "../../../components/Loading/Loading";

import styles from "./RoomIndex.module.scss";

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
    if (user) fetchRooms();
  }, [user, setRooms]);

  if (!rooms) return <Loading />;

  return (
    <>
      <header>
        <h1>Rooms</h1>
        {user && (
          <Link to={"/rooms/new"}>
            <button>Add new room</button>
          </Link>
        )}
      </header>
      <main className={styles.container}>
        <section>
          {rooms.map((room) => {
            return (
              <article className={styles.roomCard} key={room.id}>
                <Link to={`/rooms/${room.id}`}>
                  <div>
                    <h1>{room.name}</h1>
                    <img src={room.image} />
                  </div>
                </Link>
              </article>
            );
          })}
        </section>
      </main>
    </>
  );
}
