import { FaBookOpen, FaBullseye, FaCheck, FaUsers, FaEnvelope, FaGraduationCap, FaHeartbeat, FaLaptopCode, FaLeaf, FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <FaBookOpen className="mr-3 text-indigo-500" />
            About Knowledge Hub
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            Welcome to Knowledge Hub – your trusted source for educational content, practical tips, and valuable insights!
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
              <FaBullseye className="mr-2 text-indigo-500" />
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-300 ml-8">
              We believe that knowledge should be accessible to everyone. Our mission is to provide high-quality, easy-to-understand articles on various topics including education, health, technology, lifestyle, and environmental awareness.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
              <FaLightbulb className="mr-2 text-indigo-500" />
              What We Offer
            </h2>
            <div className="grid md:grid-cols-2 gap-6 ml-8">
              <div className="flex items-start">
                <FaGraduationCap className="text-indigo-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">Educational Guides</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Learn programming, web development, and technical skills</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaHeartbeat className="text-indigo-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">Health & Fitness</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Tips for healthy living, yoga, diet, and wellness</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaLaptopCode className="text-indigo-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">Technology</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Latest gadget reviews, app recommendations, and tech guides</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaLeaf className="text-indigo-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">Environment</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Eco-friendly tips and environmental awareness</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10 bg-indigo-50 dark:bg-gray-700 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
              <FaCheck className="mr-2 text-indigo-500" />
              Why Choose Us?
            </h2>
            <ul className="space-y-2 ml-8">
              <li className="flex items-start">
                <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Content in Hindi & English for better understanding</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Practical, actionable advice</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Regularly updated articles</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">User-friendly interface</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">Free access to all content</span>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
              <FaUsers className="mr-2 text-indigo-500" />
              Our Team
            </h2>
            <p className="text-gray-700 dark:text-gray-300 ml-8">
              We are a team of passionate writers, educators, and tech enthusiasts dedicated to sharing knowledge and helping people learn and grow.
            </p>
          </section>

          <section className="bg-indigo-50 dark:bg-gray-700 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
              <FaEnvelope className="mr-2 text-indigo-500" />
              Contact Us
            </h2>
            <p className="text-gray-700 dark:text-gray-300 ml-8">
              Have questions or suggestions? Feel free to{' '}
              <Link to="/contact" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">
                contact us
              </Link>. We'd love to hear from you!
            </p>
          </section>

          {/* Footer */}
          <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              © 2025 Knowledge Hub. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6 mt-4">
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
          </footer>
        </div>
      </div>
    </div>
  );
};

export default About;