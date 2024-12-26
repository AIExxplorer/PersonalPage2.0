"use client";

import * as React from "react";

type SidebarContextType = {
  open: boolean;
  toggleSidebar: () => void;
  isMobile: boolean;
};

const SidebarContext = React.createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

type SidebarProviderProps = {
  children: React.ReactNode;
  defaultOpen?: boolean;
};

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
  children,
  defaultOpen = true,
}) => {
  const [open, setOpen] = React.useState(defaultOpen);
  const [isMobile, setIsMobile] = React.useState(false);

  const toggleSidebar = () => {
    setOpen((prev) => !prev);
  };

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Checa o estado inicial
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SidebarContext.Provider value={{ open, toggleSidebar, isMobile }}>
      {children}
    </SidebarContext.Provider>
  );
};
