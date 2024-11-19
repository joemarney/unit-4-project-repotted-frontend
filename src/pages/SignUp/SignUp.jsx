import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../services/user";

import ImageUpload from "../../components/ImageUpload/ImageUpload";

export default function SignUp({ setUser }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    images: "https://placehold.co/60x60",
    dependents: "no",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const [imageUp, setImageUp] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { user } = await signup(formData);
      setUser(user);
      navigate("/");
    } catch (error) {
      console.log(error);
      setErrors(error);
    }
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div>
          <label htmlFor="first_name">Forename:</label>
          <br></br>
          <input type="text" name="first_name" placeholder="John" value={formData.first_name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="last_name">Surname:</label>
          <br></br>
          <input type="text" name="last_name" placeholder="Smith" value={formData.last_name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <br></br>
          <input type="text" name="username" placeholder="plantlover35" value={formData.username} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <br></br>
          <input type="text" name="email" placeholder="example@email.com" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <br></br>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          <br></br>
          <input type="password" name="password_confirmation" value={formData.password_confirmation} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="avatar">Avatar:</label>
          <ImageUpload setFormData={setFormData} formData={formData} setImageUp={setImageUp} fieldName="images" />
        </div>
        <div>
          <label htmlFor="dependents">Dependents:</label>
          <br></br>
          <select name="dependents" value={formData.dependents} onChange={handleChange}>
            <option value="no">No</option>
            <option value="pet">Pet(s)</option>
            <option value="child">Child(ren)</option>
            <option value="both">Both</option>
          </select>
        </div>
        {errors ? <p>{errors.errorMessage}</p> : null}
        <div>
          <button type="submit" disabled={imageUp}>
            Register
          </button>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    </main>
  );
}
