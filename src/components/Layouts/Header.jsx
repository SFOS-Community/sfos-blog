import { Link } from 'react-router-dom';

function DropdownItem({ theme, ...props }) {
  return (
    <div
      {...props}
      className="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
      data-theme={theme}
      data-set-theme={theme}
    >
      <div
        className="w-full cursor-pointer bg-base-100 font-sans text-base-content"
        data-set-theme={theme}
      >
        <div className="grid grid-cols-5 grid-rows-3" data-set-theme={theme}>
          <div
            className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"
            data-set-theme={theme}
          >
            <div className="flex-grow text-sm font-bold" data-set-theme={theme}>
              {theme}
            </div>
            <div
              className="flex flex-shrink-0 flex-wrap gap-1"
              data-set-theme={theme}
            >
              <div
                className="w-2 rounded bg-primary"
                data-set-theme={theme}
              ></div>
              <div
                className="w-2 rounded bg-secondary"
                data-set-theme={theme}
              ></div>
              <div
                className="w-2 rounded bg-accent"
                data-set-theme={theme}
              ></div>
              <div
                className="w-2 rounded bg-neutral"
                data-set-theme={theme}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const themes = [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter',
  ];

  const handleThemeBtn = (ev) => {
    document.documentElement.dataset.theme =
      ev.target.getAttribute('data-set-theme');
  };

  return (
    <section>
      <div className="container navbar">
        <div className="navbar-start relative">
          <div className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path
                className="fill-current"
                d="M2 11 7 2 12 11ZM7 21Q5.35 21 4.175 19.825Q3 18.65 3 17Q3 15.325 4.175 14.162Q5.35 13 7 13Q8.65 13 9.825 14.175Q11 15.35 11 17Q11 18.65 9.825 19.825Q8.65 21 7 21ZM7 19Q7.825 19 8.412 18.413Q9 17.825 9 17Q9 16.175 8.412 15.588Q7.825 15 7 15Q6.175 15 5.588 15.588Q5 16.175 5 17Q5 17.825 5.588 18.413Q6.175 19 7 19ZM5.4 9H8.6L7 6.125ZM13 21V13H21V21ZM15 19H19V15H15ZM17 11Q15.575 9.8 14.613 8.975Q13.65 8.15 13.075 7.525Q12.5 6.9 12.25 6.35Q12 5.8 12 5.175Q12 4.05 12.788 3.275Q13.575 2.5 14.75 2.5Q15.425 2.5 16.013 2.812Q16.6 3.125 17 3.675Q17.4 3.125 17.988 2.812Q18.575 2.5 19.25 2.5Q20.425 2.5 21.212 3.275Q22 4.05 22 5.175Q22 5.8 21.75 6.35Q21.5 6.9 20.925 7.525Q20.35 8.15 19.388 8.975Q18.425 9.8 17 11ZM17 8.375Q18.8 6.875 19.4 6.25Q20 5.625 20 5.225Q20 4.9 19.812 4.7Q19.625 4.5 19.3 4.5Q19.05 4.5 18.812 4.637Q18.575 4.775 18.225 5.125L17 6.3L15.775 5.125Q15.425 4.775 15.188 4.637Q14.95 4.5 14.7 4.5Q14.375 4.5 14.188 4.7Q14 4.9 14 5.225Q14 5.625 14.6 6.25Q15.2 6.875 17 8.375ZM17 6.425Q17 6.425 17 6.425Q17 6.425 17 6.425Q17 6.425 17 6.425Q17 6.425 17 6.425Q17 6.425 17 6.425Q17 6.425 17 6.425Q17 6.425 17 6.425Q17 6.425 17 6.425Q17 6.425 17 6.425Q17 6.425 17 6.425Q17 6.425 17 6.425Q17 6.425 17 6.425ZM7 7.55ZM7 17Q7 17 7 17Q7 17 7 17Q7 17 7 17Q7 17 7 17Q7 17 7 17Q7 17 7 17Q7 17 7 17Q7 17 7 17ZM17 17Z"
              />
            </svg>
          </div>
          <ul className="menu rounded-box menu-horizontal  menu-compact p-2 ">
            <li>
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="24"
                  className="md:hidden"
                >
                  <path
                    className="fill-current"
                    d="M4 21V9L12 3L20 9V21H14V14H10V21ZM6 19H8V12H16V19H18V10L12 5.5L6 10ZM12 12.25Z"
                  />
                </svg>
                <span className="hidden md:block">HOME</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-x-4">
          <div className="dropdown-end dropdown ">
            <div tabIndex="0" className="btn btn-ghost gap-1 normal-case">
              <svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                ></path>
              </svg>
              <span className="hidden md:inline">Theme</span>
              <svg
                width="12px"
                height="12px"
                className="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2048 2048"
              >
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
              </svg>
            </div>
            <div className="dropdown-content rounded-t-box rounded-b-box top-px mt-16 h-[70vh] max-h-96 w-52 overflow-y-auto bg-base-200 text-base-content shadow-2xl">
              <div className="grid grid-cols-1 gap-3 p-3" tabIndex="0">
                {themes.map((theme) => (
                  <DropdownItem
                    theme={theme}
                    key={theme}
                    onClick={handleThemeBtn}
                  />
                ))}
              </div>
            </div>
          </div>
          <button className="btn  btn-secondary btn-sm">LOGIN</button>
        </div>
      </div>
    </section>
  );
}
