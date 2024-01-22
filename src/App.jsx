import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

//Pages
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Resume from "./pages/resume";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

function App() {
  // Initializes the theme based on the value in localStorage or default to light mode
  const initialDarkMode = localStorage.getItem("darkMode") === "true";
  const [isDarkMode, setDarkMode] = useState(initialDarkMode);

  // Update local storage when dark mode changes
  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    localStorage.setItem("darkMode", checked);
  };
  return (
    <BrowserRouter>
      <CustomCursor />
      <motion.main
        className="min-h-screen w-screen md:text-md"
        style={{
          background: isDarkMode ? "#2B2B2C" : "#EEEBE9",
          color: isDarkMode ? "#EEEBE9" : "#232324",
          transition: "0.3s background",
        }}
        initial={{ opacity: 0, delay: 1 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.5,
        }}
      >
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </motion.main>
    </BrowserRouter>
  );
}

export default App;
