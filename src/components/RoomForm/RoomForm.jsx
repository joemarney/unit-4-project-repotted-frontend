import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import { show, create, update } from "../../services/room";

import styles from "./RoomForm.module.scss";

export default function RoomForm({ plants }) {
  const [formData, setFormData] = useState({
    name: "",
    direction_facing: "North",
    plants: [],
    image: "https://res.cloudinary.com/dwdvdwwzv/image/upload/v1732104541/livingroom.avif",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const { roomId } = useParams();

  useEffect(() => {
    async function fetchRoom() {
      try {
        const { data } = await show(roomId);
        data.owner = data.owner.id;
        data.plants = data.plants.map((plant) => plant.id);
        setFormData(data);
      } catch (error) {
        console.log(error);
      }
    }
    if (roomId) fetchRoom();
  }, [roomId]);

  function handleChange(e) {
    const { name, type, checked, value } = e.target;

    if (name === "plants") {
      const plantId = parseInt(value, 10);
      const updatedContents = checked ? [...formData.plants, plantId] : formData.plants.filter((id) => id !== plantId);
      setFormData({ ...formData, plants: updatedContents });
    } else {
      setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let res;
      if (roomId) {
        res = await update(roomId, formData);
      } else {
        res = await create(formData);
      }
      navigate(`/rooms/${res.data.id}`);
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  }

  return (
    <main className={styles.container}>
      <h1>{roomId ? "Edit or add plants" : "Add a room"}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">What would you like to call the room?</label>
          <br></br>
          <input type="text" name="name" placeholder="Bedroom" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="direction_facing">Which direction do your windows face?</label>
          <br></br>
          <select name="direction_facing" value={formData.direction_facing} onChange={handleChange}>
            <option value="North">North</option>
            <option value="East">East</option>
            <option value="South">South</option>
            <option value="West">West</option>
          </select>
        </div>

        <div>
          <label htmlFor="image">What type of room is it?</label>
          <br></br>
          <select name="image" value={formData.image} onChange={handleChange}>
            <option value="https://res.cloudinary.com/dwdvdwwzv/image/upload/v1732104541/livingroom.avif">Living Room</option>
            <option value="https://res.cloudinary.com/dwdvdwwzv/image/upload/v1732104542/bedroom.avif">Bedroom</option>
            <option value="https://res.cloudinary.com/dwdvdwwzv/image/upload/v1732104542/bathroom.avif">Bathroom</option>
            <option value="https://res.cloudinary.com/dwdvdwwzv/image/upload/v1732104543/kitchen.avif">Kitchen</option>
            <option value="https://res.cloudinary.com/dwdvdwwzv/image/upload/v1732104544/diningroom.avif">Dining Room</option>
          </select>
        </div>

        {roomId && (
          <div id="checkbox-wrapper">
            {plants.map((plant) => {
              return (
                <div key={plant.id}>
                  <label htmlFor="plants">{plant.name}</label>
                  <input type="checkbox" name="plants" value={plant.id} onChange={handleChange} checked={formData.plants.includes(plant.id)} />
                </div>
              );
            })}
          </div>
        )}

        {errors ? <p>{errors.errorMessage}</p> : null}

        <div id="button-container">
          <button type="submit">
            {roomId ? "Update" : "Create"} {formData.name}
          </button>
          <Link to="/rooms">
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    </main>
  );
}
