import { useState, useEffect } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/firebase';
import { FaGoogle, FaBookOpen } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Login = ({ from }) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsMounted(true);
    // Prevent scrolling on the page
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    
    return () => {
      // Re-enable scrolling when component unmounts
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      setIsMounted(false);
    };
  }, []);

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);

    try {
      await signInWithPopup(auth, googleProvider);
      // Redirect to the requested article or home
      navigate(from || '/', { replace: true });
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.02,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.2
      }
    },
    tap: { 
      scale: 0.98 
    }
  };

  return (
    <div className="h-screen w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 lg:p-8">
      <motion.div 
        className="w-full max-w-md"
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
          <div className="px-8 py-10 sm:p-10">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-2xl">
                  <FaBookOpen className="w-8 h-8 text-indigo-600 dark:text-indigo-300" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Welcome Back
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8">
                Sign in to access your Knowledge Hub
              </p>
            </div>
            
            {error && (
              <motion.div 
                className="mb-6 p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-300 rounded-lg text-sm flex items-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {error}
              </motion.div>
            )}

            <motion.button
              onClick={handleGoogleLogin}
              disabled={loading}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="w-full flex items-center justify-center px-6 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl text-base font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition-all duration-200"
            >
              <FaGoogle className="w-5 h-5 mr-3 text-red-500" />
              {loading ? 'Signing in...' : 'Continue with Google'}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;