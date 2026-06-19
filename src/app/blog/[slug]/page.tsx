import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { Calendar, Clock, ArrowLeft, Phone, Tag } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl font-black text-slate-900 mt-10 mb-4">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-xl font-bold text-slate-900 mt-8 mb-3">
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].replace("- ", ""));
        i++;
      }
      elements.push(
        <ul key={`list-${i}`} className="space-y-2 my-4 ml-4">
          {listItems.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
              <span className="text-brand-700 font-bold mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.trim() === "") {
      // skip blank lines
    } else if (line.trim()) {
      // Remove simple markdown bold
      const cleaned = line.replace(/\*\*(.*?)\*\*/g, "$1");
      elements.push(
        <p key={i} className="text-slate-600 leading-relaxed mb-4 text-sm">
          {cleaned}
        </p>
      );
    }
    i++;
  }

  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts().filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-700 transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>

        {/* Article */}
        <article className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white p-8 md:p-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 text-xs font-medium text-blue-200 bg-white/10 px-2.5 py-1 rounded-full"
                >
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-black mb-5 leading-tight">
              {post.title}
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-6">
              {post.description}
            </p>
            <div className="flex flex-wrap items-center gap-5 text-sm text-blue-200">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readingTime}
              </div>
              <div>By {post.author}</div>
            </div>
          </div>

          {/* Body */}
          <div className="p-8 md:p-12">
            {renderContent(post.content)}
          </div>

          {/* CTA */}
          <div className="bg-brand-50 border-t border-brand-100 p-8 md:px-12">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 text-lg mb-1">
                  Need C10 Insurance? We Can Help.
                </h3>
                <p className="text-slate-600 text-sm">
                  Get a custom quote from California&apos;s electrical contractor
                  insurance specialists in 15 minutes. No obligation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/quote"
                  className="px-5 py-2.5 bg-brand-700 text-white font-bold rounded-xl hover:bg-brand-800 transition-colors text-sm text-center"
                >
                  Get a Free Quote
                </Link>
                <a
                  href="tel:844-967-5247"
                  className="flex items-center justify-center gap-1.5 px-5 py-2.5 border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors text-sm"
                >
                  <Phone size={14} />
                  844-967-5247
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Related posts */}
        {allPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">
              More Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {allPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-200 transition-all p-5"
                >
                  <h3 className="font-bold text-slate-900 text-sm leading-snug mb-2 group-hover:text-brand-700 transition-colors">
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock size={11} />
                    {p.readingTime}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
