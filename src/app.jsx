import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Footer from "./components/Footer"
import Why from "./components/Why"
import Gallery from "./components/Gallery"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Services />
      <Why />
      <Gallery />
      <Footer />
    </>
  )
}

export default App