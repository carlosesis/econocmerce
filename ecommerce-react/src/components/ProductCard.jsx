import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link to={`/producto/${product.id}`} aria-label={`Ver ${product.name}`}>
        <img
          className="product-image"
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
        />
      </Link>
      <div className="product-info">
        <span className="category">{product.category}</span>
        <h3><Link to={`/producto/${product.id}`}>{product.name}</Link></h3>
        <p className="rating">★ {product.rating} / 5</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <Link className="details-link" to={`/producto/${product.id}`}>Ver producto</Link>
      </div>
    </article>
  );
}

export default ProductCard;