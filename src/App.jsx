import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TermsConditions from './pages/Terms_Conditions';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import About from './pages/About';
import Home from './components/Home';
import Article from './pages/Article';

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Navbar 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
        <main className="pt-20">
          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  activeCategory={activeCategory} 
                  setActiveCategory={setActiveCategory} 
                />
              } 
            />
            <Route path="/article/:articleId" element={<Article />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;