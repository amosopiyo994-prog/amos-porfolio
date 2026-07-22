import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import GithubStats from "./components/GithubStats";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <GithubStats />
      <Projects />
      <Timeline />
      <Achievements />
      <Certifications />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;