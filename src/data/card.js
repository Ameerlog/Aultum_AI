import { Cloud, Layers, Rocket, Settings } from "lucide-react";

export const cards = [
  {
    title: "Find the opportunities",
    desc: "Find out solutions and tech partners",
    icon: Rocket,
      route: "/unique",
    theme: {
      bg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
  },
  {
    title: "Business and Management Solutions",
    desc: "Business and  resell solutions",
    icon: Layers,
    theme: {
      bg: "bg-red-100",
      iconColor: "text-red-600",
    },
  },
  {
    title: "Automation Funnels",
    desc: "Manage automation funnels",
    icon: Settings,
    theme: {
      bg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  },
  {
    title: "Techies Network",
    desc: "Find 500+ Technicians",
    icon: Cloud,
    theme: {
      bg: "bg-green-100",
      iconColor: "text-green-600",
    },
  },
];