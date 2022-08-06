import { useState } from "react";


export const useMobileOpenResponsive = () => {

  const [mobileOpen, setMobileOpen] =  useState(false);

  const handleDrawerToggle = () => {
    console.log(mobileOpen)
    setMobileOpen( !mobileOpen );

  };

  return { mobileOpen, setMobileOpen, handleDrawerToggle };
};
