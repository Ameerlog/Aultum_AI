import {
  MapPin,
  MessageCircle,
  Calculator,
  Users,
  Database,
  Globe,
  Share2,
  Linkedin,
  ShoppingCart,
} from "lucide-react";

export const products = [
  {
    id: 1,
    title: "Google My Business Management",
    description: "Setup, verify, and manage Google Business profiles to improve local search visibility and customer engagement.",
    icon: MapPin,
    isActive: false,
    theme: {
      bg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
  },
  {
    id: 2,
    title: "WhatsApp-Based Accounting",
    description: "Manage accounting operations through WhatsApp with simplified reporting and automation.",
    icon: MessageCircle,
    isActive: false,
    theme: {
      bg: "bg-green-100",
      iconColor: "text-green-600",
    },
  },
  {
    id: 3,
    title: "TallyPrime Solutions",
    description: "Implementation, licensing, and support services for TallyPrime accounting software.",
    icon: Calculator,
    isActive: false,
    theme: {
      bg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  },
  {
    id: 4,
    title: "WhatsApp CRM",
    description: "Customer relationship management powered by WhatsApp automation using Evolution API / WhatsApp Business API.",
    icon: Users,
    isActive: false,
    theme: {
      bg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  },
  {
    id: 5,
    title: "ERPNext Implementation",
    description: "End-to-end ERPNext setup including finance, inventory, HR, and manufacturing modules.",
    icon: Database,
    isActive: false,
    theme: {
      bg: "bg-red-100",
      iconColor: "text-red-600",
    },
  },
  {
    id: 6,
    title: "Website & E-commerce Development",
    description: "Development of professional websites, e-commerce stores, and custom web applications.",
    icon: Globe,
    isActive: false,
    theme: {
      bg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
  },
  {
    id: 7,
    title: "Social Media & Content Marketing",
    description: "Social media management including content creation, reels production, and brand growth strategies.",
    icon: Share2,
    isActive: false,
    theme: {
      bg: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
  },
  {
    id: 8,
    title: "LinkedIn Personal Branding",
    description: "Professional LinkedIn profile optimization and executive positioning for personal brand growth.",
    icon: Linkedin,
    isActive: false,
    theme: {
      bg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
  },
  {
    id: 9,
    title: "E-commerce Virtual Assistants",
    description: "Dedicated virtual assistants for managing online stores, inventory, and marketplace operations.",
    icon: ShoppingCart,
    isActive: false,
    theme: {
      bg: "bg-teal-100",
      iconColor: "text-teal-600",
    },
  },
];