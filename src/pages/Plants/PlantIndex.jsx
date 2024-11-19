import { Link } from "react-router-dom";

import styles from "./PlantIndex.module.scss";
import Loading from "../../components/Loading/Loading";

export default function PlantIndex({ plants }) {
  if (!plants) return <Loading />;
  return (
    <>
      <h1>Plants</h1>
      <main className={styles.container}>
        <section>
          {plants.map((plant) => {
            return (
              <article key={plant.id}>
                <p>{plant.name}</p>
                <Link to={`/plants/${plant.id}/`}>
                  <img src={plant.image} />
                </Link>
              </article>
            );
          })}
        </section>
      </main>
    </>
  );
}
