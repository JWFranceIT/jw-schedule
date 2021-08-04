import { createContext, useContext } from "react";
import { useMediaQuery } from "react-responsive";

const DeviceContext = createContext(true);

export function DeviceContextProvider({ children }) {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1024 });

  return (
    <DeviceContext.Provider value={isDesktopOrLaptop}>
      {children}
    </DeviceContext.Provider>
  );
}

export function useDeviceContext() {
  return useContext(DeviceContext);
}
