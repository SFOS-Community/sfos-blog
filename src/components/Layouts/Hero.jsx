import { useNavigate } from 'react-router-dom';
import { TabCategories } from '../Navigation/Tab';

export default function Hero({ choosenCategory }) {
  const navigate = useNavigate();

  const handleSearchInput = (ev) => {
    navigate(
      `/?q=${ev.target.value}${
        choosenCategory ? `&category=${choosenCategory}` : ''
      }`
    );
  };

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
            onChange={handleSearchInput}
            className="input input-bordered input-primary w-full max-w-xl"
          />
        </div>
        <div>
          <TabCategories activeCategory={choosenCategory} />
        </div>
      </div>
    </section>
  );
}
