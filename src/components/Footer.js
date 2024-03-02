import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white shadow-inner dark:bg-gray-900 dark:border-b-1 dark:border-gray-900">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link to="/" className="hover:underline">
            MovieBrowser
          </Link>
          . All Rights Reserved.
        </span>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Icons by&nbsp;
          <a
            href="https://www.flaticon.com/authors/bukeicon"
            target="_blank"
            className="hover:underline"
          >
            bukeicon
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
         <li>
            <a
              href="mailto:s.gorkemakan@gmail.com"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              Mail Me
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/SahinGorkemAkan"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              My Facebook
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sgorkemakan"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              My GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
