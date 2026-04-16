import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      const token = res.data.token;

      dispatch({ type: "LOGIN", payload: token });

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>

        {/* Email */}
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input id="email" className="ring" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <br />
        {/* Password */}
        <div>
          <label htmlFor="password">Password</label>
          <br />       
          <input id="password" className="ring" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        
        <br />
        <button type="submit">Login</button>

        <br /><br />
        <p> Don't have an account? <Link to="/register">Create an account</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
