import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const Login = () => {
  const { setUser, setIsAuthenticated } = useAppContext();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin1234") {
      const adminUser = { role: "admin", nombre: "Admin" };
      setUser(adminUser);
      setIsAuthenticated(true);
      navigate("/");
    } else if (username === "admin@demo.com" && password === "1234") {
      const normalUser = { role: "user", nombre: "Demo" };
      setUser(normalUser);
      setIsAuthenticated(true);
      navigate("/");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <>
      <style>{`
        :root {
          --bg-start: #e8c2c2;
          --bg-end: #cc8b8b;
        }

        .login-page {
          min-height: 100vh;
          background: linear-gradient(to right, var(--bg-start), var(--bg-end));
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 5rem;
          padding-bottom: 3rem;
        }

        .login-form-container {
          background-color: rgba(15, 15, 15, 0.85);
          border: 2px solid #b31b1b;
          border-radius: 16px;
          padding: 2rem;
          width: 100%;
          max-width: 28rem;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }

        .login-title {
          font-size: 1.875rem;
          font-weight: bold;
          color: #f87171;
          text-align: center;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .login-label {
          display: block;
          color: #d1d5db;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }

        .login-input {
          width: 100%;
          padding: 0.5rem 1rem;
          background-color: #1f1f1f;
          color: #f3f4f6;
          border-radius: 0.75rem;
          border: 1px solid #4b0000;
          outline: none;
          font-size: 1rem;
        }

        .login-input:focus {
          border-color: #f87171;
          box-shadow: 0 0 0 2px #f8717140;
        }

        .login-button {
          width: 100%;
          background-color: #b91c1c;
          color: white;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 0.75rem;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: background-color 0.2s;
        }

        .login-button:hover {
          background-color: #991b1b;
        }

        .login-footer {
          color: #d1d5db;
          text-align: center;
          margin-top: 1rem;
          font-size: 0.9rem;
        }

        .login-footer a {
          color: #f87171;
          text-decoration: none;
        }

        .login-footer a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="login-page">
        <div className="login-form-container">
          <h2 className="login-title">
            <LogIn size={24} />
            Iniciar Sesión
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="login-label">Usuario</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="login-input"
                required
              />
            </div>

            <div className="mb-6">
              <label className="login-label">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
                required
              />
            </div>

            <button type="submit" className="login-button">
              <LogIn size={18} />
              Iniciar Sesión
            </button>
          </form>

          <p className="login-footer">
            ¿No tienes una cuenta?{" "}
            <Link to="/signup">Regístrate</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;