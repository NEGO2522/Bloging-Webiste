import { FaArrowLeft, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to Home */}
        <Link 
          to="/" 
          className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 mb-8 transition-colors duration-200"
        >
          <FaArrowLeft className="mr-2" />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
              <FaEnvelope className="mr-3 text-indigo-500" />
              Contact Us
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              We'd love to hear from you! Whether you have questions, feedback, or suggestions, feel free to reach out.
            </p>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                <FaPaperPlane className="mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-full">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Other Ways to Reach Us
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                    Email
                  </h3>
                  <a 
                    href="mailto:contact@knowledgehub.com" 
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center"
                  >
                    <FaEnvelope className="mr-2" />
                    contact@knowledgehub.com
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                    Follow us on social media:
                  </h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                      <span className="sr-only">Facebook</span>
                      <FaFacebook className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                      <span className="sr-only">Twitter</span>
                      <FaTwitter className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                      <span className="sr-only">Instagram</span>
                      <FaInstagram className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                      <span className="sr-only">LinkedIn</span>
                      <FaLinkedin className="h-6 w-6" />
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    Subscribe to Our Newsletter
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Get the latest articles and updates delivered to your inbox!
                  </p>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-1 min-w-0 block w-full px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
                    />
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 Knowledge Hub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                Privacy Policy
              </Link>
              <span className="text-gray-400">|</span>
              <Link to="/terms" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                Terms & Conditions
              </Link>
              <span className="text-gray-400">|</span>
              <Link to="/contact" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;