import { useEffect } from "react";

import { index } from "../../services/room";
import Carousel from "../../components/Carousel/Carousel";

import styles from "./Home.module.scss";

export default function Home({ user, rooms, setRooms }) {
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

  return (
    <main className={styles.container}>
      {user ? (
        <>
          <img src={user.avatar} />
          <h1>Hey, {user.first_name}.</h1>
          <div>
            <h2>Your rooms</h2>
            <Carousel rooms={rooms} />
          </div>
          <div>
            <h2>Wishlist</h2>
          </div>
        </>
      ) : (
        <>
          <h1>Hey, guest.</h1>
          <h2>Please sign in or sign up!</h2>
        </>
      )}
    </main>
  );
}
