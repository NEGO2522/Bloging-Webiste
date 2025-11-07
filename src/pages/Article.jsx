import { FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin, FaTelegram, FaLink, FaArrowLeft, FaImage } from 'react-icons/fa';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { ref, get, onValue } from 'firebase/database';
import { database } from '../firebase/firebase';

// Helper function to fetch article data
const useArticle = (articleId) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!articleId) return;

    setLoading(true);
    const articleRef = ref(database, `articles/article${articleId}`);
    
    const onData = (snapshot) => {
      try {
        if (snapshot.exists()) {
          setArticle({
            id: articleId,
            ...snapshot.val()
          });
          setError('');
        } else {
          setArticle(null);
          setError('Article not found');
        }
      } catch (err) {
        console.error('Error processing article:', err);
        setError('Error loading article');
      } finally {
        setLoading(false);
      }
    };

    const onError = (error) => {
      console.error('Error fetching article:', error);
      setError('Failed to load article');
      setLoading(false);
    };

    const unsubscribe = onValue(articleRef, onData, onError);
    return () => unsubscribe();
  }, [articleId]);

  return { article, loading, error };
};

// Helper function to fetch related articles
const useRelatedArticles = (articleId) => {
  const [relatedArticles, setRelatedArticles] = useState([]);

  useEffect(() => {
    if (!articleId) return;

    const articlesRef = ref(database, 'articles');
    
    const onData = (snapshot) => {
      try {
        if (snapshot.exists()) {
          const articlesData = snapshot.val();
          const articlesList = Object.entries(articlesData).map(([key, value]) => ({
            id: key.replace('article', ''),
            ...value
          }));
          
          const filteredArticles = articlesList
            .filter(article => article.id !== articleId)
            .slice(0, 3)
            .map(article => ({
              id: article.id,
              title: article.title || 'No Title',
              emoji: '📄',
              url: `/article/${article.id}`
            }));
            
          setRelatedArticles(filteredArticles);
        }
      } catch (error) {
        console.error('Error processing related articles:', error);
      }
    };

    const onError = (error) => {
      console.error('Error fetching related articles:', error);
    };

    const unsubscribe = onValue(articlesRef, onData, onError);
    return () => unsubscribe();
  }, [articleId]);

  return relatedArticles;
};

const Article = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const { article, loading, error } = useArticle(articleId);
  const relatedArticles = useRelatedArticles(articleId);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Error state
  if (error || !article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          {error || 'Article not found'}
        </h1>
        <button 
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors flex items-center"
        >
          <FaArrowLeft className="mr-2" />
          Back to Home
        </button>
      </div>
    );
  }

  // Debug logging
  console.log('Article data:', article);
  
  // Ensure article.content is properly initialized
  if (!article.content) {
    console.warn('No content found in article data');
    article.content = 'No content available';
  }
  
  // Convert content to string if it's an object
  if (typeof article.content === 'object' && article.content !== null) {
    console.log('Content is an object, stringifying...');
    // If content has a 'content' property, use that, otherwise stringify the whole object
    article.content = article.content.content || JSON.stringify(article.content);
  } else if (typeof article.content !== 'string') {
    article.content = String(article.content || '');
  }
  const handleShare = (platform) => {
    const url = window.location.href;
    const title = document.title;
    
    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'telegram':
        window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
        break;
      default:
        break;
    }
  };

  // Share functionality

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button 
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
      >
        <FaArrowLeft className="mr-2" /> Back
      </button>
      
      {/* Article Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {article.title || '🌅 Benefits of Waking Up Early'}
        </h1>
        <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
          <span>By {article.author || 'Admin'}</span>
          {article.date && (
            <>
              <span className="mx-2">•</span>
              <span>{article.date}</span>
            </>
          )}
          {article.readTime && (
            <>
              <span className="mx-2">•</span>
              <span>{article.readTime}</span>
            </>
          )}
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto">
        <article className="prose dark:prose-invert prose-lg">
          
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
            An early morning routine can transform your life. Waking up early leads to amazing improvements in health, productivity, and mental wellness.
          </p>
          
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">1. Better Mental Health</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The peaceful morning time is perfect for meditation and planning. It reduces stress and provides a positive mindset.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                <li>Better focus in a peaceful environment</li>
                <li>Morning sunlight provides vitamin D</li>
                <li>Reduces depression and anxiety</li>
                <li>Time to plan your day</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">2. Improved Productivity</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Morning time is the most productive. Your brain is fresh and there are fewer distractions.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                <li>Complete important tasks first</li>
                <li>Get uninterrupted work time</li>
                <li>Stay ahead during the day</li>
                <li>Helps achieve goals</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">3. Better Physical Health</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Waking up early gives you time for exercise. A regular morning routine also improves your sleep cycle.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">4. Healthy Breakfast</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Waking up early allows you to prepare and eat a proper breakfast. This boosts energy levels and metabolism.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">5. More Personal Time</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Use the extra morning time for your hobbies, reading, or self-care.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="font-medium text-blue-800 dark:text-blue-200 text-lg mb-2">How to Start:</p>
                <p className="text-blue-700 dark:text-blue-300">
                  Gradually start waking up 15-20 minutes earlier. Keep your alarm clock away from bed and reduce screen time before sleeping.
                </p>
              </div>
            </section>
          </div>
        </article>
      </div>
      
      {/* Share Buttons */}
      <div className="mt-12 mb-16">
        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4 flex items-center">
          <span className="mr-2">📢</span> Share This Article
        </h3>
        <div className="flex flex-wrap gap-3">
          <button 
            onClick={() => handleShare('facebook')}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            aria-label="Share on Facebook"
          >
            <FaFacebook className="text-xl" />
          </button>
          <button 
            onClick={() => handleShare('twitter')}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition-colors"
            aria-label="Share on Twitter"
          >
            <FaTwitter className="text-xl" />
          </button>
          <button 
            onClick={() => handleShare('whatsapp')}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
            aria-label="Share on WhatsApp"
          >
            <FaWhatsapp className="text-xl" />
          </button>
          <button 
            onClick={() => handleShare('linkedin')}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors"
            aria-label="Share on LinkedIn"
          >
            <FaLinkedin className="text-xl" />
          </button>
          <button 
            onClick={() => handleShare('telegram')}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            aria-label="Share on Telegram"
          >
            <FaTelegram className="text-xl" />
          </button>
          <button 
            onClick={() => handleShare('copy')}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
            aria-label="Copy link"
          >
            <FaLink className="text-xl" />
          </button>
        </div>
      </div>

      {/* Related Articles */}
      <div className="mt-12 mb-16">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
          <span className="mr-2">📚</span> You May Also Like
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map((article) => (
            <div key={article.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-5">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">{article.title}</h4>
                <Link 
                  to={article.url}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  Read Article →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AdSense Ad */}
      <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg text-center my-12">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Advertisement</p>
        <div className="bg-white dark:bg-gray-600 p-4 rounded">
          <p className="text-sm text-gray-500 dark:text-gray-300">Google AdSense Ad Placeholder</p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
            Replace data-ad-client and data-ad-slot with your actual AdSense IDs
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Ad loads only after clicking "Read More" - AdSense policy compliant
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 Knowledge Hub. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
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
  );
};

export default Article;