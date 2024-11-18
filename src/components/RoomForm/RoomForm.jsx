import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { show, create, update } from "../../services/room";

export default function RoomForm() {
  const [formData, setFormData] = useState({
    name: "",
    direction_facing: "North",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const { roomId } = useParams();

  useEffect(() => {
    async function fetchRoom() {
      try {
        const { data } = await show(roomId);
        setFormData(data);
      } catch (error) {
        console.log(error);
      }
    }
    if (roomId) fetchRoom();
  }, [roomId]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let form;
      if (roomId) {
        form = await update(roomId, formData);
      } else {
        form = await create(formData);
      }
      navigate(`/rooms/${form.data._id}`);
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">What would you like to call the room?</label>
        <br></br>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label htmlFor="direction_facing">Which direction do your windows face?</label>
        <br></br>
        <select name="direction_facing" value={formData.direction_facing} onChange={handleChange}>
          <option value="North">North</option>
          <option value="East">East</option>
          <option value="South">South</option>
          <option value="West">West</option>
        </select>

        {errors ? <p>{errors.errorMessage}</p> : null}

        <button type="submit">
          {roomId ? "Update" : "Create"} {formData.name}
        </button>
      </form>
    </main>
  );
}
