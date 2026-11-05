import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";

function Checkout() {
  const navigate = useNavigate();
  const { cart, cartTotal, user, clearCart } = useShop();
  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    address: "",
    city: "",
    payment: "Pago de demostración"
  });
  const [error, setError] = useState("");
  const [completed, setCompleted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.address.trim() || !form.city.trim()) {
      setError("Completa todos los campos obligatorios.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Introduce un correo electrónico válido.");
      return;
    }
    clearCart();
    setError("");
    setCompleted(true);
  }

  if (completed) {
    return (
      <main className="container confirmation-page">
        <section className="confirmation-card">
          <div className="success-icon">✓</div>
          <h1>¡Compra realizada!</h1>
          <p>La compra de demostración se completó correctamente.</p>
          <p>Gracias por comprar en NOVASTORE.</p>
          <button className="primary-button" onClick={() => navigate("/")}>Volver a la tienda</button>
        </section>
      </main>
    );
  }

  if (cart.length === 0) {
    return (
      <main className="container empty-cart">
        <h2>No hay productos para comprar</h2>
        <Link to="/" className="primary-button">Volver a la tienda</Link>
      </main>
    );
  }

  return (
    <main className="container checkout-page">
      <h1 className="page-title">Finalizar compra</h1>
      <section className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Información de entrega</h2>
          <label htmlFor="checkout-name">Nombre completo</label>
          <input id="checkout-name" name="name" value={form.name} onChange={handleChange} />
          <label htmlFor="checkout-email">Correo electrónico</label>
          <input id="checkout-email" name="email" type="email" value={form.email} onChange={handleChange} />
          <label htmlFor="address">Dirección</label>
          <input id="address" name="address" value={form.address} onChange={handleChange} />
          <label htmlFor="city">Ciudad</label>
          <input id="city" name="city" value={form.city} onChange={handleChange} />
          <label htmlFor="payment">Método de pago</label>
          <select id="payment" name="payment" value={form.payment} onChange={handleChange}>
            <option>Pago de demostración</option>
            <option>Pago contra entrega simulado</option>
          </select>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="primary-button">Confirmar compra</button>
        </form>
        <aside className="cart-summary">
          <h2>Resumen del pedido</h2>
          {cart.map((item) => (
            <div className="summary-row" key={item.id}>
              <span>{item.name} × {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="summary-row total-row">
            <strong>Total</strong>
            <strong>${cartTotal.toFixed(2)}</strong>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default Checkout;