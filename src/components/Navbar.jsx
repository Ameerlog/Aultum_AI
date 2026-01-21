import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navbarData } from "../data/navbar";
import { Bell, Menu, User, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -10,
    },
    open: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <nav className="w-full px-4 py-4 md:px-8 lg:px-16 bg-white  relative z-50 ">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between">

          <a
            href={navbarData.logo.url}
            className="text-2xl font-bold text-gray-800 hover:text-blue-900 transition-colors"
          >
            {navbarData.logo.text}
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navbarData.links.map((link) => (
              <a
                key={link.id}
                href={link.path}
                className="relative text-gray-700 hover:text-blue-900 font-semibold group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4"> 
            <button className="p-2  text-gray-700 hover:text-blue-600">
              <Bell size={22} />
            </button>
            <button className="p-2 text-gray-700 hover:text-blue-600">
              <User size={22} />
            </button>

           

            <button
              type="button"
              onClick={() => {
                console.log("Menu clicked");
                setIsOpen((prev) => !prev);
              }}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>


        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden"
            >
              <div className="flex flex-col pt-6 space-y-4">
                {navbarData.links.map((link) => (
                  <a
                    key={link.id}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 text-gray-700 font-medium rounded-lg hover:bg-gray-100"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
};

export default Navbar;
