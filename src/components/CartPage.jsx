import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useAppContext } from "../context/AppContext";
import { Trash2, CreditCard, ArrowLeft, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart: carrito, eliminarDelCarrito, vaciarCarrito } = useAppContext();
  const [isCelebrating, setIsCelebrating] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  const handleFinalizarCompra = () => {
    setIsCelebrating(true);
    vaciarCarrito();
  };

  return (
    <>
      <style>{`
        :root {
          --bg-start: #e8c2c2;
          --bg-end: #cc8b8b;
        }

        .cart-page {
          min-height: 100vh;
          background: linear-gradient(to right, var(--bg-start), var(--bg-end));
          padding: 3rem 1rem 2rem;
          position: relative;
          color: #1f1f1f;
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .cart-container {
          max-width: 600px;
          margin: 0 auto;
        }

        .cart-header {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .cart-header a {
          color: #b31b1b;
          margin-right: 0.75rem;
          display: flex;
          align-items: center;
        }

        .cart-header a:hover {
          color: #8b1a1a;
        }

        .cart-title {
          font-size: 1.75rem;
          font-weight: bold;
          color: #b31b1b;
        }

        .cart-empty {
          text-align: center;
          padding: 2rem 0;
        }

        .cart-empty-icon {
          color: #b31b1b;
          margin-bottom: 1rem;
        }

        .cart-item {
          background: #fff;
          border-radius: 8px;
          padding: 0.75rem;
          margin-bottom: 0.8rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
        }

        .cart-item-main {
          display: flex;
          gap: 0.75rem;
          flex: 1;
        }

        .cart-item-img {
          width: 60px;
          height: 48px;
          object-fit: cover;
          border-radius: 4px;
        }

        .cart-item-info h3 {
          font-size: 0.95rem;
          font-weight: 600;
          color: #222;
          margin: 0 0 0.25rem 0;
        }

        .cart-item-info p {
          font-size: 0.85rem;
          color: #555;
          margin: 0;
        }

        .cart-item-meta {
          text-align: right;
          font-size: 0.875rem;
          color: #b31b1b;
          font-weight: bold;
          min-width: 80px;
        }

        .cart-item-delete {
          background: none;
          border: none;
          color: #b31b1b;
          cursor: pointer;
          margin-left: 0.5rem;
          display: flex;
          align-items: center;
        }

        .cart-item-delete:hover {
          color: #8b1a1a;
        }

        .cart-summary {
          background: #fff;
          border-radius: 8px;
          padding: 1rem;
          margin-top: 1.25rem;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
        }

        .cart-total {
          display: flex;
          justify-content: space-between;
          font-size: 1.1rem;
          font-weight: bold;
          color: #b31b1b;
          margin-bottom: 1rem;
        }

        .cart-actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .cart-btn {
          flex: 1;
          min-width: 120px;
          padding: 0.4rem 0.8rem;
          border: none;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
        }

        .cart-btn--clear {
          background: #f0f0f0;
          color: #b31b1b;
        }

        .cart-btn--clear:hover {
          background: #e0e0e0;
        }

        .cart-btn--checkout {
          background: #b31b1b;
          color: white;
        }

        .cart-btn--checkout:hover {
          background: #991b1b;
        }

        .celebration-modal {
          position: fixed;
          inset: 0;
          background: rgba(232, 194, 194, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-content {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          text-align: center;
          max-width: 320px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        .modal-title {
          font-size: 1.5rem;
          color: #2c7a2c;
          font-weight: bold;
          margin: 0 0 0.75rem 0;
        }

        .modal-text {
          color: #444;
          margin-bottom: 1.25rem;
        }

        .modal-link {
          display: inline-block;
          background: #b31b1b;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          text-decoration: none;
        }

        .modal-link:hover {
          background: #991b1b;
        }
      `}</style>

      <div className="cart-page">
        {/* Confetti */}
        {isCelebrating && (
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            numberOfPieces={300}
            recycle={false}
          />
        )}

        <div className="cart-container">
          {/* Header */}
          <div className="cart-header">
            <Link to="/productos">
              <ArrowLeft size={20} />
            </Link>
            <h1 className="cart-title">Tu Carrito</h1>
          </div>

          {/* Modal de éxito */}
          {isCelebrating && (
            <div className="celebration-modal">
              <div className="modal-content">
                <h2 className="modal-title">¡Compra exitosa! 🎉</h2>
                <p className="modal-text">Gracias por tu compra!.</p>
                <Link to="/productos" className="modal-link">
                  Volver a los productos!
                </Link>
              </div>
            </div>
          )}

          {/* Carrito vacío */}
          {carrito.length === 0 && !isCelebrating ? (
            <div className="cart-empty">
              <ShoppingCart size={48} className="cart-empty-icon" />
              <h2 className="text-gray-400" style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                Tu carrito está vacío
              </h2>
              <p>
                Explora nuestros{" "}
                <Link to="/productos" style={{ color: "#b31b1b", textDecoration: "none" }}>
                  productos
                </Link>{" "}
                y comienza a vivir la nostalgia.
              </p>
            </div>
          ) : (
            !isCelebrating && (
              <>
                {/* Lista de productos */}
                <div>
                  {carrito.map((item) => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-main">
                        <img
                          src={item.imagen}
                          alt={item.titulo}
                          className="cart-item-img"
                        />
                        <div className="cart-item-info">
                          <h3>{item.titulo}</h3>
                          <p>${item.precio.toFixed(2)} × {item.cantidad}</p>
                        </div>
                      </div>
                      <div>
                        <div className="cart-item-meta">
                          ${(item.precio * item.cantidad).toFixed(2)}
                        </div>
                        <button
                          onClick={() => eliminarDelCarrito(item.id)}
                          className="cart-item-delete"
                          aria-label="Eliminar"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Resumen y acciones */}
                <div className="cart-summary">
                  <div className="cart-total">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="cart-actions">
                    <button
                      onClick={vaciarCarrito}
                      className="cart-btn cart-btn--clear"
                    >
                      <Trash2 size={16} />
                      Vaciar
                    </button>
                    <button
                      onClick={handleFinalizarCompra}
                      className="cart-btn cart-btn--checkout"
                    >
                      <CreditCard size={16} />
                      Comprar
                    </button>
                  </div>
                </div>
              </>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;