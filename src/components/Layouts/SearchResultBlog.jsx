import { useContext, useEffect } from 'react';
import { BlogsContext, CategoryContext, QueryContext } from '../../Context';
import Card from '../DataDisplay/Card';

export default function SearchResultBlog({ setBlogs, setReading }) {
  const q = useContext(QueryContext);
  const category = useContext(CategoryContext);
  const blogs = useContext(BlogsContext);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_URL}/blogs/?title=${q}&category=${category}`
    )
      .then((res) => res.json())
      .then(setBlogs);
  }, [q]);

  return (
    <section>
      <div className="container">
        <h1 className="text-xl">Your search results:</h1>
        <div className="my-10 flex flex-wrap justify-evenly gap-8">
          {blogs.map((blog, i) => (
            <Card.CardBlog {...blog} key={i} setReading={setReading} />
          ))}
        </div>
      </div>
    </section>
  );
}
