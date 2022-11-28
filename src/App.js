import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import { ThemeContext } from './components/ThemeContext';
import './App.css';

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
   setTheme((mode) => ( mode === "light" ? "dark" : "light"));
 };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className="App" id={theme}>
      <Navbar />
      <div className="content">
        <Routes>
         <Route path='/' exact element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/projects' element={<Projects />}/>
        </Routes>
        </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
