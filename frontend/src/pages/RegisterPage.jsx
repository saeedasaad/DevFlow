import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });

      alert("Registration successful");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Registration failed");
    }
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <h2>Create Account</h2>
        <br />

        {/* Name Input */}
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input className="ring" id="name" type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>

        <br />

        {/* Email Input */}
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input className="ring" id="email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <br />

        {/* Password Input */}
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input className="ring" id="password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
