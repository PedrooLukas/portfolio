import './App.css'
import { LanguageProvider } from './contexts/LanguageContext'
import BarNav from './components/BarNav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contato from './components/Contato'

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
      </div>
    </LanguageProvider>
  )
}
export default App
