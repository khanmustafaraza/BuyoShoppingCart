import React from "react";
import useCart from "../../store/context/CartContext";

const CartPage = () => {
  const { cart, updateCart, deleteFromCart } = useCart();

  // Calculate total price
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4 text-center">🛒 Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center py-5">
          <h5 className="text-muted">Your cart is empty.</h5>
          <p className="text-secondary">
            Start adding some products to see them here.
          </p>
        </div>
      ) : (
        <div className="row g-4">
          {/* Cart Items Section */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm p-3 rounded-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="d-flex align-items-center border-bottom py-3"
                >
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />

                  {/* Product Info */}
                  <div className="flex-grow-1 px-3">
                    <h6 className="fw-semibold mb-1">{item.name}</h6>
                    <p className="text-muted small mb-1">
                      Price: ₹{item.price.toLocaleString()}
                    </p>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-success btn-sm me-2"
                        onClick={() => updateCart("dec", item.id)}
                      >
                        −
                      </button>
                      <span className="fw-semibold">{item.qty}</span>
                      <button
                        className="btn btn-outline-success btn-sm ms-2"
                        onClick={() => updateCart("inc", item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Price & Remove */}
                  <div className="text-end">
                    <p className="fw-semibold mb-1">
                      ₹{(item.price * item.qty).toLocaleString()}
                    </p>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => deleteFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Section */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm p-4 rounded-3">
              <h5 className="fw-bold mb-3 text-center">Order Summary</h5>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Shipping</span>
                <span className="text-success">Free</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-bold mb-3">
                <span>Total</span>
                <span>₹{total.toLocaleString()}</span>
              </div>

              <button className="btn btn-success w-100 fw-semibold py-2 rounded-3">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
