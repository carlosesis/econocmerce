import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useShop();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError("Completa todos los campos.");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Introduce un correo electrónico válido.");
      return;
    }
    login({ name: name.trim(), email: email.trim() });
    navigate("/");
  }

  return (
    <main className="container auth-page">
      <section className="auth-card">
        <h1>Bienvenido a NOVASTORE</h1>
        <p>Inicia sesión para continuar comprando.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre completo</label>
          <input id="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Tu nombre" />
          <label htmlFor="email">Correo electrónico</label>
          <input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="correo@ejemplo.com" />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="primary-button">Iniciar sesión</button>
        </form>
        <Link to="/" className="back-link">Volver a la tienda</Link>
      </section>
    </main>
  );
}

export default Login;