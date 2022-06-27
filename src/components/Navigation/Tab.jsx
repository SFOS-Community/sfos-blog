import { NavLink } from 'react-router-dom';

export function TabCategories({ activeCategory }) {
  const categories = [
    'all',
    'gaming',
    'technology',
    'anime',
    'horror',
    'school',
    'world',
  ];
  return (
    <div className="tabs tabs-boxed mx-auto w-fit gap-4 [&>a]:tab [&>a]:uppercase [&>a]:outline-none [&>a]:transition-all [&>a]:duration-300">
      {categories.map((category) => (
        <NavLink
          to={
            category === 'all'
              ? ''
              : '/?category='.concat(category.toLowerCase())
          }
          key={category.toLocaleLowerCase()}
          className={({ isActive }) =>
            (isActive && activeCategory === category) ||
            (category === 'all' && !activeCategory)
              ? 'tab-active'
              : undefined
          }
        >
          {category}
        </NavLink>
      ))}
    </div>
  );
}
