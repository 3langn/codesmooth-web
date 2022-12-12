import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
  const router = useRouter();
  const path = router.pathname;
  return (
    <div className="fixed top-16 flex w-full flex-col items-center border-black bg-white pt-10">
      <span className="p-10 text-3xl">Welcome, Minh</span>
      <ul className="flex w-full flex-wrap justify-center border-b-2 border-gray-300 text-xl">
        <li className={`mr-6 inline-flex ${path === '/' && 'border-b-2 border-blue-500'}`}>
          <Link
            href="/"
            className={`border-none px-20 py-2 text-base text-gray-600 hover:text-gray-900 ${
              path === '/' && 'font-medium text-gray-900'
            }`}
          >
            Home
          </Link>
        </li>
        <li
          className={`mr-6 inline-flex  ${
            path === '/about' && 'border-b-2 border-blue-500 text-gray-600'
          }`}
        >
          <Link
            href="/about"
            className={`border-none px-20 py-2 text-base text-gray-600 hover:text-gray-900 ${
              path === '/about' && 'font-medium text-gray-900'
            }`}
          >
            In Progress
          </Link>
        </li>
        <li
          className={`mr-6 inline-flex  ${
            path === '/blog' && 'border-b-2 border-blue-500 text-gray-600'
          }`}
        >
          <Link
            href="/blog"
            className={`border-none px-20 py-2 text-base text-gray-600 hover:text-gray-900 ${
              path === '/blog' && 'font-medium text-gray-900'
            }`}
          >
            Saved
          </Link>
        </li>
        <li className={`mr-6 inline-flex  ${path === '/blog' && 'border-b-2 border-blue-500'}`}>
          <Link
            href="/completed"
            className={`border-none px-20 py-2 text-base text-gray-600 hover:text-gray-900 ${
              path === '/completed' && 'font-medium text-gray-900'
            }`}
          >
            Completed
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
