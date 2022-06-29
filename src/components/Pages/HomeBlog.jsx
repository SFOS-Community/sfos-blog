import { useSearchParams } from 'react-router-dom';
import Hero from '../Layouts/Hero';
import ListBlog from '../Layouts/ListBlog';
import SearchResultBlog from '../Layouts/SearchResultBlog';
import { CategoryContext, QueryContext } from '../../Context';

export default function HomeBlog({ setBlogs, setReading }) {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const q = searchParams.get('q');
  return (
    <CategoryContext.Provider value={category}>
      <Hero setReading={setReading} />
      {q ? (
        <QueryContext.Provider value={q}>
          <SearchResultBlog q={q} setBlogs={setBlogs} setReading={setReading} />
        </QueryContext.Provider>
      ) : (
        <ListBlog setBlogs={setBlogs} setReading={setReading} />
      )}
    </CategoryContext.Provider>
  );
}
