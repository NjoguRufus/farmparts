import React, { useState } from 'react';
import { Calendar, User, Tag, ArrowRight, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  content: string;
  excerpt: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Why Ordering Farm Tractor Parts Is Beneficial",
    date: "October 19, 2017",
    author: "parts",
    category: "Uncategorized",
    tags: ["parts"],
    excerpt: "With five decades of being in business of supplying farm tractor parts behind them, companies have risen to becoming one of the most trustworthy and reliable brands amongst the customers...",
    content: `With five decades of being in business of supplying farm tractor parts behind them, companies have risen to becoming one of the most trustworthy and reliable brands amongst the customers in the US and other countries. Considered to be one of the major farm tractor manufacturing companies, Farm Parts Ltd, takes pride about having made a name for them, when it comes to supplying top quality and durable tractor components. The customers too, have developed a blind faith, as far as buying branded farm machinery spare parts are concerned.

Over a period of time, many brands have continued to widen their knowledge base, making them amongst the best manufacturing and engineering units in production of farm tractor components. And now they aim at becoming the lead player, as far as manufacturing of ranch and farm products are concerned, which also includes providing engineering and innovative solutions, quality goods and services which are of outstanding value. The brand is also committed while working towards supporting and developing its customers, suppliers as well as its employees.

When it comes to managing ranches and farms, genuine tractor spare parts prove to be effective tools. Irrespective of the crops being cultivated by you, farm tractors make the job seem easier and simpler. There is more than one way in which a farm tractor can help in assisting you in crop cultivation. But, without as much as, discussing the farm tractor benefits in detail, one thing is for sure- their presence on the ranch or farm is very much essential for your crop yields to succeed.

Similar to other machines, farm tractors too, need proper and regular care and maintenance, for them to run smoothly and lengthen their life span. Frequent wear and tear of the farm tractor components will require you to replace or repair them from time to time. It is here that, the brand comes to your rescue, in providing you with the required parts for your farm tractor.

However, renewing or replacing farm tractor parts can come as a daunting task for you, because they are difficult to find in the first place. Also, the farm tractor parts are high priced. Most of the times it is seen that, to avoid burdening their pockets by purchasing high priced tractor parts, people opt for spare parts which are of sub-standard quality. These parts, when fitted, can do more harm than good to your farm tractors. Therefore, presence of brand companies in the market always comes as an advantage to farm and ranch owners, who can easily rely on them when in need for replacing tractor spare parts arises.`
  },
  {
    id: 2,
    title: "TOYOTA GENUINE SPARE PARTS",
    date: "October 6, 2017",
    author: "parts",
    category: "Blog",
    tags: ["parts"],
    excerpt: "Toyota cars are at the heart of our daily errands- both industrial and domestic. This is why Toyota Genuine Parts ensure quality and promise the long-lasting performance of your car.",
    content: `Toyota cars are at the heart of our daily errands- both industrial and domestic. This is why Toyota Genuine Parts ensure quality and promise the long-lasting performance of your car.

When making the smallest vehicle repairs, it can be tempting to use cheaper spare parts to save money. But in the long term these decisions can turn out to be expensive. Minor repairs, can all of a sudden lead to major repairs due to cheaper parts failing and causing extra, preventable damage. Not using genuine spare parts can also reduce the resale value of commercial vehicles.

Cheaper spare parts can fail since they may not match the exact specifications of the vehicle, and may be made with low quality material. Genuine Toyota spare parts are developed and tested first, to ensure the highest quality and specifications.

Genuine Toyota parts are:

• Designed specifically for your vehicle
• Subject to Toyota's thorough standards in terms of quality and reliability
• Accompanied by Toyota's full warranty (minimum 1 year)
• Only fitted by specially trained technicians.

For safety and great performance, always choose genuine parts.`
  }
];

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A1A3F] mb-4">Our Blog</h1>
          <p className="text-gray-600 text-lg">
            Stay updated with the latest news, tips, and insights about farm machinery and automotive parts
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#D4A017] to-[#B8880F] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 md:p-8">
                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <Tag size={16} className="text-[#D4A017]" />
                  <span className="text-sm font-semibold text-[#D4A017] uppercase">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A1A3F] mb-4 hover:text-[#D4A017] transition-colors">
                  {post.title}
                </h2>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-[#D4A017]" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-[#D4A017]" />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Excerpt */}
                <p className="text-gray-700 leading-relaxed mb-6 line-clamp-4">
                  {post.excerpt}
                </p>

                {/* Content Preview */}
                <div className="prose prose-sm max-w-none mb-6 text-gray-700">
                  <div className="line-clamp-6">
                    {post.content.split('\n').slice(0, 3).map((paragraph, index) => (
                      paragraph.trim() && (
                        <p key={index} className="mb-3">{paragraph}</p>
                      )
                    ))}
                  </div>
                </div>

                {/* Read More Button */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <Link
                    to={`/blog/${post.id}`}
                    className="flex items-center gap-2 text-[#D4A017] font-semibold hover:text-[#B8880F] transition-colors group"
                  >
                    Read More
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Share"
                  >
                    <Share2 size={18} className="text-gray-600" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Social Media Link */}
        <div className="text-center bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 mb-3">Follow us for more updates</p>
          <a
            href="https://x.com/farmpartsltd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A1A3F] text-white rounded-lg hover:bg-[#1A2F5F] transition-colors font-semibold"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Follow @farmpartsltd
          </a>
        </div>
      </div>
    </div>
  );
};


