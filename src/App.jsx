import "./App.scss";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Cursor from "./components/Cursor/Cursor";
import Hero from "./components/Hero/Hero";
import Mentors from "./components/Mentors/Mentors";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <Parallax type="about" />
      </section>

      <section>
        <About />
      </section>

      <section id="Services">
        <Parallax type="portfolio" />
      </section>

      <Portfolio />
      <section id="Mentors">
        <Mentors />
      </section>

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
