import "./assets/css/App.css";
import Home from './components/Home';
import PortfolioCase from "./components/PortfolioCase";
import Velocity from './components/Velocity';
import Footer from './components/common/Footer';
import Nav from './components/common/Nav';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/velocity" element={<Velocity />} />
          <Route path="/portfolioCase" element={<PortfolioCase />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

