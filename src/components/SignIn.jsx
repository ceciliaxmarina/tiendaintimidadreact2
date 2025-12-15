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
    <div className="min-h-screen bg-background text-text flex items-center justify-center pt-20">
      <div className="bg-primary p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-secondary flex items-center justify-center">
          <UserPlus className="mr-2" /> Registrarse
        </h2>
        {error && <p className="text-accent text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-text mb-2">
              Nombre completo
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-text"
              placeholder="Ej: Mati Campos"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-text mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-text"
              placeholder="Ej: mati.campos@example.com"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-text mb-2">
              Contraseña
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-text"
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10 text-text"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className="mb-6 relative">
            <label htmlFor="confirmPassword" className="block text-text mb-2">
              Confirmar contraseña
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-text"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-secondary hover:bg-accent text-background py-2 px-4 rounded-lg transition duration-300 ease-in-out flex items-center justify-center"
          >
            <UserPlus className="mr-2" size={18} />
            Registrarse
          </button>
        </form>
        <p className="text-text text-center mt-4">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="text-secondary hover:underline">
            Iniciar sesión
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
