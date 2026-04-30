import React from "react";
import { Link } from "react-router-dom";
import logoAultum from "../assets/logoaultum.png";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-zinc-200 bg-[#efeff3]">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-14 md:grid-cols-4 lg:px-10">
        <div>
          <img src={logoAultum} alt="Aultum" className="h-[41px] w-auto object-contain" />
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-zinc-900">Our businesses</h4>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/cobrother" className="relative hover:text-zinc-900 transition duration-300 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-purple-700 after:transition-all after:duration-300 hover:after:w-full">CoBrother</Link></li>
            {/* <li>Aultum International</li> */}
            <li><Link to="/gray-material" className="relative hover:text-zinc-900 transition duration-300 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-purple-700 after:transition-all after:duration-300 hover:after:w-full">Gray Material</Link></li>
            {/* <li>Mineral Intelligence</li> */}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-zinc-900">About</h4>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/culture" className="relative hover:text-zinc-900 transition duration-300 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-purple-700 after:transition-all after:duration-300 hover:after:w-full">Culture</Link></li>
            <li><Link to="/careers" className="relative hover:text-zinc-900 transition duration-300 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-purple-700 after:transition-all after:duration-300 hover:after:w-full">Careers</Link></li>
            <li><Link to="/investors" className="relative hover:text-zinc-900 transition duration-300 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-purple-700 after:transition-all after:duration-300 hover:after:w-full">Investors</Link></li>
            <li><Link to="/impact" className="relative hover:text-zinc-900 transition duration-300 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-purple-700 after:transition-all after:duration-300 hover:after:w-full">Impact</Link></li>
            {/* <li><Link to="/brand-resources" className="relative hover:text-zinc-900 transition duration-300 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-purple-700 after:transition-all after:duration-300 hover:after:w-full">Brand resources</Link></li> */}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-zinc-900">Get in touch</h4>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/contact" className="relative hover:text-zinc-900 transition duration-300 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-purple-700 after:transition-all after:duration-300 hover:after:w-full">Contact</Link></li>
            {/* <li>aultum.com@gmail.com</li> */}
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-200 px-6 py-5 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Aultum International. Privacy policy | Terms
      </div>
    </footer>
  );
}