import './App.scss';
import Topbar from './topbar/Topbar';
import Intro from './intro/Intro';
import Portfolio from './portfolio/Portfolio';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import { useState } from 'react';
import Menu from './menu/Menu';

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;