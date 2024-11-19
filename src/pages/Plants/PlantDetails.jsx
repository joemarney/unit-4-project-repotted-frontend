import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { show } from "../../services/plant";

import styles from "./PlantDetails.module.scss";
import Loading from "../../components/Loading/Loading";

export default function PlantDetails() {
  const [plant, setPlant] = useState({});

  const { plantId } = useParams();

  const fetchPlant = useCallback(async () => {
    try {
      const { data } = await show(plantId);
      setPlant(data);
    } catch (error) {
      console.log(error.response.data);
    }
  }, [plantId]);

  useEffect(() => {
    fetchPlant();
  }, [plantId, fetchPlant]);

  if (!plant) return <Loading />;

  return (
    <main className={styles.container}>
      <h1>{plant.name}</h1>
      <img src={plant.image} />
      <h3>Scientific name</h3>
      <p>{plant.scientific_name}</p>
      <h3>Description</h3>
      <p>{plant.description}</p>
      <div className={styles.levels}>
        <div>
          <h4>Sunlight</h4>
          <p>{plant.sunlight}</p>
        </div>
        <div>
          <h4>Watering</h4>
          <p>{plant.watering}</p>
        </div>
        <div>
          <h4>Difficulty</h4>
          <p>{plant.difficulty}</p>
        </div>
        <div>
          <h4>Toxicity</h4>
          <p>{plant.toxicity}</p>
        </div>
      </div>
    </main>
  );
}
