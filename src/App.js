
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './components/Skills';
import NavBar from './components/NavBar';
import Home from './components/Home';
import MathTutoring from './components/MathTutoring';
import OtherServices from './components/OtherServices';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import Pricing from './components/Pricing';



function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Home />
        <Skills />
        <MathTutoring />
        <OtherServices />
        <Pricing/>
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
