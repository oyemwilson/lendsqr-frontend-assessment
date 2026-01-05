import { useState } from "react";
import "./Login.scss";
import Logo from "../../assets/logo.svg?react";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
const navigate = useNavigate();

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!email || !password) return;

  console.log({ email, password });

  navigate("/dashboard"); // or "/users" depending on your routing
};


  return (
    <div className="login">
      <div className="login__left">
        <Logo />
        <img
          src="/login-illustration.png"
          alt="Illustration"
          className="login__illustration"
        />
      </div>

      <div className="login__right">
        <div className="login__form-wrapper">
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>

          <form onSubmit={handleSubmit} className="login__form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="login__password">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>

            <a href="#" className="login__forgot">
              FORGOT PASSWORD?
            </a>

            <button type="submit" className="login__submit">
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
