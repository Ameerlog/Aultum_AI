import React from "react";
import { Twitter, Linkedin, Youtube, Instagram, Facebook } from "lucide-react";
import Logo from "../assets/aultumlogo.png";

const social = [
  { Icon: Facebook },
  { Icon: Twitter },
  { Icon: Instagram },
  { Icon: Linkedin },
  { Icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">
<div className="grid grid-cols-1 md:grid-cols-3 items-start gap-8 mb-14">

  
  <div className="flex justify-center md:justify-start">
    <img
      src={Logo}
      alt="Aultum"
      className="h-9 w-auto object-contain"
    />
  </div>

  
      <div className="flex justify-center gap-12 text-center md:text-left">
        
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            About Us
          </h4>
          <ul className="space-y-2">
            <li><a href="#" className="footer-link">About Us</a></li>
            <li><a href="#" className="footer-link">Login</a></li>
            <li><a href="#" className="footer-link">Site map</a></li>
          </ul>
        </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Contact
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="footer-link">Contact</a></li>
              <li><a href="#" className="footer-link">Terms of Service</a></li>
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="flex justify-center md:justify-end">
          <div className="flex gap-3">
            {social.map(({ Icon }, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-purple-600 hover:border-purple-600 transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

      </div>


      
        <div className="border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-purple-600">Aultum</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
