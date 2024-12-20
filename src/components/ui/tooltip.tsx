"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = ({ children, content }: { children: React.ReactNode; content: string }) => (
  <TooltipPrimitive.Root>
    <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
    <TooltipPrimitive.Content
      className={cn(
        "bg-black text-white px-2 py-1 text-sm rounded shadow-md",
        "animate-in fade-in-50"
      )}
    >
      {content}
      <TooltipPrimitive.Arrow className="fill-black" />
    </TooltipPrimitive.Content>
  </TooltipPrimitive.Root>
);

export { Tooltip, TooltipProvider };
