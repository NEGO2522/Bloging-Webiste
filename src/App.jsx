import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import TermsConditions from './pages/Terms_Conditions';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import About from './pages/About';
import Home from './components/Home';
import Login from './components/Login';
import Article from './pages/Article';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={
              <LoginWithRedirect />
            } />
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

// Component to handle login redirects
const LoginWithRedirect = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  
  return <Login from={from} />;
};

export default App;