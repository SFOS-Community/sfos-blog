import { Link } from 'react-router-dom';
import Badge from './Badge';

function CardBlog({ title, author, createdAt, summary, image, category, id }) {
  return (
    <div className="group flex h-auto w-full flex-col-reverse justify-between overflow-hidden rounded-xl bg-base-300 shadow-md  hover:rounded-3xl hover:shadow-xl md:h-72 md:flex-row md:space-x-6  lg:h-60">
      <div className="flex w-full flex-col justify-between  gap-y-2 p-2">
        <div>
          <Badge children={category} size="xs" />
          <h3 className="my-1 text-2xl font-bold sm:text-3xl md:my-2">
            {title}
          </h3>
          <p className="mb-4 font-light md:hidden">
            {createdAt}. By {author}
          </p>
          <p className="mb-3">{summary}</p>
        </div>
        <div className="flex w-full justify-between">
          <Link to={'blog/' + id.toString()} className="btn btn-info btn-sm">
            Read more
          </Link>
          <span className="hidden font-light md:block">
            {createdAt}. By {author}
          </span>
        </div>
      </div>
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="h-60 w-full rounded-t-lg object-cover object-top transition duration-500  md:h-full  md:max-w-xs md:rounded-t-none md:rounded-r-lg lg:max-w-sm"
      />
    </div>
  );
}

export default { CardBlog };
