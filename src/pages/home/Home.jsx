import React from "react";
import bg_2 from "../../assets/bg_2.jpg";
import bg_3 from "../../assets/bg_3.jpg";
import image1 from "../../assets/image_1.jpeg";
import image2 from "../../assets/image_2.jpeg";
import image3 from "../../assets/image_3.jpeg";
import image4 from "../../assets/image_4.jpeg";
import image5 from "../../assets/image_5.jpg";
import image6 from "../../assets/image_6.jpeg";
import image7 from "../../assets/image_7.jpg";
import image8 from "../../assets/image_8.jpg";
import ProductCard from "../../components/card/PoductCard";

const Home = () => {
  const products = [
    {
      id: 1,
      title: "Vanilla & Tobacco EDP 100ml",
      oldPrice: "₦10,000",
      newPrice: "₦8,500",
      image: image1,
    },
    {
      id: 2,
      title: "Olfactory Bonfire EDP 100ml",
      oldPrice: "₦12,000",
      newPrice: "₦10,000",
      image: image2,
    },
    {
      id: 3,
      title: "Zimaya Oscar EDP 100ml",
      oldPrice: "₦14,000",
      newPrice: "₦12,000",
      image: image3,
    },
    {
      id: 4,
      title: "Al Wataniah Oud For You EDP 100ml",
      oldPrice: "₦9,500",
      newPrice: "₦9,000",
      image: image4,
    },
    {
      id: 5,
      title: "Optimystic Paradox EDP 100ml",
      oldPrice: "₦10,000",
      newPrice: "₦8,500",
      image: image5,
    },
    {
      id: 6,
      title: "Night Club Irish Green 100ml",
      oldPrice: "₦12,000",
      newPrice: "₦10,000",
      image: image6,
    },
    {
      id: 7,
      title: "Hugo Boss Bottled Absolu 100ml",
      oldPrice: "₦14,000",
      newPrice: "₦12,000",
      image: image7,
    },
    {
      id: 8,
      title: "Armaf Club De Nuit Lionheart Man EDP 100ml",
      oldPrice: "₦9,500",
      newPrice: "₦9,000",
      image: image8,
    },
  ];

  return (
    <div className="bg-[#202020] text-white">
      {/* Hero Section */}
      <div
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${bg_2})` }}
      >
        <div className="absolute inset-0 bg-[#000000b3] bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#CDA434] drop-shadow-lg">
            Luxury Perfumes & More
          </h1>
          <p className="mt-3 text-gray-300 text-lg">
            Discover premium scents, bags, and lifestyle essentials
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
          className="relative h-[600px] flex items-center justify-center bg-cover bg-center overflow-hidden my-10"
          style={{ backgroundImage: `url(${bg_3})` }}
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

export default Home;
