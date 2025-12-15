import { ShoppingCart, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const { user, cerrarSesion, cart } = useAppContext();

  return (
    <header className="tienda-header">
  <div className="tienda-header-inner">
    {/* Logo */}
    <Link to="/" className="tienda-header-logo">
      Tienda Intimidad
    </Link>

    {/* Navegación */}
    <nav className="tienda-header-nav">
      <Link to="/" className="tienda-header-link">Inicio</Link>
      <Link to="/productos" className="tienda-header-link">Productos</Link>

      {/* Contenido solo para usuarios logueados */}
      {user ? (
        <>
          <Link to="/cart" className="tienda-header-link tienda-header-cart">
            <ShoppingCart size={20} />
            {cart.length > 0 && (
              <span className="tienda-header-badge">{cart.length}</span>
            )}
          </Link>

          {user?.role === 'admin' && (
            <Link to="/admin/agregar" className="tienda-header-link">
              Agregar Producto
            </Link>
          )}

          <button
            onClick={cerrarSesion}
            className="tienda-header-logout"
          >
            <LogOut size={18} /> Cerrar sesión
          </button>
        </>
      ) : (
        <>
          <Link to="/login" className="tienda-header-link">Iniciar sesión</Link>
          <Link to="/signup" className="tienda-header-link">Registrarse</Link>
        </>
      )}
    </nav>
  </div>
</header>
  );
};

export default Navbar;