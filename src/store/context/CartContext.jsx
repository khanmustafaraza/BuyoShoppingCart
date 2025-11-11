import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartAppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // console.log(product);
    setCart((prev) => {
      const exsist = prev.find((item) => item.id == product.id);
      if (exsist) {
        return prev.map((item) =>
          item.id == product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
    alert("item is added to cart");
  };

  // remove cart item
  const deleteFromCart = (id) => {
    // console.log(id);
    // const removeItems = cart.filter((cur) => {
    //   return cur.id !== id;
    // });
    // setCart(removeItems);

    setCart((prev) => {
      const exist = prev.find((cur) => cur.id == id);
      // console.log(exist);
      const isFilter = prev.filter((cur) => cur.id !== exist.id);

      return isFilter;
    });
  };
  const updateCart = (type, id) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          // Increase quantity
          if (type === "inc") {
            return { ...item, qty: item.qty + 1 };
          }

          // Decrease quantity (but not below 1)
          if (type === "dec" && item.qty > 1) {
            return { ...item, qty: item.qty - 1 };
          }
        }
        return item;
      })
    );
    alert("Quntity is UpDated");
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, deleteFromCart, updateCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return useContext(CartContext);
};

export default useCart;
export { CartAppProvider };
