import { createContext, useState } from "react";
import UseReducer from "./useReducer";
import UseRef from "./useRef";
import UseStateAndUseEffect from "./useState&useEffect";

export const ThemeContext = createContext();

const Hooks = () => {
  const [theme, setTheme] = useState(true);

  const themeHandler = () => {
    console.log("called from useContext Hooks");
    setTheme(!theme);
  };

  return (
    <div>
      <ThemeContext.Provider value={{ theme, themeHandler }}>
        <UseStateAndUseEffect />
        <UseRef />
        <UseReducer />
      </ThemeContext.Provider>
    </div>
  );
};

export default Hooks;
