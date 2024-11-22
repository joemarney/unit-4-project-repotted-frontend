import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

import { show } from "../../services/plant";
import { addToWishlist, removeFromWishlist } from "../../services/plant";

import styles from "./PlantDetails.module.scss";
import Loading from "../../components/Loading/Loading";

export default function PlantDetails({ wishlist, setWishlist }) {
  const [plant, setPlant] = useState({});

  const [processing, setProcessing] = useState(false);

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

  async function toggleLikes(plant) {
    setProcessing(true);
    try {
      const wishlistItem = wishlist.find((p) => p.plant_details.id === plant.id);

      if (wishlistItem) {
        await removeFromWishlist(wishlistItem.id);
        setWishlist((prev) => prev.filter((p) => p.id !== wishlistItem.id));
      } else {
        const { data } = await addToWishlist(plant.id);
        setWishlist((prev) => [...prev, data]);
      }
    } catch (error) {
      console.log(error.response.data);
    } finally {
      setProcessing(false);
    }
  }

  if (!plant) return <Loading />;

  return (
    <main className={styles.container}>
      <header>
        <button onClick={() => toggleLikes(plant)} disabled={processing}>
          {processing ? "Working..." : wishlist.some((p) => p.plant_details.id === plant.id) ? "Remove from wishlist" : "Add to wishlist"}
        </button>
        <h1>{plant.name}</h1>
      </header>
      <img src={plant.image} />
      <h1>Scientific name</h1>
      <span>
        <p>{plant.scientific_name}</p>
      </span>
      <h1>Description</h1>
      <p>{plant.description}</p>
      <div className={styles.levels}>
        <div>
          <h1>Sunlight</h1>
          <p>{plant.sunlight}</p>
        </div>
        <div>
          <h1>Watering</h1>
          <p>{plant.watering}</p>
        </div>
        <div>
          <h1>Difficulty</h1>
          <p>{plant.difficulty}</p>
        </div>
        <div>
          <h1>Toxicity</h1>
          <p>{plant.toxicity}</p>
        </div>
      </div>
    </main>
  );
}
