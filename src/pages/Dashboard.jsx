import React from "react";
import Hero from "../components/Hero";
import DashboardDetails from "../components/DashbaordDetails";
import ProductsSection from "../components/ProductSection";



const Dashboard = () => {
  return (
    <>
      <Hero />
      <DashboardDetails />
      <ProductsSection/>
    </>
  );
};

export default Dashboard;