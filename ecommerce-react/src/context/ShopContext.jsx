import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ShopContext = createContext(null);

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

export function ShopProvider({ children }) {
  const [cart, setCart] = useState(() => readStorage("novastore-cart", []));
  const [user, setUser] = useState(() => readStorage("novastore-user", null));

  useEffect(() => {
    localStorage.setItem("novastore-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (user) localStorage.setItem("novastore-user", JSON.stringify(user));
    else localStorage.removeItem("novastore-user");
  }, [user]);

  function addToCart(product) {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...current, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart((current) => current.filter((item) => item.id !== id));
  }

  function updateQuantity(id, quantity) {
    if (quantity < 1) return;
    setCart((current) =>
      current.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }

  function clearCart() {
    setCart([]);
  }

  function login(userData) {
    setUser(userData);
  }

  function logout() {
    setUser(null);
  }

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  );

  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  );

  const value = {
    cart,
    user,
    cartCount,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    login,
    logout
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop debe utilizarse dentro de ShopProvider");
  }
  return context;
}