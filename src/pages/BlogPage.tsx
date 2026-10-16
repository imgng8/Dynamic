import React, { useState } from 'react';
import { Calendar, Clock, BookOpen, ArrowRight, X, Compass, CheckCircle } from 'lucide-react';
import { PageId, BlogPost } from '../types';
import { BLOG_POSTS, BUSINESS_INFO } from '../data/travelData';

interface BlogPageProps {
  setCurrentPage: (page: PageId) => void;
  openInquiryModal: (serviceName?: string, dest?: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ openInquiryModal }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
          Travel Guides & Insights
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
          Dynamic Travel and Tours Blog
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Practical tips, visa regulations, road route advice, and spiritual preparation checklists published by our travel consultants in Gul Bahar, Peshawar.
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div className="p-6">
              {/* Clean Unboxed Metadata without pills */}
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                <span className="font-semibold text-sky-600">{post.category}</span>
                <span aria-hidden="true">&middot;</span>
                <span>{post.date}</span>
                <span aria-hidden="true">&middot;</span>
                <span>{post.readTime}</span>
              </div>

              <h2 className="font-display font-bold text-lg text-slate-900 mb-3 leading-snug">
                {post.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {post.summary}
              </p>
            </div>

            <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setSelectedPost(post)}
                className="text-xs font-semibold text-slate-900 hover:text-sky-600 transition-colors flex items-center gap-1.5"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => openInquiryModal(post.category)}
                className="text-[11px] text-sky-600 hover:underline"
              >
                Inquire on Topic
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Full Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
            <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2 text-xs text-sky-300">
                <span>{selectedPost.category}</span>
                <span aria-hidden="true">&middot;</span>
                <span>{selectedPost.readTime}</span>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
              <h2 className="font-display font-bold text-2xl text-slate-900 leading-tight">
                {selectedPost.title}
              </h2>
              <div className="text-xs text-slate-500">
                Published by Dynamic Travel and Tours &bull; {selectedPost.date}
              </div>

              <div className="border-t border-slate-100 pt-4 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedPost.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-500">
                  Questions regarding this travel guide?
                </span>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      setSelectedPost(null);
                      openInquiryModal(selectedPost.category, selectedPost.title);
                    }}
                    className="w-full sm:w-auto px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg text-xs transition-colors"
                  >
                    Consult on this Topic
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Travel Advisory Strip */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-display font-bold text-base text-slate-900">
            Need Guidance on Visas or Route Conditions?
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Weather and flight schedules can change rapidly. Speak directly with our Peshawar travel desk before finalizing tickets.
          </p>
        </div>
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg text-xs transition-colors whitespace-nowrap shrink-0"
        >
          Message on WhatsApp (+92 318 9011775)
        </a>
      </div>
    </div>
  );
};
