import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Skill from './Pages/Skill';
import Work from './Pages/work';
import Education from './Pages/education';
import Contact from './Pages/contact';
import Footer from './Pages/footer';
import './Style/App.css';

export default function App(){

  return (
    <div className='container'>
      <Navbar />
      <Home />
      <Skill />
      <Work />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}