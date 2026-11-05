import { Link, useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";

function Header() {
  const { cartCount, user, logout } = useShop();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <header className="site-header">
      <div className="container header-content">
        <Link to="/" className="logo">NOVA<span>STORE</span></Link>
        <nav className="navigation">
          <Link to="/">Inicio</Link>
          <Link to="/carrito">Carrito ({cartCount})</Link>
          {user ? (
            <>
              <span className="user-greeting">Hola, {user.name}</span>
              <button className="text-button" onClick={handleLogout}>Cerrar sesión</button>
            </>
          ) : (
            <Link to="/login">Iniciar sesión</Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;