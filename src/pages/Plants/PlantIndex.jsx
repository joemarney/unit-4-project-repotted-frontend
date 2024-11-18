import { useEffect } from "react";
import { Link } from "react-router-dom";

import { index } from "../../services/plant";

import styles from "./PlantIndex.module.scss";
import Loading from "../../components/Loading/Loading";

export default function PlantIndex({ plants, setPlants }) {
  useEffect(() => {
    async function fetchPlants() {
      try {
        const { data } = await index();
        setPlants(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPlants();
  }, [setPlants]);

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
