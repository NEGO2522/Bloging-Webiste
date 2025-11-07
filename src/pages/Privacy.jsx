import { FaLock, FaEnvelope, FaChartLine, FaShare, FaCookieBite, FaLink, FaGoogle, FaUserEdit, FaChild, FaBell, FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
            <FaLock className="mr-3 text-indigo-500" />
            Privacy Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">Last updated: October 25, 2025</p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                <FaEnvelope className="mr-2 text-indigo-500" />
                1. Information We Collect
              </h2>
              <p className="text-gray-700 dark:text-gray-300 ml-6">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-10 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Name and email address (when you sign up or contact us)</li>
                <li>Usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                <FaChartLine className="mr-2 text-indigo-500" />
                2. How We Use Your Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300 ml-6">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-10 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Provide, maintain, and improve our services</li>
                <li>Send you updates and newsletters (if subscribed)</li>
                <li>Respond to your comments and questions</li>
                <li>Analyze usage patterns to improve user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                <FaShare className="mr-2 text-indigo-500" />
                3. Information Sharing
              </h2>
              <p className="text-gray-700 dark:text-gray-300 ml-6">
                We do not sell, trade, or rent your personal information to third parties. We may share information with:
              </p>
              <ul className="list-disc pl-10 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Service providers who assist in operating our website</li>
                <li>Analytics providers (like Google Analytics)</li>
                <li>Advertising partners (like Google AdSense)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                <FaCookieBite className="mr-2 text-indigo-500" />
                4. Cookies
              </h2>
              <p className="text-gray-700 dark:text-gray-300 ml-6">
                We use cookies to enhance your experience. You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                <FaLink className="mr-2 text-indigo-500" />
                5. Third-Party Links
              </h2>
              <p className="text-gray-700 dark:text-gray-300 ml-6">
                Our website may contain links to third-party websites. We are not responsible for their privacy practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                <FaGoogle className="mr-2 text-indigo-500" />
                6. Google AdSense
              </h2>
              <p className="text-gray-700 dark:text-gray-300 ml-6">
                We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your visits to this site and other sites on the Internet.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                <FaUserEdit className="mr-2 text-indigo-500" />
                7. Your Rights
              </h2>
              <p className="text-gray-700 dark:text-gray-300 ml-6">
                You have the right to:
              </p>
              <ul className="list-disc pl-10 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Access your personal data</li>
                <li>Request correction or deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                <FaChild className="mr-2 text-indigo-500" />
                8. Children's Privacy
              </h2>
              <p className="text-gray-700 dark:text-gray-300 ml-6">
                Our service is not directed to children under 13. We do not knowingly collect information from children.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                <FaBell className="mr-2 text-indigo-500" />
                9. Changes to Privacy Policy
              </h2>
              <p className="text-gray-700 dark:text-gray-300 ml-6">
                We may update this policy from time to time. We will notify you of any changes by posting the new policy on this page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                <FaQuestionCircle className="mr-2 text-indigo-500" />
                10. Contact Us
              </h2>
              <p className="text-gray-700 dark:text-gray-300 ml-6">
                If you have questions about this Privacy Policy, please{' '}
                <Link to="/contact" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                  contact us
                </Link>.
              </p>
            </section>
          </div>

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

export default Privacy;