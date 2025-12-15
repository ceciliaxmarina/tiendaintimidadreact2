import React, { useEffect, useState } from "react";
import ProductoCard from "./ProductoCard";

const ProductosList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Eliminé los espacios al final de la URL
    fetch("https://68fef1ede02b16d1753be781.mockapi.io/productostiendaintimidad")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container py-3">
      <div className="row g-3 justify-content-center">
        {productos.map((producto) => (
          <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={producto.id}>
            <ProductoCard producto={producto} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductosList;



