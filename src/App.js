import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <BrowserRouter>
          <SideBar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/" element={<Products />} />
              <Route path="/" element={<Comments />} />
              <Route path="/" element={<About />} />
            </Routes>
          </SideBar>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
