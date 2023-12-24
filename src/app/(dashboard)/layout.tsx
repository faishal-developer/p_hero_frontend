"use client";

import { useState, useEffect } from "react";

import SideBar from "@/components/ui/SideBar";
import TopBar from "@/components/ui/TopBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(true);

  const showDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth >= 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <TopBar open={open} closeDrawer={closeDrawer} showDrawer={showDrawer} />
      <SideBar showDrawer={showDrawer} closeDrawer={closeDrawer} open={open} />

      <div
        style={{
          marginLeft: open ? 330 : 0,
          transition: "margin 0.4s",
        }}
      >
        <div
          style={{
            marginTop: 10,
            backgroundColor: "#f1f1f1",
            minHeight: "90vh",
            padding: 40,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
