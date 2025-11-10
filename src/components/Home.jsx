import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Home = ({ activeCategory = 'All', setActiveCategory }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Get all unique categories from cards
  const allCategories = ['All', ...new Set([
    'All',
    'Programming',
    'Web Development',
    'Productivity',
    'Health & Fitness'
  ])];

  const cards = [
    {
      id: 1,
      emoji: '🐍',
      title: 'Easy Ways to Learn Python',
      category: 'Programming',
      description: 'Learn Python programming the easy way. Step-by-step guide for beginners with basic concepts and practical examples.'
    },
    {
      id: 2,
      emoji: '🌐',
      title: 'How to Build a Website',
      category: 'Web Development',
      description: 'Learn to build your own website. Complete guide to HTML, CSS, and basic web development with step-by-step instructions.'
    },
    {
      id: 3,
      emoji: '📝',
      title: 'Understanding HTML Tags',
      category: 'Web Development',
      description: 'Complete guide to HTML tags. Learn common tags, their usage, and basic web development concepts with examples.'
    },
    {
      id: 4,
      emoji: '🌅',
      title: 'Benefits of Waking Up Early',
      category: 'Productivity',
      description: 'Amazing benefits of an early morning routine. Proven tips to improve health, productivity, and mental wellness.'
    },
    {
      id: 5,
      emoji: '🥗',
      title: 'What to Include in Your Diet',
      category: 'Health & Fitness',
      description: 'Essential foods for a healthy diet. Information about balanced nutrition, vitamins, and minerals with simple practical tips.'
    },
    {
      id: 6,
      emoji: '🧘',
      title: 'Easy Yoga Poses for Beginners',
      category: 'Health & Fitness',
      description: 'Simple yoga poses for beginners. Easy asanas for daily practice with their benefits and proper techniques.'
    },
    {
      id: 7,
      emoji: '🎬',
      title: 'Best Free Video Editing Apps',
      category: 'Productivity',
      description: 'Top free video editing applications. Features, pros & cons, and best options for beginners on both mobile and desktop.'
    },
    {
      id: 8,
      emoji: '💻',
      title: 'Laptop Buying Guide',
      category: 'Productivity',
      description: 'Complete laptop buying guide. Learn about processor, RAM, storage, and other important factors. Best value for money tips.'
    },
    {
      id: 9,
      emoji: '🎯',
      title: '5 Golden Rules of Success',
      category: 'Productivity',
      description: 'Proven principles for success. Golden rules of goal setting, discipline, and consistent effort to achieve your dreams.'
    }
  ];

  const filteredCards = cards.filter(card => {
    const matchesSearch = card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        card.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || card.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Tabs - Hidden on mobile, visible on md and up */}
      <div className="hidden md:flex flex-wrap justify-center gap-2 mb-6 px-4">
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Search Bar - Hidden on mobile, visible on md and up */}
      <div className="hidden md:flex justify-center mb-12">
        <div className="relative w-full max-w-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
          <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center px-4">
              <FiSearch className="text-white/70 text-xl" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full bg-transparent border-0 focus:ring-0 text-white placeholder-white/70 py-4 px-4 outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="text-white/50 hover:text-white transition-colors"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCards.map((card) => (
          <div 
            key={card.id} 
            className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-6 h-full flex flex-col">
              <div className="text-5xl mb-5 transform group-hover:scale-110 transition-transform duration-500">
                {card.emoji}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
                {card.title}
              </h3>
              <p className="text-gray-300/90 mb-6 leading-relaxed flex-grow">{card.description}</p>
              <Link 
                to={`/article/${card.id}`}
                className="mt-4 px-5 py-2.5 rounded-full border-2 border-blue-400/30 text-blue-300 hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-white transition-all duration-300 group relative overflow-hidden inline-flex items-center"
              >
                <span className="relative z-10 flex items-center">
                  Read More
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </div>
          </div>
        ))}
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
  );
};

export default Home;