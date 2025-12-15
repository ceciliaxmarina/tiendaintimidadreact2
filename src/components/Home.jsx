import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="bg-gradient-to-r from-pink-800 to-red-900 pt-6 h-lvh">
      <section className="py-20 px-4 text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-red-400 max-w-4xl">
          Tienda Intimidad
        </h1>
        <img src="/img/merienda.jpg" alt="merienda té libro mantel" style={{ maxWidth: '60%', height: 'auto', margin: '0 auto 2rem', display: 'block' }} />
        <p style={{ maxWidth: '60%', margin: '0 auto 2rem', fontSize: '1.25rem', lineHeight: '1.75', color: '#1a1a1a' }}>
          <p>En Tienda Intimidad habita el eco suave de otras épocas. Aquí no vendemos cosas: compartimos objetos con memoria. Cada fanzine fotocopiado, cada libro subrayado a mano, cada volumen antiguo de páginas amarillentas, cada cassette con cinta ligeramente ondulada, trae consigo una historia que espera ser continuada. Nuestra vajilla antigua no está quieta: guarda las voces de sobremesas largas, de cafés tibios y miradas lentas.</p>
          <p> Creemos en la belleza de lo cotidiano, en la emoción de lo imperfecto, en el poder de lo que ha sido querido antes. En Tienda Intimidad encontrarás piezas que te invitan a pausar, a recordar, a reconectar con una calidez que parece perdida, pero que aún vive en lo tangible.</p>
          <p>Es un refugio para quienes buscan lo que no aparece en los catálogos grandes. Un rincón delicado donde la nostalgia no es tristeza, sino un hilo suave que nos une con lo que alguna vez fuimos.</p>
        </p>
      </section>
    </div>
  );
};

export default Home;