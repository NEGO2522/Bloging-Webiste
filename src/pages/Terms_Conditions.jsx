import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">📜 Terms & Conditions</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">Last updated: October 25, 2025</p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                <FaArrowRight className="mr-2 text-indigo-500" />
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 dark:text-gray-300 ml-6">
                By accessing and using Knowledge Hub, you accept and agree to be bound by these Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                <FaArrowRight className="mr-2 text-indigo-500" />
                2. Use of Service
              </h2>
              <ul className="list-disc pl-8 space-y-2 text-gray-700 dark:text-gray-300">
                <li>You agree to use our service only for lawful purposes and in accordance with these Terms.</li>
                <li>You must not use our service in any way that violates any applicable laws</li>
                <li>You must not attempt to gain unauthorized access to our systems</li>
                <li>You must not transmit any harmful code or viruses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                <FaArrowRight className="mr-2 text-indigo-500" />
                3. Intellectual Property
              </h2>
              <p className="text-gray-700 dark:text-gray-300 ml-6">
                All content on this website, including text, graphics, logos, and images, is the property of Knowledge Hub and is protected by copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                <FaArrowRight className="mr-2 text-indigo-500" />
                4. User Content
              </h2>
              <p className="text-gray-700 dark:text-gray-300 ml-6">
                If you submit comments or other content, you grant us a non-exclusive, royalty-free license to use, reproduce, and display such content.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                <FaArrowRight className="mr-2 text-indigo-500" />
                5. Disclaimer of Warranties
              </h2>
              <p className="text-gray-700 dark:text-gray-300 ml-6 mb-3">
                Our service is provided "as is" without warranties of any kind. We do not guarantee that:
              </p>
              <ul className="list-disc pl-8 space-y-2 text-gray-700 dark:text-gray-300">
                <li>The service will be uninterrupted or error-free</li>
                <li>The information provided is accurate or complete</li>
                <li>Any errors will be corrected</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                <FaArrowRight className="mr-2 text-indigo-500" />
                6. Limitation of Liability
              </h2>
              <p className="text-gray-700 dark:text-gray-300 ml-6">
                Knowledge Hub shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                <FaArrowRight className="mr-2 text-indigo-500" />
                7. External Links
              </h2>
              <p className="text-gray-700 dark:text-gray-300 ml-6">
                Our website may contain links to third-party websites. We are not responsible for the content or practices of these external sites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                <FaArrowRight className="mr-2 text-indigo-500" />
                8. Advertising
              </h2>
              <p className="text-gray-700 dark:text-gray-300 ml-6">
                We use third-party advertising companies (like Google AdSense) to serve ads. These companies may use information about your visits to provide relevant advertisements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                <FaArrowRight className="mr-2 text-indigo-500" />
                9. Modifications to Service
              </h2>
              <p className="text-gray-700 dark:text-gray-300 ml-6">
                We reserve the right to modify or discontinue the service at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                <FaArrowRight className="mr-2 text-indigo-500" />
                10. Changes to Terms
              </h2>
              <p className="text-gray-700 dark:text-gray-300 ml-6">
                We may revise these Terms at any time. Continued use of the service after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                <FaArrowRight className="mr-2 text-indigo-500" />
                11. Governing Law
              </h2>
              <p className="text-gray-700 dark:text-gray-300 ml-6">
                These Terms shall be governed by and construed in accordance with applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                <FaArrowRight className="mr-2 text-indigo-500" />
                12. Contact Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300 ml-6">
                For questions about these Terms, please{' '}
                <a 
                  href="/contact" 
                  className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center"
                >
                  contact us <FaExternalLinkAlt className="ml-1 text-xs" />
                </a>
              </p>
            </section>
          </div>
          <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-4">
              © 2025 Knowledge Hub. All rights reserved.
            </p>
            <div className="flex justify-center space-x-4">
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

export default TermsConditions;
