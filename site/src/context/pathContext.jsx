import { createContext, useState } from "react";

const PathContext = createContext("");

export function PathProvider({ children }) {
  const [pathName, setPathName] = useState(window.location.pathname);

  //updates pathNAme
  const updatePathName = (pathname) => {
    setPathName(pathname);
  };

  const updateNav = (pathname) => {
    updatePathName(pathname);
  };

  return (
    <PathContext.Provider
      value={{
        pathName,
        updateNav,
      }}
    >
      {children}
    </PathContext.Provider>
  );
}

export default PathContext;
