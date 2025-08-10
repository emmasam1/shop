import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCartOutlined,
  UserOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import logo from "../../assets/logo.png";
import { Sling as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const navLinks = [
    { name: "Perfumes", href: "/" },
    { name: "Bags", href: "#bags" },
    { name: "Towels", href: "#towels" },
    { name: "More", href: "#more" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#202020] shadow-md">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-40" />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#CDA434] hover:text-orange-200 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Search + Icons */}
        <div className="flex items-center space-x-4">
          <SearchOutlined className="text-xl cursor-pointer hover:text-purple-600" />
          <ShoppingCartOutlined className="text-xl cursor-pointer hover:text-purple-600" />
          <UserOutlined className="text-xl cursor-pointer hover:text-purple-600" />

          {/* Mobile Menu Button */}
           <div className="md:hidden relative z-[60]">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              duration={1}
              color="#CDA434"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu + Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              className="fixed top-0 left-0 w-1/2 h-full bg-[#20202055] z-50 flex flex-col p-6 space-y-6"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <img src={logo} alt="Logo" className="w-40" />
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#CDA434] hover:text-orange-200 text-lg"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
