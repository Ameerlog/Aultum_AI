import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navbarData } from "../data/navbar";
import { Bell, Menu, User, X } from "lucide-react";
import logo from "../assets/aultumlogo.jpeg";
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
    <nav className="w-full bg-gray-50 relative z-50">
      <div className="flex items-center justify-between py-3">
     
        <div className="pl-4 md:pl-8 lg:pl-16">
          <a
            href={navbarData.logo.url}
            className="text-2xl font-bold text-gray-800 hover:text-blue-900 transition-colors"
          >
           <img src={logo} alt="AultumLogo" className="h-9 w-auto object-contain"/>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
          {navbarData.links.map((link) => (
            <a
              key={link.id}
              href={link.path}
              className="relative text-gray-700 hover:text-blue-900 font-semibold group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center mr-4">
          <button className="p-2 ml-3 text-gray-700 hover:text-blue-600">
            <Bell size={22} />
          </button>

          <button className="pr-0 pl-5  py-2 text-gray-700 hover:text-blue-600">
            <User size={22} />
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden pr-0 pl-2 py-2 text-gray-700 hover:text-blue-600 cursor-pointer"
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
            className="md:hidden px-4"
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
    </nav>
  );
};

export default Navbar;