import React from "react";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />

      <div className="bg-primary flex-1 p-4 text-white border-1 border-dashed">
        blog dashboard
      </div>
    </div>
  )
}
