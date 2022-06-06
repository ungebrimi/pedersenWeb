import Hero from './sections/Hero'
import About from './sections/About'
import Information from './sections/Information'
import Navbar from './components/navigation/Navbar'
import Footer from './components/navigation/Footer'

function App() {

  return (
    <div className="App bg-background text-fonts">
      <Hero />
      <About />
      <Information />
      <Footer />
      <Navbar />
    </div>
  )
}

export default App
