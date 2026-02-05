
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  X,
} from "lucide-react";
import Logo from "../assets/logoaultum.png";


const socialLinks = [
  { Icon: Facebook,
     href: "https://www.facebook.com/share/1FPqZrn48r/",
    label: "Facebook" },

  { Icon: X,
     href: "https://x.com/aultum_com",
     label: "Twitter" },
  {
    Icon: Instagram,
    href: "https://www.instagram.com/aultum.com307/",
    label: "Instagram",
  },
  { Icon: Linkedin, href: "https://www.linkedin.com/company/preunicorns/", label: "LinkedIn" },
  {
    Icon: Youtube,
    href: "https://www.youtube.com/@AultumInternational",
    label: "YouTube",
  },
];

const quickLinks = [
  { name: "About Us", href: "/aboutUs" },
  { name: "Blog", href: "/" },
];

const supportLinks = [
  { name: "Help Center", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "FAQ", href: "#" },
];

const contactInfo = [
  {
    Icon: Mail,
    text: "aultum.com@gmail.com",
    href: "mailto:aultum.com@gmail.com",
  },
  // { Icon: Phone, text: "+91-9987644567", href: "tel:+91-9987644567" },
  // { Icon: MapPin, text: "Hubli, India", href: "#" },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative bg-gray-50 pt-12 pb-6 sm:pt-16 lg:pt-20 border-t border-gray-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 mb-12"
        >

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start"
          >
            <div className="flex items-center gap-2 mb-4">
              <img
                src={Logo}
                alt="Aultum Logo"
                className="h-10 w-auto object-contain mix-blend-multiply scale-300 ml-10"
              />
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed mb-6 max-w-xs">
              Accelerate your SaaS growth with our innovative solutions. We help
              businesses scale faster and smarter.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-zinc-500 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-bold text-zinc-900 mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-zinc-600 hover:text-purple-600 transition-colors inline-flex items-center gap-1 group text-sm font-medium"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-bold text-zinc-900 mb-4 uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-zinc-600 hover:text-purple-600 transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-bold text-zinc-900 mb-4 uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              {contactInfo.map(({ Icon, text, href }, i) => (
                <li key={i}>
                  <a
                    href={href}
                    className="text-zinc-600 hover:text-purple-600 transition-colors flex items-start gap-3 text-sm group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-100 group-hover:text-purple-600 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="mt-1.5 break-all sm:break-words">
                      {text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <div className="border-t border-gray-200 py-6 flex items-center justify-center">
          <p className="text-center text-sm text-zinc-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-purple-600">Aultum</span>. All
            rights reserved.
          </p>
        </div>
      </div>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-zinc-900 text-white shadow-lg hover:bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}