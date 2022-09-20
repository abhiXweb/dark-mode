import { useState, useEffect } from "react"
import darkImg from "./assets/icons/night-mode.png"
import lightImg from "./assets/icons/sun.png"


function App() {
  let checkMode = localStorage.getItem("darkmode");
  let prevMode = (checkMode !== null && checkMode === "light") ? false : true
  const [darkMode, setDarkMode] = useState(checkMode != null ? prevMode : "")

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("darkmode", "dark")
    } else {
      localStorage.setItem("darkmode", "light")
    }
  }, [darkMode])

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className={`App ${darkMode ? 'darkStyle' : 'lightStyle'}`}>
      <h1>Dark Mode using ReactJS</h1>
      <img src={darkMode ? lightImg : darkImg} alt={darkMode ? "Dark Mode" : "Light Mode"} onClick={toggleDarkMode} />
    </div>
  );
}

export default App;
