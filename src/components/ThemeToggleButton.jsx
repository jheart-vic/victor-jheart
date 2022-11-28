import { ThemeContext } from './ThemeContext'

function ThemeTogglerButton() {
  // The Theme Toggler Button receives not only the theme
  // but also a toggleTheme function from the context
  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (
        <button
          onClick={toggleTheme}
          className='togglebtn'
          style={{backgroundColor: theme}}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;