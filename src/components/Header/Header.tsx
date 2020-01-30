import React, { useContext, useState } from "react";
import Toggle from "../Toggle"

import { ThemeContext } from "../../ThemeContext";

// type HeaderProps = { theme: string}

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [themeChecked, toggleCheck] = useState(false);

  const handleThemeChange = () => {
    toggleTheme()
    toggleCheck(!themeChecked)

  }

  return (<div className="header">
    <div className="header__center">
      <h1>Todo App</h1>
    </div>
    <div className="header__end">
      <span className="hidden-sm">Theme:</span>
      <Toggle
        id="theme_toggle"
        checked={themeChecked}
        onChange={handleThemeChange}
        label={theme}

      />
    </div>
  </div>)
}

export default Header;
