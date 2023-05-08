import "locomotive-scroll/dist/locomotive-scroll.css";

import { AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { ThemeProvider } from "styled-components";
import "./App.css";

import Loader from "./components/Loader";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Introduce from "./components/Introduce";
import Skill from "./components/Skill";
import Project from "./components/Project";
import About from "./components/About";
import Header from "./components/Header";
import ProjectDetail from "./components/ProjectDetail";
import Contact from "./components/Contact";

import data from "./data/data";

import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";

import AnimatedCursor from "react-animated-cursor";

function App() {
  // useLocoScroll();
  const containerRef = useRef(null);
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener("popstate", function () {
      window.location.reload();
    });
    setTimeout(() => {
      setLoaded(true);
    }, 6500);
  }, []);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <AnimatedCursor
          innerSize={10}
          outerSize={15}
          color="32, 32, 32"
          outerAlpha={0.2}
          innerScale={2}
          outerScale={5}
          hasBlendMode={true}
          innerStyle={{
            border: "3px solid #fff",
          }}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />

        <AnimatePresence>{Loaded ? null : <Loader />}</AnimatePresence>
        <Header key="header" />
        <main className="App" data-scroll-container ref={containerRef}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <LocomotiveScrollProvider
                    options={{
                      smooth: true,
                    }}
                    // location={asPath}
                    containerRef={containerRef}
                    onLocationChange={(scroll) =>
                      scroll.scrollTo(0, { duration: 0, disableLerp: true })
                    } // If you want to reset the scroll position to 0 for example
                  >
                    <ScrollTriggerProxy />
                    <AnimatePresence>
                      <>
                        <Home key="home" />
                        <About key="about" />
                        <Introduce key="introduce" />
                        <Skill key="skill" />
                        <Project key="project" data={data} />
                        <Contact key="contact" />
                        <Footer key="Footer" />
                      </>
                    </AnimatePresence>
                  </LocomotiveScrollProvider>
                </>
              }
            />
            <Route
              path="/project/:id"
              element={<ProjectDetail data={data} />}
            />
          </Routes>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
