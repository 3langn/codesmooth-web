import SearchIcon from '@mui/icons-material/Search';
import type { ReactNode } from 'react';

import Navigate from '@/common/Navigate';
import NavBar from '@/components/Navbar';

type IMainProps = {
  meta: ReactNode;
  children?: ReactNode;
};

const Main = (props: IMainProps) => {
  // get the path from the url

  return (
    <div className="">
      <nav className="fixed top-0 z-10 flex h-16 w-full border-0 border-b border-solid border-gray-300 bg-white transition duration-300 ease-in-out dark:border-gray-700 dark:bg-dark-90 sm:h-16">
        <span className="flex flex-row items-center">logo</span>
        <div className="h-full flex-row pl-6 lg:flex">
          <Navigate />
        </div>
        <div className="flex h-full flex-auto items-center justify-end">
          <button className="mr-2 gap-x-2.5 lg:flex">
            <span>
              <SearchIcon />
            </span>
            <span>Search</span>
          </button>
          <div className="mx-4 h-8 border-0 border-l border-solid border-gray-200 dark:border-dark-90 lg:block"></div>
          <div className="mx-2 flex h-[full] w-[38px] cursor-pointer items-center p-1">
            <img
              className="shrink-0 rounded-full bg-gray-400 dark:bg-gray-900 "
              src="https://avatars.githubusercontent.com/u/76799726?v=4"
              alt=""
            />
          </div>
        </div>
      </nav>
      <nav className="fixed top-16 z-10 h-full w-24 bg-orange-300">alo</nav>
      <div className=" flex flex-1 flex-col bg-white pl-24 pt-32 ">
        <NavBar />
        <div className="content w-full pl-2 text-xl">{props.children}</div>
      </div>
    </div>
  );
};

export { Main };
