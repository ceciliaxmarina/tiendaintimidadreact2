import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Productos from './components/Productos';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import CartPage from './components/CartPage';
import SignIn from './components/SignIn';
import Login from './components/LogIn';
import { AppProvider } from './context/AppContext';
import ProtectedRoute from './components/ProtectedRoute';
import AgregarProducto from './components/AgregarProducto';

function App() {
  return (
    <AppProvider>
      <Navbar />
      <Routes>
        {/* Rutas públicas */}
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignIn />} />
        <Route path='/login' element={<Login />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/productos/:id' element={<ProductDetail />} />
        
        {/* 👇 Nueva ruta para el formulario (solo para vos) */}
        <Route path='/admin/agregar' element={<AgregarProducto />} />

        {/* Rutas protegidas */}
        <Route
          path='/cart'
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </AppProvider>
  );
}

export default App;