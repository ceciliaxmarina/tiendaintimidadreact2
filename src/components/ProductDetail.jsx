import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const ProductDetail = () => {
  const { id } = useParams();
  const [curso, setCurso] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const { agregarAlCarrito, user } = useAppContext();

  useEffect(() => {
    fetch(`https://68d1ee76e6c0cbeb39a62062.mockapi.io/productos/${id}`)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setCurso(datos);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error!", error);
        setError("Hubo un problema al cargar el producto.");
        setCargando(false);
      });
  }, [id]);

  if (error) return <p className="text-red-500 text-center py-12">{error}</p>;
  if (cargando) return <Spinner />;
  if (!curso) return <p className="text-center py-12">Producto no encontrado.</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Botón para volver */}
        <Link
          to="/productos"
          className="text-blue-400 hover:text-blue-300 mb-6 inline-flex items-center"
        >
          <ArrowLeft size={20} className="mr-2" />
          Volver a productos
        </Link>

        
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
        
          <div className="w-full h-64 overflow-hidden">
            <img
              src={curso.imagen}
              alt={curso.titulo}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Detalles del curso */}
          <div className="p-6">
            <h1 className="text-3xl font-bold text-blue-400 mb-4">{curso.titulo}</h1>
            <p className="text-gray-300 mb-6 text-lg">{curso.descripcion}</p>

            {/* Precio y botón */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-8">
              <span className="text-2xl font-bold text-white mb-4 sm:mb-0">
                ${curso.precio.toFixed(2)}
              </span>
              <button
                onClick={user ? () => agregarAlCarrito(curso) : () => alert("Inicia sesión para comprar!!!")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center transition-colors w-full sm:w-auto justify-center"
              >
                <ShoppingCart size={18} className="mr-2" />
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;