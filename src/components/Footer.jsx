import React from "react";
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
            <li>CoBrother</li>
            <li>Aultum International</li>
            <li>Gray Material</li>
            <li>Mineral Intelligence</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-zinc-900">About</h4>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li>Culture</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Impact</li>
            <li>Brand resources</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-zinc-900">Get in touch</h4>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li>Contact</li>
            <li>aultum.com@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-200 px-6 py-5 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Aultum International. Privacy policy | Terms
      </div>
    </footer>
  );
}