import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserPlus, Eye, EyeOff } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const SignIn = () => {
  const { setUser, setIsAuthenticated } = useAppContext();

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }
    setUser({
      nombre: formData.nombre,
      email: formData.email,
    });
    setIsAuthenticated(true);
    navigate("/");
  };

  return (
    <>
      <style>{`
        :root {
          --bg-start: #e8c2c2;
          --bg-end: #cc8b8b;
        }

        .signin-page {
          min-height: 100vh;
          background: linear-gradient(to right, var(--bg-start), var(--bg-end));
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 5rem;
          padding-bottom: 3rem;
        }

        .signin-form-container {
          background-color: rgba(15, 15, 15, 0.85);
          border: 2px solid #b31b1b;
          border-radius: 16px;
          padding: 2rem;
          width: 100%;
          max-width: 28rem;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }

        .signin-title {
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

        .signin-error {
          color: #f87171;
          text-align: center;
          margin-bottom: 1rem;
          font-size: 0.95rem;
        }

        .signin-label {
          display: block;
          color: #d1d5db;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }

        .signin-input {
          width: 100%;
          padding: 0.5rem 1rem;
          background-color: #1f1f1f;
          color: #f3f4f6;
          border-radius: 0.75rem;
          border: 1px solid #4b0000;
          outline: none;
          font-size: 1rem;
          position: relative;
        }

        .signin-input:focus {
          border-color: #f87171;
          box-shadow: 0 0 0 2px #f8717140;
        }

        .password-toggle {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #d1d5db;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .signin-button {
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

        .signin-button:hover {
          background-color: #991b1b;
        }

        .signin-footer {
          color: #d1d5db;
          text-align: center;
          margin-top: 1rem;
          font-size: 0.9rem;
        }

        .signin-footer a {
          color: #f87171;
          text-decoration: none;
        }

        .signin-footer a:hover {
          text-decoration: underline;
        }

        .relative {
          position: relative;
        }
      `}</style>

      <div className="signin-page">
        <div className="signin-form-container">
          <h2 className="signin-title">
            <UserPlus size={24} />
            Registrarse
          </h2>

          {error && <p className="signin-error">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="signin-label">Nombre completo</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="signin-input"
                required
              />
            </div>

            <div className="mb-4">
              <label className="signin-label">Correo electrónico</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="signin-input"
                required
              />
            </div>

            <div className="mb-4 relative">
              <label className="signin-label">Contraseña</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="signin-input"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="mb-6 relative">
              <label className="signin-label">Confirmar contraseña</label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="signin-input"
                required
              />
            </div>

            <button type="submit" className="signin-button">
              <UserPlus size={18} />
              Registrarse
            </button>
          </form>

          <p className="signin-footer">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login">Iniciar sesión</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;