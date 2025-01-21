import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Hero from './components/hero';
import Localisation from './components/localisation';
import Navbar from './components/navbar';
import Rendezvous from './components/rendez-vous';
import Services from './components/services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Localisation/>
      <Contact/>
      <Rendezvous/>
      <Footer/>
    </div>
  );
}

export default App;
