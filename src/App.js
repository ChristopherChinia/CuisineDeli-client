import React,{useState} from "react";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "light" : "dark")}>
      <div className="AppGlass">
        <BrowserRouter>
          <SideBar>
          <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/" element={<Products />} />
              {/* <Route path="/" element={<Comments />} /> */}
              <Route path="/" element={<About />} />
            </Routes>
          </SideBar>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
