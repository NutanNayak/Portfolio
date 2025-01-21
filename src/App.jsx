import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { styles } from './styles';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} bg-hero-pattern bg-cover bg-no-repeat bg-center`}>
          <Navbar />
          <div className="relative w-full mx-auto">
            <Hero />
          </div>
        </div>

        <About />
        <Skills />
        <Experience />
        <Projects />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
