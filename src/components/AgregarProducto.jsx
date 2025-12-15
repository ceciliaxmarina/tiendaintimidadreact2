// components/AgregarProducto.jsx
import { useState } from 'react';

export default function AgregarProducto() {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre.trim()) {
      setError('El nombre es obligatorio');
      return;
    }
    if (precio <= 0 || isNaN(precio)) {
      setError('El precio debe ser mayor a 0');
      return;
    }
    if (descripcion.trim().length < 10) {
      setError('La descripción debe tener más de 10 caracteres');
      return;
    }

    setError('');
    const nuevoProducto = {
      nombre: nombre.trim(),
      precio: Number(precio),
      descripcion: descripcion.trim(),
    };

    try {
      const respuesta = await fetch('https://68fef1ede02b16d1753be781.mockapi.io/productos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoProducto),
      });

      if (respuesta.ok) {
        setNombre('');
        setPrecio('');
        setDescripcion('');
        alert('Producto agregado con éxito');
      } else {
        alert('Error al guardar el producto');
      }
    } catch (err) {
      alert('Error de red: ' + err.message);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Agregar Nuevo Producto</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div>
          <label>Precio:</label>
          <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        </div>
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
}