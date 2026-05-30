import Navbar from './Navbar';
import Home from './Home';

import './Style/App.css';

export default function App(){

  return (
    <div className='container'>
      <Navbar />
      <Home />
    </div>
  );
}