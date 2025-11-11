import React from "react";
import { NavLink } from "react-router-dom";
import useCart from "../../store/context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Buyo-Shopping-Cart
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-4">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link position-relative border px-4"
                    : "nav-link position-relative"
                }
                to="/cart"
              >
                Cart
                <span class="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
