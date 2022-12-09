import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const path = router.pathname;
  return (
    <div className="fixed flex flex-col items-center top-16 w-full pt-10 bg-white border-black">
      <span className="p-10 text-3xl">Welcome, Minh</span>
      <ul className="flex w-full flex-wrap justify-center text-xl border-b-2 border-gray-300">
        <li className={`mr-6 inline-flex ${path === "/" && "border-b-2 border-blue-500"}`}>
          <Link
            href="/"
            className={`border-none px-20 py-2 text-gray-600 hover:text-gray-900 text-base ${
              path === "/" && "text-gray-900 font-medium"
            }`}
          >
            Home
          </Link>
        </li>
        <li
          className={`mr-6 inline-flex  ${
            path === "/about" && "text-gray-600 border-b-2 border-blue-500"
          }`}
        >
          <Link
            href="/about"
            className={`border-none px-20 py-2 text-gray-600 hover:text-gray-900 text-base ${
              path === "/about" && "text-gray-900 font-medium"
            }`}
          >
            In Progress
          </Link>
        </li>
        <li
          className={`mr-6 inline-flex  ${
            path === "/blog" && "text-gray-600 border-b-2 border-blue-500"
          }`}
        >
          <Link
            href="/blog"
            className={`border-none px-20 py-2 text-gray-600 hover:text-gray-900 text-base ${
              path === "/blog" && "text-gray-900 font-medium"
            }`}
          >
            Saved
          </Link>
        </li>
        <li className={`mr-6 inline-flex  ${path === "/blog" && "border-b-2 border-blue-500"}`}>
          <Link
            href="/completed"
            className={`border-none px-20 py-2 text-gray-600 hover:text-gray-900 text-base ${
              path === "/completed" && "text-gray-900 font-medium"
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
