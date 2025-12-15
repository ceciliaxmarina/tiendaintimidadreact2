import React, { useEffect, useState } from "react";
import ProductoCard from "./ProductoCard";
import { useAppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const { agregarAlCarrito } = useAppContext();

  useEffect(() => {
    fetch("https://68fef1ede02b16d1753be781.mockapi.io/productostiendaintimidad")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error!", error);
        setError("Hubo un problema al cargar los productos.");
        setCargando(false);
      });
  }, []);

  if (error)
    return <p className="text-red-500 text-center py-12">{error}</p>;

  if (cargando) {
    return <Spinner />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-800 to-red-900 text-gray-100 pt-24 pb-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-red-400">
          Productos Tienda Intimidad
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((producto) => (
            <ProductoCard key={producto.id} producto={producto} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productos;
