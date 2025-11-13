import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  return (
    <>
      <Dashboard />
      <BottomNav />
    </>
  );
};

export default Index;
