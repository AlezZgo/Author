import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles | Developer Portfolio",
  description: "A collection of articles about web development, programming, and technology.",
};

const ArticlesPage = () => {
  return (
    <div className="pt-24 pb-16 animate-fadeIn">
      <div className="container mx-auto max-w-6xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Articles</h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-lg text-center max-w-3xl mx-auto mb-12">
          I write about web development, programming best practices, and the latest technologies.
          Browse my articles below or use the categories to filter by topic.
        </p>
        
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full text-sm bg-neutral-200 dark:bg-neutral-800 hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label={`Filter by ${category} category`}
              tabIndex={0}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="flex items-center gap-1">
            <button
              className="w-10 h-10 flex items-center justify-center rounded-md bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="Previous page"
              tabIndex={0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 flex items-center justify-center rounded-md ${
                  page === 1
                    ? "bg-primary text-white"
                    : "bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-primary/10 hover:text-primary"
                } transition-colors`}
                aria-label={`Page ${page}`}
                tabIndex={0}
              >
                {page}
              </button>
            ))}
            <button
              className="w-10 h-10 flex items-center justify-center rounded-md bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="Next page"
              tabIndex={0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

interface Article {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
  slug: string;
  readTime: string;
}

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white text-xs px-2 py-1 rounded-md">
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center text-sm text-neutral-500 dark:text-neutral-400 mb-3">
          <span>{article.date}</span>
          <span>{article.readTime} read</span>
        </div>
        <h2 className="text-xl font-semibold mb-4">{article.title}</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">
          {article.excerpt}
        </p>
        <Link 
          href={`/articles/${article.slug}`} 
          className="text-primary font-medium hover:underline"
          aria-label={`Read article: ${article.title}`}
          tabIndex={0}
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

// Sample data
const categories = [
  "All", "React", "TypeScript", "JavaScript", "Next.js", "Web Development", "CSS", "Performance"
];

const articles = [
  {
    title: "Building Performant React Applications",
    date: "March 10, 2023",
    excerpt: "Learn how to optimize your React applications for better performance and user experience. We'll cover code splitting, memoization, and more.",
    image: "/images/articles/react-performance.jpg",
    category: "React",
    slug: "building-performant-react-applications",
    readTime: "6 min",
  },
  {
    title: "The Power of TypeScript in Modern Web Development",
    date: "February 22, 2023",
    excerpt: "Discover why TypeScript is becoming essential for building maintainable web applications. From type safety to better tooling.",
    image: "/images/articles/typescript.jpg",
    category: "TypeScript",
    slug: "power-of-typescript",
    readTime: "5 min",
  },
  {
    title: "Creating Accessible UI Components",
    date: "January 15, 2023",
    excerpt: "A comprehensive guide to building accessible UI components that work for everyone. Learn ARIA attributes, keyboard navigation, and more.",
    image: "/images/articles/accessibility.jpg",
    category: "Web Development",
    slug: "creating-accessible-ui-components",
    readTime: "8 min",
  },
  {
    title: "State Management in React: Context API vs. Redux",
    date: "December 05, 2022",
    excerpt: "Compare different state management approaches in React applications. Learn when to use Context API and when Redux might be a better choice.",
    image: "/images/articles/state-management.jpg",
    category: "React",
    slug: "state-management-react",
    readTime: "7 min",
  },
  {
    title: "Getting Started with Next.js 13",
    date: "November 20, 2022",
    excerpt: "An introduction to Next.js 13 and its new features, including the app directory, server components, and improved routing system.",
    image: "/images/articles/nextjs.jpg",
    category: "Next.js",
    slug: "getting-started-nextjs-13",
    readTime: "6 min",
  },
  {
    title: "CSS Grid: A Complete Guide",
    date: "October 12, 2022",
    excerpt: "Master CSS Grid layout with this comprehensive guide. Learn how to create complex layouts with minimal code.",
    image: "/images/articles/css-grid.jpg",
    category: "CSS",
    slug: "css-grid-complete-guide",
    readTime: "9 min",
  },
];

export default ArticlesPage; 