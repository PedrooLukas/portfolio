import './App.css'
import { LanguageProvider } from './contexts/LanguageContext'
import BarNav from './components/BarNav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contato from './components/Contato'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <LanguageProvider>
      <div className='w-full'>
        <div className='x3:mx-[300px]'>
          <BarNav />
          <Hero />
          <Projects />
          <Contato />
        </div>
        <ScrollToTop />
      </div>
    </LanguageProvider>
  )
}
export default App
