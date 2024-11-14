import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { index } from "../../services/plant";

export default function PlantIndex() {
  const [plants, setPlants] = useState([]);

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

  // TODO loading screen

  return (
    <main>
      <h1>Plants</h1>
      {plants.map((plant) => {
        return (
          <Link key={plant.name} to={`/${plant._id}`}>
            <h2>{plant.name}</h2>
          </Link>
        );
      })}
    </main>
  );
}
