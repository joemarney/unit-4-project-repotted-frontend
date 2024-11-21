import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Carousel.module.scss";
import Loading from "../Loading/Loading";

export default function Carousel({ items, itemType }) {
  const [activeIdx, setActiveIdx] = useState(0);

  function nextSlide() {
    setActiveIdx((previous) => (previous === items.length - 1 ? 0 : previous + 1));
  }

  function prevSlide() {
    setActiveIdx((previous) => (previous === 0 ? items.length - 1 : previous - 1));
  }

  if (!items.length && itemType === "rooms") return <Loading />;
  if (!items.length && itemType === "plants")
    return (
      <div className={styles.container}>
        <p>You haven't liked any plants yet!</p>
      </div>
    );
  return (
    <div className={styles.container}>
      <button onClick={prevSlide}>
        <em></em>
      </button>
      {itemType === "rooms" && (
        <article className={styles.card}>
          <Link to={`/${itemType}/${items[activeIdx].id}/`}>
            <div>
              <h1>{items[activeIdx].name}</h1>
              <img src={items[activeIdx].image} alt={items[activeIdx].name} />
            </div>
          </Link>
        </article>
      )}
      {itemType === "plants" && (
        <article className={styles.card}>
          <Link to={`/${itemType}/${items[activeIdx].plant_details.id}/`}>
            <div>
              <h1>{items[activeIdx].plant_details.name}</h1>
              <img src={items[activeIdx].plant_details.image} alt={items[activeIdx].plant_details.name} />
            </div>
          </Link>
        </article>
      )}
      <button onClick={nextSlide}>
        <i></i>
      </button>
    </div>
  );
}
