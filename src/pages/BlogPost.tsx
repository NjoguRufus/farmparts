import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Why Ordering Farm Tractor Parts Is Beneficial",
    date: "October 19, 2017",
    author: "parts",
    category: "Uncategorized",
    tags: ["parts"],
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

export const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === parseInt(id || '0'));

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Blog post not found</p>
          <Link
            to="/blog"
            className="px-6 py-3 bg-[#D4A017] text-white rounded-lg hover:bg-[#B8880F] transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const paragraphs = post.content.split('\n').filter(p => p.trim());

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#D4A017] transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Blog</span>
        </Link>

        {/* Article */}
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 md:p-10">
            {/* Category Badge */}
            <div className="flex items-center gap-2 mb-4">
              <Tag size={16} className="text-[#D4A017]" />
              <span className="text-sm font-semibold text-[#D4A017] uppercase">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-[#0A1A3F] mb-6">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar size={18} className="text-[#D4A017]" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <User size={18} className="text-[#D4A017]" />
                <span>{post.author}</span>
              </div>
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Content */}
            <div className="prose prose-lg max-w-none mb-8">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-4">
                  {paragraph.trim() && paragraph.startsWith('•') ? (
                    <span className="block pl-4">{paragraph}</span>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>

            {/* Share Buttons */}
            <div className="border-t border-gray-200 pt-6 mt-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-3">Share this post:</p>
                  <div className="flex gap-3">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      title="Share on Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1a8cd8] transition-colors"
                      title="Share on Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#0077B5] text-white rounded-lg hover:bg-[#006399] transition-colors"
                      title="Share on LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts / Author Info */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <div className="border-l-4 border-[#D4A017] pl-6">
            <h3 className="text-xl font-bold text-[#0A1A3F] mb-2">ABOUT THE AUTHOR</h3>
            <p className="text-gray-700 mb-4">{post.author}</p>
            <div className="mt-6">
              <p className="text-sm text-gray-600 mb-3">Follow us:</p>
              <a
                href="https://x.com/farmpartsltd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#D4A017] hover:text-[#B8880F] transition-colors font-semibold"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                @farmpartsltd
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



