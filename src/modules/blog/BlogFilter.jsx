import { useState } from "react";

export default function BlogFilter({ categories, posts }) {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter posts dynamically based on active category
  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.data.category === activeCategory);

  return (
    <section className="py-20 max-md:pt-10 max-w-5xl mx-auto w-12/12">
      <h2 className="text-3xl lg:text-4xl 2xl:text-6xl lg:text-left text-center font-bold text-transparent capitalize bg-clip-text bg-gradient-to-b from-neutral-100 to-gray-500">
        All posts
      </h2>
      <p className="text-white-400 font-medium lg:text-left text-center pt-2 md:pt-4 text-balance">
        All posts are available to read, if you got any time, feel free to check them out.
      </p>

      {/* Category Tabs */}
      <div className="flex gap-4 justify-center mt-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 border ${
              activeCategory === category ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="pt-10 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((blog) => (
          <div key={blog.id} className="rounded-lg border bg-card text-card-foreground shadow-sm lg:mx-0 mx-5">
            <img src={blog.data.featimage} alt={blog.data.title} className="rounded-t-lg w-full h-[200px] object-cover" />
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-[18px] capitalize font-semibold leading-6 tracking-normal 4xl:pr-0 text-neutral-300">
                {blog.data.title}
              </h3>
            </div>
            <div className="flex items-center p-6 pt-0 justify-between">
              <div className="inline-flex max-md:flex-col md:items-center gap-x-2 text-white-400">
                <div className="inline-flex items-center gap-x-1.5">
                  <span className="text-sm font-medium">{blog.data.publishedAt}</span>
                </div>
              </div>
              <a href={`/blog/${blog.slug}`} className="text-blue-500 hover:underline">
                Read →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
