import { useState } from "react"
import darkImg from "./assets/icons/night-mode.png"
import lightImg from "./assets/icons/sun.png"

function App() {
  let checkMode = localStorage.getItem("darkmode");
  let prevMode = (checkMode !== null && checkMode === "light") ? false : true
  const [darkMode, setDarkMode] = useState(checkMode != null ? prevMode : "")

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  const darkStyle = {
    backgroundColor: '#282c34',
    color: 'white',
    transition: '.5s'
  }

  const lightStyle = {
    backgroundColor: 'white',
    color: '#282c34',
    transition: '.5s'
  }

  if (darkMode) {
    localStorage.setItem("darkmode", "dark")
  } else {
    localStorage.setItem("darkmode", "light")
  }
  return (
    <div className="App" style={darkMode ? darkStyle : lightStyle}>
      <h1>Dark Mode using ReactJS</h1>
      <img src={darkMode ? lightImg : darkImg} alt="Dark Mode" onClick={toggleDarkMode} />
    </div>
  );
}

export default App;
