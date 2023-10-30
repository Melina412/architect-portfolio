import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.scss";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

import { ThemeContext } from "./context/Context";
import { LoadingContext } from "./context/Context";
import LoadingPage from "./components/LoadingPage";

import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <section className={theme ? "darkmode" : "lightmode"}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <LoadingContext.Provider value={{ setLoading }}>
          {/*  */}
          {loading ? (
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
              </Routes>
            </BrowserRouter>
          ) : (
            <LoadingPage />
          )}
          {/*  */}
        </LoadingContext.Provider>
      </ThemeContext.Provider>
    </section>
  );
}

export default App;
