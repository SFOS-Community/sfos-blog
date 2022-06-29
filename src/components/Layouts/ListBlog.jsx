import { useContext, useEffect } from 'react';
import { BlogsContext, CategoryContext, ReadingContext } from '../../Context';
import Card from '../DataDisplay/Card';

export default function ListBlog({ setBlogs, setReading }) {
  const category = useContext(CategoryContext);
  const reading = useContext(ReadingContext);
  const blogs = useContext(BlogsContext);

  const getBlogs = async (limit, offset, category) => {
    const res = await fetch(
      `${
        import.meta.env.VITE_API_URL
      }/blogs?limit=${limit}&offset=${offset}&category=${category}`
    );
    const json = await res.json();
    return json;
  };

  useEffect(() => {
    const main = async () => {
      setBlogs(await getBlogs(5, 0, category));
    };
    !reading && main();
  }, [category, reading]);

  const handleLoadMoreBtnOnClick = async () => {
    setBlogs(blogs.concat(await getBlogs(5, blogs.length, category)));
  };

  return (
    <section>
      <div className="container">
        <div className="mb-10 flex flex-wrap justify-evenly gap-8">
          {blogs.map((blog, i) => (
            <Card.CardBlog {...blog} key={i} setReading={setReading} />
          ))}
        </div>
        <div>
          <button
            className="btn btn-outline mx-auto block"
            onClick={handleLoadMoreBtnOnClick}
          >
            Load more
          </button>
        </div>
      </div>
    </section>
  );
}
