import React from "react";
import ProductoCard from "./ProductoCard";

const ProductosList = ({ productos }) => {
  return (
    <div className="mi-container my-4">
      <div className="row g-3" style={{ border: "1px solid red" }}>
        {productos.map((producto) => (
          <div className="col-12 col-md-6 col-lg-4" style={{ border: "1px solid blue" }}>
            <ProductoCard producto={producto} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductosList;


