import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signin } from "../../services/user";

import styles from "./SignIn.module.scss";
import { getUser } from "../../utilities/auth";

export default function SignIn({ setUser }) {
  const [formData, setFormData] = useState({
    username_or_email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signin(formData);
      setUser(getUser());
      navigate("/rooms");
    } catch (error) {
      console.log(error);
      setErrors(error);
    }
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <div>
          <label htmlFor="username_or_email">Username or Email:</label>
          <br></br>
          <input type="text" name="username_or_email" placeholder="plantlover35/example@email.com" value={formData.username_or_email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <br></br>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        {errors ? <p>{errors.errorMessage}</p> : null}
        <div id="button-container">
          <button type="submit">Sign in</button>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    </main>
  );
}
