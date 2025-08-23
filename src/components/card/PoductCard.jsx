import React from "react";
import { Card } from "antd";
import { RiWhatsappFill } from "react-icons/ri";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const { Meta } = Card;

const ProductCard = ({ title, oldPrice, newPrice, image, description, size }) => {
  const handleWhatsAppClick = () => {
    const message = `
      *Product Name:* ${title}
      ${size ? `*Size:* ${size}` : ""}
      *Old Price:* ${oldPrice}
      *New Price:* ${newPrice}
      *Description:* ${description || "No description provided"}
      *Image Link:* ${image}
    `;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2347063062524?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Card
      className="myBorder"
      hoverable
      style={{
        width: "100%",
        backgroundColor: "#2E302F",
        borderRadius: "10px",
      }}
      cover={
        <img
          alt={title}
          src={image}
          className="h-80 object-cover rounded-t-md"
        />
      }
    >
      <Meta title={<span className="text-white">{title}</span>} />

      {/* Price Section */}
      <div className="flex justify-between items-center mt-3">
        <span className="text-gray-400 line-through">{oldPrice}</span>
        <span className="text-[#CDA434] font-bold">{newPrice}</span>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-4 mt-4">
        <RiWhatsappFill
          size={25}
          className="text-green-500 hover:scale-110 cursor-pointer transition-transform"
          onClick={handleWhatsAppClick}
        />
        <FaInstagram
          size={25}
          className="text-pink-500 hover:scale-110 cursor-pointer transition-transform"
        />
        <FaFacebook
          size={25}
          className="text-blue-600 hover:scale-110 cursor-pointer transition-transform"
        />
      </div>
    </Card>
  );
};

export default ProductCard;
