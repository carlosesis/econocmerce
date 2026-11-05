import ProductList from "../components/ProductList";

function Home() {
  return (
    <main className="container">
      <section className="hero">
        <div>
          <p className="hero-eyebrow">DESCUBRE · ELIGE · DISFRUTA</p>
          <h1>Todo lo que buscas, en un solo lugar.</h1>
          <p>Explora nuestra selección de tecnología, accesorios, ropa y artículos para tu hogar.</p>
          <a href="#catalogo" className="hero-button">Explorar catálogo</a>
        </div>
      </section>
      <ProductList />
    </main>
  );
}

export default Home;