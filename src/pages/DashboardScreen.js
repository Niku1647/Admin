import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export const DashboardScreen = () => {
  return (
    <div>
      <Sidebar />
      <Topbar pageName="Dashboard" />
    </div>
  );
};
