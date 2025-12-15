import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCart((prevCart) => {
      const productoExistente = prevCart.find(
        (item) => item.id === producto.id
      );

      if (productoExistente) {
        return prevCart.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }

      return [...prevCart, { ...producto, cantidad: 1 }];
    });
  };

  const eliminarDelCarrito = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  const cerrarSesion = () => {
    setUser(null);
    setIsAuthenticated(false);
    setCart([]);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        cart,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito,
        cerrarSesion,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
