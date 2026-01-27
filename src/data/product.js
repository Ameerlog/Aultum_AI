import {
  Cloud,
  BarChart3,
  MessageSquare,
  ShieldCheck,
  Zap,
  FileText,
  Smartphone,
  Globe,
  Workflow,
} from "lucide-react";

export const products = [
  {
    id: 1,
    title: "Cloud Storage",
    icon: Cloud,
    description: "Secure cloud storage solution for your business data and files.",
    isActive: true,
    theme: {
      bg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
  },
  {
    id: 2,
    title: "Analytics Pro",
    icon: BarChart3,
    description: "Advanced analytics and reporting tools for better insights.",
    isActive: false,
    theme: {
      bg: "bg-green-100",
      iconColor: "text-green-600",
    },
  },
  {
    id: 3,
    title: "Team Chat",
    icon: MessageSquare,
    description: "Real-time messaging and collaboration for your team.",
    isActive: true,
    theme: {
      bg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  },
  {
    id: 4,
    title: "API Gateway",
    icon: ShieldCheck,
    description: "Manage and secure your APIs with our gateway solution.",
    isActive: false,
    theme: {
      bg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  },
  {
    id: 5,
    title: "Automation Hub",
    icon: Workflow,
    description: "Streamline your automation processes with our hub.",
    isActive: true,
    theme: {
      bg: "bg-red-100",
      iconColor: "text-red-600",
    },
  },
  {
    id: 6,
    title: "Content Management",
    icon: FileText,
    description: "Manage and publish your content with ease.",
    isActive: false,
    theme: {
      bg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
  },
  {
    id: 7,
    title: "Mobile App",
    icon: Smartphone,
    description: "Build and distribute your mobile app with ease.",
    isActive: true,
    theme: {
      bg: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
  },
  {
    id: 8,
    title: "Web Application",
    icon: Globe,
    description: "Build and deploy your web application with ease.",
    isActive: false,
    theme: {
      bg: "bg-pink-100",
      iconColor: "text-pink-600",
    },
  },
];
