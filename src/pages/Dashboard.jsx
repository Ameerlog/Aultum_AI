import React from "react";
import Hero from "../components/Hero";
import DashboardDetails from "../components/DashbaordDetails";
import ProductsSection from "../components/ProductSection";
import AutomationDashboard from "../components/Dashboard";



const Dashboard = () => {
  return (
    <>
      <Hero />
      <DashboardDetails />
      <ProductsSection/>
      <AutomationDashboard/>
    </>
  );
};

export default Dashboard;