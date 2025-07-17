import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Home from "./components/Home/Home"
import Nav from "./components/Nav/Nav"
import Projects from "./components/Projects/Projects"
import ExperienceSection from "./components/Experience/ExperienceSection";
import Footer from "./components/Footer/Footer"



function App() {

  return (
    <>
      <Nav />
      <Home />
      <About />
      <ExperienceSection />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
