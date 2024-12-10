"use client";

import * as React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { TooltipProvider } from "@/components/ui/tooltip";

// Constantes globais
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

// Sidebar Context
type SidebarContextType = {
  open: boolean;
  toggleSidebar: () => void;
  isMobile: boolean;
};

const SidebarContext = React.createContext<SidebarContextType | null>(null);

export const useSidebar = () => {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
};

// SidebarProvider
export const SidebarProvider: React.FC<
  React.PropsWithChildren<{ defaultOpen?: boolean }>
> = ({ defaultOpen = true, children }) => {
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(defaultOpen);

  const toggleSidebar = React.useCallback(() => {
    setOpen((prev) => !prev);
    document.cookie = `${SIDEBAR_COOKIE_NAME}=${!open}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
  }, [open]);

  return (
    <SidebarContext.Provider value={{ open, toggleSidebar, isMobile }}>
      <TooltipProvider>
        <div
          style={{
            "--sidebar-width": SIDEBAR_WIDTH,
            "--sidebar-width-mobile": SIDEBAR_WIDTH_MOBILE,
          } as React.CSSProperties}
          className="flex h-screen w-full"
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
};

// Sidebar
export const Sidebar: React.FC<
  React.PropsWithChildren<{ side?: "left" | "right" }>
> = ({ side = "left", children }) => {
  const { open, isMobile } = useSidebar();

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={() => {}}>
        <SheetContent
          side={side}
          className={cn(
            "w-[--sidebar-width-mobile] bg-gray-900 text-white",
            side === "left" ? "border-r" : "border-l"
          )}
        >
          {children}
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      className={cn(
        "bg-gray-900 text-white transition-all",
        open ? "w-[--sidebar-width]" : "w-16",
        side === "left" ? "border-r" : "border-l"
      )}
      data-side={side}
    >
      {children}
    </div>
  );
};

// Sidebar Components
export const SidebarContent: React.FC<
  React.PropsWithChildren<object>
> = ({ children }) => <div className="p-4">{children}</div>;

export const SidebarHeader: React.FC<
  React.PropsWithChildren<object>
> = ({ children }) => (
  <div className="p-4 text-lg font-bold border-b border-gray-700">
    {children}
  </div>
);

export const SidebarFooter: React.FC<
  React.PropsWithChildren<object>
> = ({ children }) => (
  <div className="p-4 text-sm text-gray-500 border-t border-gray-700">
    {children}
  </div>
);

export const SidebarMenu: React.FC<
  React.PropsWithChildren<object>
> = ({ children }) => <ul className="space-y-2">{children}</ul>;

export const SidebarMenuItem: React.FC<
  React.PropsWithChildren<object>
> = ({ children }) => <li>{children}</li>;

export const SidebarMenuButton: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
}> = ({ onClick, children }) => (
  <button
    className="w-full text-left hover:bg-gray-700 p-2 rounded-md transition"
    onClick={onClick}
  >
    {children}
  </button>
);

export const SidebarGroup: React.FC<React.PropsWithChildren<object>> = ({ children }) => (
  <div className="p-4 border-t border-gray-700">{children}</div>
);

export const SidebarTrigger: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button className="p-2 text-white bg-blue-500" onClick={onClick}>
      Toggle Sidebar
    </button>
  );
};

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
};
