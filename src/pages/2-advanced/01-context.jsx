import React, { useContext, useState } from 'react'
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext({
  theme: themes.light,
  toggle: () => { }
})

const ThemedButton = () => {
  const context = useContext(ThemeContext)
  return <button
    style={{ color: context.theme.foreground, backgroundColor: context.theme.background }}
    onClick={() => { context.toggle() }
    }>Click Me!
  </button>
}

const ToolBar = () => {
  return <ThemedButton />;
}

export default function ContextHooksDemo() {
  const [theme, setTheme] = useState(themes.light)
  return <ThemeContext.Provider value={{
    theme,
    toggle: () => {
      setTheme(theme => theme === themes.light ? themes.dark : themes.light)
    }
  }}>
    <ToolBar />
  </ThemeContext.Provider>
}