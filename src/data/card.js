import { Cloud, Layers, Rocket, Settings } from "lucide-react";

export const cards = [
  {
    title: "Find Tech Partners",
    desc: "Find out solutions and tech partners",
    icon: Rocket,
    theme: {
      bg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
  },
  {
    title: "White Label Solutions",
    desc: "White label and resell solutions",
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
    title: "Deploy Tech",
    desc: "Deploy 500+ technologies",
    icon: Cloud,
    theme: {
      bg: "bg-green-100",
      iconColor: "text-green-600",
    },
  },
];
