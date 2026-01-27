// import React from "react";
// import { Twitter, Linkedin, Youtube, Instagram, Facebook } from "lucide-react";
// import Logo from "../assets/aultumlogo.jpeg";

// const social = [
//   { Icon: Facebook },
//   { Icon: Twitter },
//   { Icon: Instagram },
//   { Icon: Linkedin },
//   { Icon: Youtube },
// ];

// export default function Footer() {
//   return (
//     <footer className="bg-gray-50 border-t border-gray-200">
//       <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">
// <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-8 mb-14">

  
//   <div className="flex justify-center md:justify-start">
//     <img
//       src={Logo}
//       alt="Aultum"
//       className="h-9 w-auto object-contain"
//     />
//   </div>

  
//       <div className="flex justify-center gap-12 text-center md:text-left">
        
//         <div>
//           <h4 className="text-lg font-semibold text-gray-900 mb-2">
//      Quick Links
//           </h4>
//           <ul className="space-y-2">
//             <li><a href="#" className="footer-link">About Us</a></li>
//             <li><a href="#" className="footer-link">Login</a></li>
//             <li><a href="#" className="footer-link">Site map</a></li>
//           </ul>
//         </div>

//           <div>
//             <h4 className="text-lg font-semibold text-gray-900 mb-2">
//               Contact
//             </h4>
//             <ul className="space-y-2">
//               <li><a href="#" className="footer-link">Contact</a></li>
//               <li><a href="#" className="footer-link">Terms of Service</a></li>
//               <li><a href="#" className="footer-link">Privacy Policy</a></li>
//             </ul>
//           </div>

//         </div>

//         <div className="flex justify-center md:justify-end">
//           <div className="flex gap-3">
//             {social.map(({ Icon }, i) => (
//               <a
//                 key={i}
//                 href="#"
//                 className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-purple-600 hover:border-purple-600 transition"
//               >
//                 <Icon className="w-4 h-4" />
//               </a>
//             ))}
//           </div>
//         </div>

//       </div>


      
//         <div className="border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
//           © {new Date().getFullYear()}{" "}
//           <span className="font-semibold text-purple-600">Aultum</span>. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }

// Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ChevronUp,
} from "lucide-react";
import Logo from "../assets/aultumlogo.jpeg";

const socialLinks = [
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Instagram, href: "https://www.instagram.com/aultum.com307/", label: "Instagram" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Youtube, href: "https://www.youtube.com/@AultumInternational", label: "YouTube" },
];

const quickLinks = [
  { name: "About Us", href: "/aboutUs" },
  { name: "Blog", href: "#" },
];

const supportLinks = [
  { name: "Help Center", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "FAQ", href: "#" },
];

const contactInfo = [
  { Icon: Mail, text: "hello@aultum.com", href: "mailto:hello@aultum.com" },
  { Icon: Phone, text: "+91-9987644567", href: "tel:+91-9987644567" },
  { Icon: MapPin, text: "Hubli, India", href: "#" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <footer className="relative bg-gray-50 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-12 border-t border-gray-200"
        >
          {/* Left Side - Brand */}
          <motion.div variants={itemVariants}>
            <img
              src={Logo}
              alt="Aultum"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-zinc-600 text-sm leading-relaxed mb-4 max-w-sm">
              Accelerate your SaaS growth with our innovative solutions. We help
              businesses scale faster and smarter.
            </p>

            <div className="flex gap-2">
              {socialLinks.map(({ Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center text-zinc-500 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

         
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-8"
          >
   
            <div>
              <h4 className="text-sm font-semibold text-zinc-900 mb-4 uppercase tracking-wider">
                Support
              </h4>
              <ul className="space-y-2">
                {supportLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-zinc-600 hover:text-purple-600 transition-colors inline-flex items-center gap-1 group text-sm"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

         
            <div>
              <h4 className="text-sm font-semibold text-zinc-900 mb-4 uppercase tracking-wider">
                Contact
              </h4>
              <ul className="space-y-3">
                {contactInfo.map(({ Icon, text, href }, i) => (
                  <li key={i}>
                    <a
                      href={href}
                      className="text-zinc-600 hover:text-purple-600 transition-colors inline-flex items-center gap-2 group text-sm"
                    >
                      <Icon className="w-4 h-4" />
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
              <div>
              <h4 className="text-sm font-semibold text-zinc-900 mb-4 uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-zinc-600 hover:text-purple-600 transition-colors inline-flex items-center gap-1 group text-sm"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </motion.div>
        </motion.div>

     
      </div>

      {/* Scroll to top */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-6 right-6 w-11 h-11 rounded-full bg-zinc-900 text-white flex items-center justify-center shadow-lg hover:bg-zinc-800 transition-colors"
      >
        <ChevronUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}