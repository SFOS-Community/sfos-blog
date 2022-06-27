import { useSearchParams } from 'react-router-dom';
import Hero from '../Layouts/Hero';
import ListBlog from '../Layouts/ListBlog';
import SearchResultBlog from '../Layouts/SearchResultBlog';

export default function HomeBlog() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const q = searchParams.get('q');
  return (
    <>
      <Hero choosenCategory={category} />
      {q ? (
        <SearchResultBlog q={q} category={category} />
      ) : (
        <ListBlog category={category} />
      )}
    </>
  );
}
