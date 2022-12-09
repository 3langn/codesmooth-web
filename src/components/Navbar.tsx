import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
  const router = useRouter();
  const path = router.pathname;
  return (
    <ul className="fixed top-16 flex w-full flex-wrap justify-center bg-emerald-400 text-xl">
      <div className={`mr-6 inline-flex ${path === '/' && 'border-b-2 border-blue-500'}`}>
        <Link href="/" className="border-none px-16 py-4 text-black hover:text-gray-900">
          Home
        </Link>
      </div>
      <li className={`mr-6 inline-flex  ${path === '/about' && 'border-b-2 border-blue-500'}`}>
        <Link href="/about" className="border-none px-16 py-4 text-black hover:text-gray-900 ">
          About
        </Link>
      </li>
      <li className={`mr-6 inline-flex  ${path === '/blog' && 'border-b-2 border-blue-500'}`}>
        <Link href="/blog" className="border-none px-16 py-4 text-black hover:text-gray-900 ">
          Blog
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
