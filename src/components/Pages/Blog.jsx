import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import rehypeRaw from 'rehype-raw';

export default function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  const getBlogById = (id) => {
    fetch(`${import.meta.env.VITE_API_URL}/blogs/${id}`)
      .then((res) => res.json())
      .then(setBlog);
  };

  useEffect(function () {
    getBlogById(id);
    scroll({
      top: 0,
    });
  }, []);

  const handleBackBtn = () => {
    history.back();
  };

  const date = new Date(blog.createdAt).toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

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
            <div className="badge badge-outline badge-sm badge-primary font-medium uppercase">
              {blog.category}
            </div>
            <h1 className="mb-1 lg:mb-1">{blog.title}</h1>
            <p className="mt-1 font-light lg:mt-1">
              {date}. By {blog.author}
            </p>
            <figure>
              <img
                src={blog.photo}
                alt={blog.title}
                className="rounded-md object-cover object-top"
              />
            </figure>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {blog.content}
            </ReactMarkdown>
          </article>
        </div>
      </section>
    </>
  );
}
