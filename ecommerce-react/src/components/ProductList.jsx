import { useEffect, useMemo, useRef, useState } from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

function ProductList() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas");
  const [visibleCount, setVisibleCount] = useState(6);
  const sentinelRef = useRef(null);

  const categories = ["Todas", ...new Set(products.map((product) => product.category))];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "Todas" || product.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  useEffect(() => {
    setVisibleCount(6);
  }, [search, category]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || visibleCount >= filteredProducts.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((current) => Math.min(current + 3, filteredProducts.length));
        }
      },
      { rootMargin: "0px 0px 120px 0px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [visibleCount, filteredProducts.length]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <section className="catalog-section" id="catalogo">
      <h2 className="section-title">Nuestros productos</h2>

      <div className="catalog-controls">
        <input
          type="search"
          placeholder="Buscar productos..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Buscar productos"
        />
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          aria-label="Filtrar por categoría"
        >
          {categories.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </div>

      {visibleProducts.length > 0 ? (
        <div className="product-grid">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="no-results">No se encontraron productos.</p>
      )}

      {visibleCount < filteredProducts.length && (
        <div ref={sentinelRef} className="load-more">
          Desplázate para cargar más productos...
        </div>
      )}
      {visibleCount >= filteredProducts.length && filteredProducts.length > 0 && (
        <p className="load-more">Has llegado al final del catálogo.</p>
      )}
    </section>
  );
}

export default ProductList;