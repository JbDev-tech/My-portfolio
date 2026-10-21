import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Skills from "./Components/Skills"
import About from "./Components/About"
import Services from "./Components/Services"
import Contact from "./Components/contact"
import Footer from "./Components/Footer"
import Projects from "./Components/Projects"

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page