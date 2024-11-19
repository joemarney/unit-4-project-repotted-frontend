import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Carousel.module.scss";
import Loading from "../Loading/Loading";

export default function Carousel({ rooms }) {
  const [activeIdx, setActiveIdx] = useState(0);

  function nextSlide() {
    setActiveIdx((previous) => (previous === rooms.length - 1 ? 0 : previous + 1));
  }

  function prevSlide() {
    setActiveIdx((previous) => (previous === 0 ? rooms.length - 1 : previous - 1));
  }

  if (rooms.length === 0) return <Loading />;
  return (
    <div className={styles.container}>
      <button onClick={prevSlide}>
        <em></em>
      </button>
      <Link to={`/rooms/${rooms[activeIdx].id}/`}>
        <div>{rooms[activeIdx].name}</div>
      </Link>
      <button onClick={nextSlide}>
        <i></i>
      </button>
    </div>
  );
}
