import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logoAultum from "../assets/logoaultum.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { label: "Home", href: "#top" },
    { label: "Businesses", href: "#businesses" },
    { label: "Performance", href: "#performance" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-[#f4f4f5]/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="inline-flex items-center">
          <img src={logoAultum} alt="Aultum" className="h-[41px] w-auto object-contain" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="relative text-sm text-zinc-700 transition duration-300 hover:text-zinc-950 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-purple-700 after:transition-all after:duration-300 hover:after:w-full">
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-zinc-700 md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-zinc-200 bg-[#f4f4f5] px-6 pb-5 pt-3 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="relative text-sm text-zinc-700 transition duration-300 hover:text-zinc-950 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-purple-700 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;