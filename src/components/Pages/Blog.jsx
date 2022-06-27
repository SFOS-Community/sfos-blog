import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import DB from '../../metadata.db.json';
import Badge from '../DataDisplay/Badge';

export default function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [author, setAuthor] = useState({});
  const [md, setMd] = useState('');

  const getBlogAndSetAuthor = (id) => {
    const res = DB.blogs.filter((blog) => blog.id == id)[0];
    const fetchedBlog = res;
    setMd(res.body);
    setAuthor({ name: res.author });
    return fetchedBlog;
  };

  useEffect(function () {
    setBlog(getBlogAndSetAuthor(id));
    scroll({
      top: 0,
    });
  }, []);

  const handleBackBtn = () => {
    history.back();
  };

  return (
    <>
      <section id="blog">
        <div className="container flex flex-col items-center gap-4">
          <button
            className="btn btn-outline btn-xs gap-2 self-start"
            onClick={handleBackBtn}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="20"
              className="fill-current"
            >
              <path d="M10 16 4 10 10 4 11.062 5.062 6.875 9.25H16V10.75H6.875L11.062 14.938Z" />
            </svg>
            back
          </button>
          <article className="prose max-w-[65ch] prose-img:mx-auto prose-img:rounded-md lg:prose-lg">
            <Badge children={blog.category} size="md" />
            <h1 className="mb-1 lg:mb-1">{blog.title}</h1>
            <p className="mt-1 font-light lg:mt-1">
              {blog.createdAt}. By {author.name}
            </p>
            <figure>
              <img
                src={blog.image}
                alt={blog.title}
                className="rounded-md object-cover object-top"
              />
            </figure>
            <ReactMarkdown>{md}</ReactMarkdown>
          </article>
        </div>
      </section>
    </>
  );
}
