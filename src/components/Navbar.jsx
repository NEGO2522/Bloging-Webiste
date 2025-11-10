import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaBookOpen, FaInfoCircle, FaEnvelope, FaFileContract } from 'react-icons/fa';

const Navbar = ({ activeCategory, setActiveCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef(null);

  const categories = [
    'All',
    'Programming',
    'Web Development',
    'Lifestyle',
    'Health & Fitness',
    'Productivity'
  ];
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navItems = [
    { name: 'About Us', icon: <FaInfoCircle className="mr-2" />, to: '/about' },
    { name: 'Contact Us', icon: <FaEnvelope className="mr-2" />, to: '/contact' },
  ];
  


  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 py-2 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' : 'bg-white dark:bg-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <FaBookOpen className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <span className="ml-3 text-xl font-bold text-gray-900 dark:text-white">Knowledge Hub</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Divider */}
            <span className="mx-2 h-6 w-px bg-gray-200 dark:bg-gray-700"></span>
            
            {/* Auth and Legal Links */}
            <Link to="/privacy" className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
              Terms & Conditions
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden fixed inset-0 bg-white dark:bg-gray-900 z-40 transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto px-4 pt-20 pb-8 space-y-1 sm:px-6">
          {/* Categories */}
          <div className="mb-4">
            <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Categories
            </h3>
            <div className="mt-2 space-y-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center px-3 py-2 text-base font-medium rounded-md transition-colors duration-150 ${
                    activeCategory === category
                      ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-100'
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                  }`}
                >
                  <span className="truncate">{category}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
            <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Navigation
            </h3>
            <div className="mt-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-150"
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-4">
            <Link
              to="/privacy"
              onClick={() => setIsOpen(false)}
              className="flex items-center px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
            >
              <FaFileContract className="mr-3" />
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              onClick={() => setIsOpen(false)}
              className="flex items-center px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
            >
              <FaFileContract className="mr-3" />
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;