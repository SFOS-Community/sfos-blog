import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CategoryContext } from '../../Context';
import categories from '../../config/categories';
import { Link } from 'react-router-dom';
import { useDebouncedValue, useInputState } from '@mantine/hooks';

export default function Hero({ setReading }) {
  const category = useContext(CategoryContext);
  const navigate = useNavigate();
  const [query, setQuery] = useInputState('');
  const [debouncedQuery] = useDebouncedValue(query, 200);

  useEffect(() => {
    navigate(`?q=${debouncedQuery}${category ? `&category=${category}` : ''}`);
  }, [debouncedQuery]);

  return (
    <section id="hero">
      <div className="container mb-10">
        <div className="prose mx-auto mb-10 text-center  prose-h1:text-2xl prose-h1:uppercase prose-p:uppercase md:prose-h1:text-3xl lg:prose-h1:text-4xl">
          <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Welcome to SFOS Blog!
            <br />
            our think is here
          </h1>
          <p>we created to pour out our hearts to curious people</p>
        </div>
        <div className="mb-8 flex justify-center">
          <input
            type="search"
            placeholder="Search here"
            onChange={setQuery}
            className="input input-bordered input-primary w-full max-w-xl"
          />
        </div>
        <div>
          <div className="tabs tabs-boxed mx-auto w-fit gap-4 [&>a]:tab [&>a]:uppercase [&>a]:outline-none [&>a]:transition-all [&>a]:duration-300">
            {categories.map((value) => (
              <Link
                onClick={() => setReading(false)}
                to={value === 'all' ? '' : '/?category='.concat(value)}
                key={value}
                className={
                  (category === null && value === 'all') || category === value
                    ? 'tab-active'
                    : undefined
                }
              >
                {value}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
