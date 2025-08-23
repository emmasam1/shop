import React from "react";
import bg_5 from "../../assets/bg_5.jpg";
import bg_4 from "../../assets/bg_4.jpg";
import image9 from "../../assets/image_9.jpg";
import image10 from "../../assets/image_10.jpg";
import image11 from "../../assets/image_11.jpg";
import image12 from "../../assets/image_12.jpg";
import image13 from "../../assets/image_13.jpg";
import image14 from "../../assets/image_14.jpg";
import image15 from "../../assets/image_15.jpg";
import image16 from "../../assets/image_16.jpg";
import ProductCard from "../../components/card/PoductCard";

const Bags = () => {
  const products = [
    {
      id: 1,
      title: "Ferragamo Studio BAG",
      oldPrice: "₦18,000",
      newPrice: "₦15,500",
      image: image9,
    },
    {
      id: 2,
      title: "Luxury Handbag with Chain Strap",
      oldPrice: "₦22,000",
      newPrice: "₦19,500",
      image: image10,
    },
    {
      id: 3,
      title: "Elegant Croc odile Pattern PU Leather Tote Bag",
      oldPrice: "₦12,000",
      newPrice: "₦10,000",
      image: image11,
    },
    {
      id: 4,
      title: "Mini Crossbody Bag",
      oldPrice: "₦9,500",
      newPrice: "₦8,000",
      image: image12,
    },
    {
      id: 5,
      title: "Elegant Evening Clutch",
      oldPrice: "₦14,000",
      newPrice: "₦11,500",
      image: image13,
    },
    {
      id: 6,
      title: "Large Travel Duffel Bag",
      oldPrice: "₦25,000",
      newPrice: "₦21,000",
      image: image14,
    },
    {
      id: 7,
      title: "Backpack with Laptop Compartment",
      oldPrice: "₦20,000",
      newPrice: "₦17,000",
      image: image15,
    },
    {
      id: 8,
      title: "Designer Quilted Handbag",
      oldPrice: "₦28,000",
      newPrice: "₦24,500",
      image: image16,
    },
  ];

  return (
    <div className="bg-[#202020] text-white">
      {/* Hero Section */}
      <div
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${bg_5})` }}
      >
        <div className="absolute inset-0 bg-[#000000b3] bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#CDA434] drop-shadow-lg">
            Elegant Bags for Every Occasion
          </h1>
          <p className="mt-3 text-gray-300 text-lg">
            Discover timeless handbags, totes, and travel essentials crafted for
            style and durability
          </p>
          <button className="mt-6 px-6 py-3 bg-[#CDA434] text-black font-semibold rounded-md hover:bg-yellow-600 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-semibold text-[#CDA434] mb-6">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              title={item.title}
              oldPrice={item.oldPrice}
              newPrice={item.newPrice}
              image={item.image}
            />
          ))}
        </div>

        <div
          className="relative h-[600px] flex items-center justify-center bg-cover bg-center overflow-hidden my-10 rounded-lg"
          style={{ backgroundImage: `url(${bg_4})` }}
        >
          <div className="absolute inset-0 bg-[#00000073] bg-opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              title={item.title}
              oldPrice={item.oldPrice}
              newPrice={item.newPrice}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bags;
