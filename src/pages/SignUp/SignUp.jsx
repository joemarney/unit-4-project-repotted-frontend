import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../services/user";

export default function SignUp({ setUser }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    avatar: "https://placehold.co/60x60",
  });

  const { errors, setErrors } = useState({});

  const navigate = useNavigate();

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
          <input type="text" name="password" value={formData.password} />
          <br></br>
          <input type="text" name="password_confirmation" value={formData.password_confirmation} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="avatar">Avatar:</label>
        </div>
        {errors ? <p>{errors.errorMessage}</p> : null}
        <div>
          <button type="submit">Register</button>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    </main>
  );
}
