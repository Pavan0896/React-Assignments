import { createContext, useState } from "react";

const themeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [flag, setFlag] = useState(false);
  return (
    <themeContext.Provider value={{ flag, setFlag }}>
      {children}
    </themeContext.Provider>
  );
};
export { themeContext, ThemeProvider };
