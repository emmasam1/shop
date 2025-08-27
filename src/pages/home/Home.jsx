import React from "react";
import { motion } from "framer-motion";
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
    { id: 1, title: "Vanilla & Tobacco EDP 100ml", oldPrice: "₦10,000", newPrice: "₦8,500", image: image1 },
    { id: 2, title: "Olfactory Bonfire EDP 100ml", oldPrice: "₦12,000", newPrice: "₦10,000", image: image2 },
    { id: 3, title: "Zimaya Oscar EDP 100ml", oldPrice: "₦14,000", newPrice: "₦12,000", image: image3 },
    { id: 4, title: "Al Wataniah Oud For You EDP 100ml", oldPrice: "₦9,500", newPrice: "₦9,000", image: image4 },
    { id: 5, title: "Optimystic Paradox EDP 100ml", oldPrice: "₦10,000", newPrice: "₦8,500", image: image5 },
    { id: 6, title: "Night Club Irish Green 100ml", oldPrice: "₦12,000", newPrice: "₦10,000", image: image6 },
    { id: 7, title: "Hugo Boss Bottled Absolu 100ml", oldPrice: "₦14,000", newPrice: "₦12,000", image: image7 },
    { id: 8, title: "Armaf Club De Nuit Lionheart Man EDP 100ml", oldPrice: "₦9,500", newPrice: "₦9,000", image: image8 },
  ];

  return (
    <div className="bg-[#202020] text-white">
      {/* Hero Section */}
      <div
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${bg_2})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="heading text-4xl md:text-5xl font-bold text-[#CDA434] drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Luxury Perfumes & More
          </motion.h1>
          <motion.p
            className="mt-3 text-gray-300 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Discover premium scents, bags, and lifestyle essentials
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-[#CDA434] text-black font-semibold rounded-md shadow-lg hover:bg-yellow-600 transition"
          >
            Shop Now
          </motion.button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-semibold text-[#CDA434] mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="hover:shadow-xl hover:shadow-yellow-600/20 transition rounded-xl"
            >
              <ProductCard {...item} />
            </motion.div>
          ))}
        </div>

        {/* Second Hero / Banner */}
        <div
          className="relative h-[500px] flex items-center justify-center bg-cover bg-center overflow-hidden my-10 rounded-lg"
          style={{ backgroundImage: `url(${bg_3})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-center px-4 max-w-2xl">
            <motion.h2
              className="heading text-3xl md:text-4xl font-bold text-[#CDA434]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Crafting memories through exquisite fragrances
            </motion.h2>
            <motion.p
              className="mt-4 text-gray-200 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Indulge your senses with timeless scents designed to inspire confidence and elegance.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 bg-[#CDA434] text-black font-semibold rounded-md shadow-lg hover:bg-yellow-600 transition"
            >
              Explore Collection
            </motion.button>
          </div>
        </div>

        {/* Second Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="hover:shadow-xl hover:shadow-yellow-600/20 transition rounded-xl"
            >
              <ProductCard {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
