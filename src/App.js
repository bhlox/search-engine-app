import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Results from "./components/Results";
import Home from "./pages/Home";
import Image from "./pages/Image";
import News from "./pages/News";
import Search from "./pages/Search";
import Videos from "./pages/Videos";
// import Routes from "./components/Routes";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-slate-900 text-black dark:text-gray-100">
        <Router>
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/image" element={<Image />} />
            <Route path="/news" element={<News />} />
            <Route path="/video" element={<Videos />} />
            <Route path="/search" element={<Search />} />
          </Routes>
          <div className="max-w-7xl mx-auto p-4">
            <Results />
          </div>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
