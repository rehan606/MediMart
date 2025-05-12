

const ArticlesSection = () => {
    const articles = [
      {
        id: 1,
        image: "https://medicalupdateonline.com/wp-content/uploads/2021/08/AdobeStock_241144808-1000x563.jpg",
        date: "17 FEBRUARY, 2025",
        author: "Matthew Reyes",
        category: "Destinations",
        title: "Having overweight and depression can",
        link: "#",
      },
      {
        id: 2,
        image: "https://www.drgreg.co.za/wp-content/uploads/2021/08/blog-13.jpg",
        date: "17 FEBRUARY, 2025",
        author: "Rebecca Gilbert",
        category: "News",
        title: "The Connection Between Post-traumatic",
        link: "#",
      },
      {
        id: 3,
        image: "https://capitalpaincenter.com/wp-content/uploads/2025/04/Uncovering-spinal-cord-injury-and-its-impacts-on-daily-life-1.jpg",
        date: "17 FEBRUARY, 2025",
        author: "Bobby Stanley",
        category: "Destinations",
        title: "Adjusting to life with a spinal cord injury",
        link: "#",
      },
    ];
  
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-teal-500 font-semibold">Latest News</p>
          <h2 className="text-3xl font-bold text-gray-800 my-2">Our Insights & Articles</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <span className="bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {article.date}
                  </span>
                  <div className="mt-3 text-gray-500 text-sm flex items-center gap-2">
                    <span>👤 {article.author}</span>
                    <span>📍 {article.category}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-gray-800">{article.title}</h3>
                  <a href={article.link} className="mt-2 inline-block text-teal-500 font-semibold">
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ArticlesSection;
  