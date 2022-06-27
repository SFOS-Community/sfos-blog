import { useEffect, useState } from 'react';

export default function ToTopButton() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      !active && setActive(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 5000);
  }, [active]);

  const handleToTopBtn = () => {
    scroll(0, 0);
  };

  return (
    <button
      onClick={handleToTopBtn}
      className={`btn btn-primary  btn-circle fixed bottom-14 right-10  z-50 shadow-lg transition-all duration-500 ${
        active ? 'opacity-100' : 'hidden opacity-0'
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40"
        width="40"
        className=" fill-current"
      >
        <path d="M18.625 33.333V11.958L8.625 21.958L6.667 20L20 6.667L33.333 20L31.375 21.958L21.375 11.958V33.333Z" />
      </svg>
    </button>
  );
}
