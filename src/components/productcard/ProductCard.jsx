import React from "react";
import useCart from "../../store/context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div
        className="card border-0 shadow-sm h-100 overflow-hidden position-relative"
        style={{
          borderRadius: "18px",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.08)";
        }}
      >
        {/* Product Image */}
        <div
          className="position-relative overflow-hidden"
          style={{ height: "210px" }}
        >
          <img
            src={product.image || "https://via.placeholder.com/300x200"}
            alt={product.name}
            className="card-img-top"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              transition: "transform 0.4s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />

          {/* Floating Price Badge */}
          <span
            className="badge bg-success position-absolute"
            style={{
              top: "10px",
              right: "10px",
              padding: "8px 12px",
              fontSize: "0.9rem",
              borderRadius: "12px",
              boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
            }}
          >
            ₹{product.price}
          </span>
        </div>

        {/* Product Info */}
        <div className="card-body d-flex flex-column justify-content-between p-3">
          <div>
            <h5 className="card-title text-truncate fw-semibold mb-2 text-dark">
              {product.name}
            </h5>
            <p className="text-muted small mb-3">
              {product.description ||
                "High-quality product designed for durability."}
            </p>
          </div>

          <button
            className="btn w-100 fw-semibold mt-auto text-white"
            onClick={() => addToCart(product)}
            style={{
              background: "linear-gradient(135deg, #16a34a, #15803d)",
              border: "none",
              borderRadius: "10px",
              transition: "background 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(135deg, #22c55e, #15803d)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(135deg, #16a34a, #15803d)")
            }
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
