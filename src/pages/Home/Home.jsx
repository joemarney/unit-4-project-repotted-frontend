import { useEffect } from "react";

import { index } from "../../services/room";
import { getWishlist } from "../../services/plant";

import Carousel from "../../components/Carousel/Carousel";

import styles from "./Home.module.scss";

export default function Home({ user, rooms, setRooms, wishlist, setWishlist }) {
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
  }, []);

  useEffect(() => {
    async function fetchWishlist() {
      try {
        const { data } = await getWishlist();
        setWishlist(data);
      } catch (error) {
        console.log(error.response.data);
      }
    }
    if (user) fetchWishlist();
  }, [user, setWishlist]);

  return (
    <main className={styles.container}>
      {user ? (
        <>
          <header>
            <img src={user.avatar} />
            <h1>Hey, {user.first_name}.</h1>
          </header>
          <div>
            <h2>Your rooms</h2>
            <Carousel items={rooms} itemType="rooms" />
          </div>
          <div>
            <h2>Wishlist</h2>
            <Carousel items={wishlist} itemType="plants" />
          </div>
        </>
      ) : (
        <main className={styles.container}>
          <h1>Hey, guest.</h1>
          <h2>Please sign in or sign up!</h2>
        </main>
      )}
    </main>
  );
}
