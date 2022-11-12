import { Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ProjectPage from "./pages/ProjectPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/blog" element={<BlogPage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/project" element={<ProjectPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
