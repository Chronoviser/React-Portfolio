import './App.scss';
import { useState, useEffect } from 'react';
import Topbar from './topbar/Topbar';
import Intro from './intro/Intro';
import Portfolio from './portfolio/Portfolio';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import Menu from './menu/Menu';
import allData from '../constants/Data.js';
import axios from '../api/axios';

function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [data, setData] = useState(allData);
  const [views, setViews] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/data');
      if (req.data) {
        setData(req.data[0]);
        console.log(req.data);
        console.log('got it');
      }
    }
    fetchData();

    function incViews(currentViews) {
      axios.patch('/views', {
        views: currentViews + 1
      });
    }

    async function getViews() {
      const req = await axios.get('/views');
      if (req.data) {
        setViews(req.data[0].views);
        incViews(req.data[0].views);
      }
    }
    getViews();
  }, []);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} data={data.topbar} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} views={views} />
      <div className="sections">
        <Intro data={data.intro} />
        <Portfolio data={data.portfolio} />
        <Projects data={data.projects} />
        <Contact />
      </div>
    </div>
  );
}

export default App;