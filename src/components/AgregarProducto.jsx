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
    <>
      <style>{`
        :root {
          --bg-start: #e8c2c2;
          --bg-end: #cc8b8b;
        }

        .add-product-page {
          min-height: 100vh;
          background: linear-gradient(to right, var(--bg-start), var(--bg-end));
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
        }

        .add-product-container {
          background-color: rgba(15, 15, 15, 0.88);
          border: 1.5px solid #b31b1b;
          border-radius: 12px;
          padding: 1.25rem;
          width: 100%;
          max-width: 24rem; /* más estrecho */
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
        }

        .add-product-title {
          font-size: 1.375rem; /* más pequeño */
          font-weight: bold;
          color: #f87171;
          text-align: center;
          margin-bottom: 1rem;
        }

        .add-product-error {
          color: #f87171;
          text-align: center;
          margin-bottom: 0.75rem;
          font-size: 0.875rem;
        }

        .add-product-label {
          display: block;
          color: #d1d5db;
          margin-bottom: 0.375rem;
          font-size: 0.875rem;
        }

        .add-product-input,
        .add-product-textarea {
          width: 100%;
          padding: 0.375rem 0.75rem; /* menos padding */
          background-color: #1f1f1f;
          color: #f3f4f6;
          border-radius: 0.625rem;
          border: 1px solid #4b0000;
          outline: none;
          font-size: 0.925rem;
          resize: vertical;
          min-height: 4.5rem;
        }

        .add-product-input:focus,
        .add-product-textarea:focus {
          border-color: #f87171;
          box-shadow: 0 0 0 2px #f8717140;
        }

        .add-product-button {
          width: 100%;
          background-color: #b91c1c;
          color: white;
          padding: 0.375rem 0.75rem;
          border: none;
          border-radius: 0.625rem;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          margin-top: 0.5rem;
          transition: background-color 0.2s;
        }

        .add-product-button:hover {
          background-color: #991b1b;
        }

        .form-group {
          margin-bottom: 1rem;
        }
      `}</style>

      <div className="add-product-page">
        <div className="add-product-container">
          <h2 className="add-product-title">Agregar Nuevo Producto</h2>

          {error && <p className="add-product-error">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="add-product-label">Nombre:</label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="add-product-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="add-product-label">Precio:</label>
              <input
                type="number"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                className="add-product-input"
                step="0.01"
                min="0"
                required
              />
            </div>

            <div className="form-group">
              <label className="add-product-label">Descripción:</label>
              <textarea
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                className="add-product-textarea"
                required
              />
            </div>

            <button type="submit" className="add-product-button">
              Agregar Producto
            </button>
          </form>
        </div>
      </div>
    </>
  );
}