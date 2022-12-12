import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import SearchIcon from '@mui/icons-material/Search';
import type { ReactNode } from 'react';

import Navigate from '@/common/Navigate';
import NavBar from '@/components/Navbar';

type IMainProps = {
  meta: ReactNode;
  children?: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <div>
      <nav className="fixed top-0 z-10 flex h-16 w-full items-center border-0 border-b border-solid border-gray-300 bg-white transition duration-300 ease-in-out dark:border-gray-700 dark:bg-dark-90 sm:h-16">
        <span className="flex items-center justify-start gap-2 px-2">
          <img src="/logo-96.png" alt="Logo" className="ml-4 h-8 w-8" />
          <span className="text-lg font-bold">Code Smooth</span>
        </span>
        <div className="h-full flex-row pl-8 lg:flex">
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
      <nav className="fixed top-16 z-10 flex h-full w-sidebar bg-gray-200">
        <a
          title="My Learning"
          className="flex h-20 w-full cursor-pointer flex-col items-center py-3 px-1 hover:text-white focus:text-white"
        >
          <AutoStoriesOutlinedIcon style={{ color: '#505050' }} />
          My Learning
        </a>
      </nav>
      <div className="flex flex-1 flex-col bg-white pl-sidebar pt-72">
        <NavBar />
        <div className="w-full pl-2 text-xl">{props.children}</div>
      </div>
    </div>
  );
};

export { Main };
