import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/index';
import WorkPage from './pages/work';
import WorkDetail from './pages/work-detail';
import Writing from './pages/writing';
import AboutPage from './pages/about';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work-detail" element={<WorkDetail />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
