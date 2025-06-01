import './App.css'
import BarNav from './components/BarNav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Contato from './components/Contato'

function App() {
  return (
    <div className='w-full'>
      <div className='xl:mx-[300px]'>
      <BarNav />
      <Hero />
      <Projects />
      <AboutMe />
      <Contato />
      </div>
    </div>
  )
}
export default App
