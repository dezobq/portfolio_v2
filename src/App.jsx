import { useState } from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Hire from "./components/hire";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Sidebar from "./components/Sidebar";
import Opacity from "./components/opacity";

const App = () => {
  const [show, setShow] = useState(false);

  const handleSidebar = () => {
    setShow(!show);
    document.documentElement.classList.toggle("overflow-y-hidden");
  };

  return (
    <div>
      {show && <Opacity show={show} handleSidebar={handleSidebar} />}
      <Sidebar show={show} handleSidebar={handleSidebar} />
      <div className="bg-hero bg-contain bg-center bg-no-repeat md:bg-cover">
        <div className="mx-auto max-w-7xl">
          <Navbar handleSidebar={handleSidebar} />
          <Hero />
        </div>
      </div>
      <About />
      <Projects />
      <Hire />
      <Contact />
    </div>
  );
};

export default App;