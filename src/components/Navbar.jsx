import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaBookOpen, FaHome, FaInfoCircle, FaEnvelope, FaShieldAlt, FaFileContract, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navItems = [
    { name: 'Home', icon: <FaHome className="mr-2" />, to: '/' },
    { name: 'About Us', icon: <FaInfoCircle className="mr-2" />, to: '/about' },
    { name: 'Contact Us', icon: <FaEnvelope className="mr-2" />, to: '/contact' },
  ];


  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 py-2 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' : 'bg-white dark:bg-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
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
          <div className="flex items-center md:hidden">
            {/* Profile Icon - Visible on all screen sizes */}
            <div className="relative group">
              <div className="relative">
                <button 
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                  onMouseEnter={() => document.getElementById('profileDropdown').classList.remove('hidden')}
                  onClick={() => document.getElementById('profileDropdown').classList.toggle('hidden')}
                >
                  <FaUserCircle className="w-6 h-6" />
                </button>
                {/* Dropdown menu - appears on hover or click */}
                <div 
                  id="profileDropdown" 
                  className="hidden absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50"
                  onMouseLeave={() => document.getElementById('profileDropdown').classList.add('hidden')}
                >
                  <a 
                    href="#profile" 
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-md transition-colors duration-150"
                  >
                    Your Profile
                  </a>
                  <a 
                    href="#settings" 
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-md transition-colors duration-150"
                  >
                    Settings
                  </a>
                  <a 
                    href="#logout" 
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-md transition-colors duration-150"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
            
            {/* Mobile menu button - only visible on small screens */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900">
          {navItems.map((item, index) => (
            <div key={index} className="w-full">
              <a
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
                onClick={(e) => {
                  if (item.hasDropdown) {
                    e.preventDefault();
                    setIsCategoriesOpen(!isCategoriesOpen);
                  }
                }}
              >
                <div className="flex items-center">
                  {item.icon}
                  {item.name}
                </div>
                {item.hasDropdown && (
                  <FaChevronDown className={`h-3 w-3 transition-transform duration-200 ${isCategoriesOpen ? 'transform rotate-180' : ''}`} />
                )}
              </a>
              
              {item.name === 'Categories' && isCategoriesOpen && (
                <div className="pl-6 py-1 space-y-1">
                  {categories.map((category, idx) => (
                    <a
                      key={idx}
                      href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-150"
                      onClick={() => setIsCategoriesOpen(false)}
                    >
                      {category}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
            <Link to="/privacy" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md text-base font-medium">
              Privacy Policy
            </Link>
            <Link to="/terms" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md text-base font-medium">
              Terms & Conditions
            </Link>
          </div>
          <button className="w-full flex items-center px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md text-base font-medium">
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;