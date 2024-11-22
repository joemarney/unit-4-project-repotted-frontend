import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./PlantIndex.module.scss";
import Loading from "../../components/Loading/Loading";

export default function PlantIndex({ plants, user }) {
  const [filteredPlants, setFilteredPlants] = useState(plants);
  const [filters, setFilters] = useState({
    toxicity: "all",
    light: "",
  });

  useEffect(() => {
    setFilteredPlants(plants);
  }, [plants]);

  useEffect(() => {
    let newFilteredPlants = [...plants];

    console.log(user);

    if (filters.toxicity === "safe") {
      if (user?.dependents === "pet" || user?.dependents === "both") {
        newFilteredPlants = newFilteredPlants.filter((plant) => plant.toxicity === "low" || plant.toxicity === "none");
      } else if (user?.dependents === "child") {
        newFilteredPlants = newFilteredPlants.filter((plant) => plant.toxicity !== "high");
      }
    }

    if (filters.light) {
      newFilteredPlants = newFilteredPlants.filter((plant) => plant.sunlight === filters.light);
    }

    setFilteredPlants(newFilteredPlants);
  }, [filters, plants, user]);

  if (!plants) return <Loading />;
  return (
    <>
      <header>
        <h1>Plants</h1>
      </header>
      <div className={styles.filtersContainer}>
        <button autoFocus onClick={() => setFilters({ ...filters, toxicity: "all" })}>
          All
        </button>
        <button onClick={() => setFilters({ ...filters, toxicity: "safe" })}>Safe</button>
        <label>
          Light requirements:
          <select onChange={(e) => setFilters({ ...filters, light: e.target.value })} value={filters.light}>
            <option value="">All</option>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </label>
      </div>
      <main className={styles.container}>
        <section>
          {filteredPlants.map((plant) => {
            return (
              <article className={styles.card} key={plant.id}>
                <Link to={`/plants/${plant.id}`}>
                  <div>
                    <h1>{plant.name}</h1>
                    <img src={plant.image} />
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
