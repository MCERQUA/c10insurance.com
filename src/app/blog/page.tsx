import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Clock, Calendar, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "C10 Insurance Blog | California Electrical Contractor Resources",
  description:
    "Expert guides on C10 insurance requirements, general liability, workers comp, and contractor bonds for California electrical contractors.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen pt-28 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-14 mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-black mb-4">
            C10 Insurance Resource Center
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Expert guides on insurance requirements, coverage options, and
            compliance for California C10 licensed electrical contractors.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {posts.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            <p className="text-lg">Blog posts coming soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 text-xs font-medium text-brand-700 bg-brand-50 px-2.5 py-1 rounded-full"
                      >
                        <Tag size={10} />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readingTime}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 bg-brand-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-black mb-3">
            Ready to Get Your C10 Insurance?
          </h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Put our expertise to work for your electrical business. Get a custom
            quote in 15 minutes from California&apos;s C10 insurance specialists.
          </p>
          <Link
            href="/quote"
            className="inline-block px-8 py-3 bg-accent-500 text-white font-bold rounded-xl hover:bg-accent-600 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
