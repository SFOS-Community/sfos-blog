export default function Footer() {
  return (
    <footer>
      <div className=" footer mt-20 bg-base-200 p-4 text-base-content">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-28"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer border-t border-base-300 bg-base-200 px-4 py-4 text-base-content">
        <div className="grid-flow-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
            <path
              className="fill-current"
              d="M2 11 7 2 12 11ZM7 21Q5.35 21 4.175 19.825Q3 18.65 3 17Q3 15.325 4.175 14.162Q5.35 13 7 13Q8.65 13 9.825 14.175Q11 15.35 11 17Q11 18.65 9.825 19.825Q8.65 21 7 21ZM7 19Q7.825 19 8.412 18.413Q9 17.825 9 17Q9 16.175 8.412 15.588Q7.825 15 7 15Q6.175 15 5.588 15.588Q5 16.175 5 17Q5 17.825 5.588 18.413Q6.175 19 7 19ZM5.4 9H8.6L7 6.125ZM13 21V13H21V21ZM15 19H19V15H15ZM17 11Q15.575 9.8 14.613 8.975Q13.65 8.15 13.075 7.525Q12.5 6.9 12.25 6.35Q12 5.8 12 5.175Q12 4.05 12.788 3.275Q13.575 2.5 14.75 2.5Q15.425 2.5 16.013 2.812Q16.6 3.125 17 3.675Q17.4 3.125 17.988 2.812Q18.575 2.5 19.25 2.5Q20.425 2.5 21.212 3.275Q22 4.05 22 5.175Q22 5.8 21.75 6.35Q21.5 6.9 20.925 7.525Q20.35 8.15 19.388 8.975Q18.425 9.8 17 11ZM17 8.375Q18.8 6.875 19.4 6.25Q20 5.625 20 5.225Q20 4.9 19.812 4.7Q19.625 4.5 19.3 4.5Q19.05 4.5 18.812 4.637Q18.575 4.775 18.225 5.125L17 6.3L15.775 5.125Q15.425 4.775 15.188 4.637Q14.95 4.5 14.7 4.5Q14.375 4.5 14.188 4.7Q14 4.9 14 5.225Q14 5.625 14.6 6.25Q15.2 6.875 17 8.375ZM17 6.425Q17 6.425 17 6.425Q17 6.425 17 6.425Q17 6.425 17 6.425Q17 6.425 17 6.425Q17 6.425 17 6.425Q17 6.425 17 6.425Q17 6.425 17 6.425Q17 6.425 17 6.425Q17 6.425 17 6.425Q17 6.425 17 6.425Q17 6.425 17 6.425Q17 6.425 17 6.425ZM7 7.55ZM7 17Q7 17 7 17Q7 17 7 17Q7 17 7 17Q7 17 7 17Q7 17 7 17Q7 17 7 17Q7 17 7 17Q7 17 7 17ZM17 17Z"
            />
          </svg>
          <p>
            SFOS Blog. <br />A blog that has been around since 2022.
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
