import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Education from "../components/Education";
import GitHubStats from "../components/GitHubStats";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <GitHubStats />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
