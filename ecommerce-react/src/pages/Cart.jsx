import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

function Cart() {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useShop();

  return (
    <main className="container">
      <h1 className="page-title">Carrito de compras</h1>
      {cart.length === 0 ? (
        <section className="empty-cart">
          <h2>Tu carrito está vacío</h2>
          <p>Agrega algunos productos para comenzar.</p>
          <Link to="/" className="primary-button">Ir a la tienda</Link>
        </section>
      ) : (
        <section className="cart-layout">
          <div className="cart-products">
            {cart.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)} por unidad</p>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Disminuir">−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Aumentar">+</button>
                  </div>
                  <button className="remove-button" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </div>
                <strong>${(item.price * item.quantity).toFixed(2)}</strong>
              </article>
            ))}
          </div>
          <aside className="cart-summary">
            <h2>Resumen de compra</h2>
            <div className="summary-row">
              <span>Productos</span>
              <span>{cart.reduce((total, item) => total + item.quantity, 0)}</span>
            </div>
            <div className="summary-row total-row">
              <strong>Total</strong>
              <strong>${cartTotal.toFixed(2)}</strong>
            </div>
            <Link to="/checkout" className="primary-button checkout-button">Continuar compra</Link>
          </aside>
        </section>
      )}
    </main>
  );
}

export default Cart;