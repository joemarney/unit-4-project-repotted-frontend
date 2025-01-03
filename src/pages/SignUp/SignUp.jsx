import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../services/user";

import styles from "./SignUp.module.scss";

import ImageUpload from "../../components/ImageUpload/ImageUpload";
import { getUser } from "../../utilities/auth";

export default function SignUp({ setUser }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    avatar: "",
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
      await signup(formData);
      setUser(getUser());
      navigate("/");
    } catch (error) {
      console.log(error);
      setErrors(error);
    }
  }

  return (
    <main className={styles.container}>
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
          <label htmlFor="password_confirmation">Confirm:</label>
          <br></br>
          <input type="password" name="password_confirmation" value={formData.password_confirmation} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="avatar">
            Avatar:
            <ImageUpload setFormData={setFormData} formData={formData} setImageUp={setImageUp} fieldName="avatar" />
          </label>
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
        <div id="button-container">
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
