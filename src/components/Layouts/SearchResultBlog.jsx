import { useEffect, useState } from 'react';
import Card from '../DataDisplay/Card';
import DB from '../../metadata.db.json';

export default function SearchResultBlog({ q, category }) {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    console.log(category);
    setBlogs(
      DB.blogs
        .filter((blog) =>
          category
            ? blog.category === category && blog.title.includes(q)
            : blog.title.includes(q)
        )
        .slice(0, 10)
    );
  }, [q]);
  return (
    <section>
      <div className="container">
        <h1 className="text-xl">Your search results:</h1>
        <div className="my-10 flex flex-wrap justify-evenly gap-8">
          {blogs.map((blog, i) => (
            <Card.CardBlog {...blog} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
