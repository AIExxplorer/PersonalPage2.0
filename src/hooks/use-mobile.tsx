"use client";

import { useEffect, useState } from "react";

export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", updateMobile);
    updateMobile();

    return () => window.removeEventListener("resize", updateMobile);
  }, []);

  return isMobile;
};
