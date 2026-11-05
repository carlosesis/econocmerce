import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import { useShop } from "../context/ShopContext";

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useShop();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <main className="container not-found">
        <h1>Producto no encontrado</h1>
        <Link to="/" className="primary-button">Volver a la tienda</Link>
      </main>
    );
  }

  return (
    <main className="container detail-page">
      <Link to="/" className="back-link">← Volver a la tienda</Link>
      <section className="detail-container">
        <div className="detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="detail-info">
          <span className="category">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="rating">★ {product.rating} / 5</p>
          <h2 className="detail-price">${product.price.toFixed(2)}</h2>
          <p>{product.description}</p>
          <button className="primary-button" onClick={() => addToCart(product)}>
            Agregar al carrito
          </button>
        </div>
      </section>
    </main>
  );
}

export default ProductDetail;