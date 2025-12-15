import React from "react";
import { ShoppingCart } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const ProductoCard = ({ producto }) => {
  const { agregarAlCarrito, user } = useAppContext();

  return (
    <div className="card h-100 shadow-sm border" style={{  maxWidth: "200px",  margin: "0 auto" }}>
      <img
        src={producto.imagen}
        alt={producto.titulo}
        className="card-img-top"
        style={{ height: "120px", objectFit: "contain", backgroundColor: "#fff" }}
      />
      <div className="card-body d-flex flex-column justify-content-between p-2" style={{ minHeight: "130px" }}>
        <div>
          <h6 className="card-title mb-1" style={{ fontSize: "0.9rem" }}>{producto.titulo}</h6>
          <p
            className="card-text text-truncate"
            style={{
              fontSize: "0.75rem",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {producto.descripcion}
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-1">
          <span className="fw-bold" style={{ fontSize: "0.85rem" }}>${producto.precio.toFixed(2)}</span>
          <button
            className="btn btn-danger btn-sm"
            style={{ padding: "4px 8px", fontSize: "0.75rem" }}
            onClick={
              user
                ? () => agregarAlCarrito(producto)
                : () => alert("Inicia sesión para comprar!")
            }
          >
            <ShoppingCart size={12} className="me-1" />
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductoCard;
