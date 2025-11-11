import React from "react";
import ProductCard from "../../components/productcard/ProductCard";

const Home = () => {
  const data = [
    {
      id: 0,
      name: "Laptop",
      image:
        "https://images.unsplash.com/photo-1549049950-48d5887197a0?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=464",
      price: 2500,
    },
    {
      id: 1,
      name: "Mobile",
      image:
        "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=872",
      price: 1200,
    },
    {
      id: 2,
      name: "Keyboard",
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=384",
      price: 2400,
    },
    {
      id: 3,
      name: "SD Card",
      image:
        "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
      price: 2066,
    },
    {
      id: 4,
      name: "Mouse",
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=870",
      price: 20011,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            🛒 Explore Our Latest Products
          </h1>
          <p className="text-gray-500 text-lg">
            Discover quality gadgets crafted for your everyday needs.
          </p>
        </div>

        {/* Product Grid */}
        <div className="row">
          {data.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
