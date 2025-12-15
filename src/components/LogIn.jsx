import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const Login = () => {
  const { setUser, setIsAuthenticated } = useAppContext();
  const navigate = useNavigate();

  const [username, setUsername] = useState(""); // 👈 ahora es "username", no email
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin1234") {
      // Usuario admin
      const adminUser = { role: "admin", nombre: "Admin" };
      setUser(adminUser);
      setIsAuthenticated(true);
      navigate("/");
    } else if (username === "admin@demo.com" && password === "1234") {
      // Usuario normal
      const normalUser = { role: "user", nombre: "Demo" };
      setUser(normalUser);
      setIsAuthenticated(true);
      navigate("/");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-800 to-red-900 flex items-center justify-center pt-20">
      <div className="bg-gray-900/80 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-red-400 flex items-center justify-center">
          <LogIn className="mr-2" /> Iniciar Sesión
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">
              Usuario
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 mb-2">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition flex items-center justify-center"
          >
            <LogIn className="mr-2" size={18} />
            Iniciar Sesión
          </button>
        </form>

        <p className="text-gray-300 text-center mt-4">
          ¿No tienes una cuenta?{" "}
          <Link to="/signup" className="text-red-400 hover:underline">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
