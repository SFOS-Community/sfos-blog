import { useEffect, useState } from 'react';
import Card from '../DataDisplay/Card';
import DB from '../../metadata.db.json';

export default function ListBlog({ category }) {
  const [blogs, setBlogs] = useState([]);
  const getBlogsByCategory = (category) => {
    return DB.blogs.filter((blog) => blog.category === category);
  };

  useEffect(() => {
    setBlogs((category ? getBlogsByCategory(category) : DB.blogs).slice(0, 5));
  }, [category]);

  const handleAddMoreBtnOnClick = () => {
    setBlogs(
      blogs.concat(
        (category ? getBlogsByCategory(category) : DB.blogs).slice(
          blogs.length,
          blogs.length + 5
        )
      )
    );
  };

  return (
    <section>
      <div className="container">
        <div className="mb-10 flex flex-wrap justify-evenly gap-8">
          {blogs.map((blog, i) => (
            <Card.CardBlog {...blog} key={i} />
          ))}
        </div>
        <div>
          <button
            className="btn btn-outline mx-auto block"
            onClick={handleAddMoreBtnOnClick}
          >
            Add more
          </button>
        </div>
      </div>
    </section>
  );
}
