import type { ReactNode } from 'react';

import NavBar from '../components/Navbar';

type IMainProps = {
  meta: ReactNode;
  children?: ReactNode;
};

const Main = (props: IMainProps) => {
  // get the path from the url

  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <div className="flex flex-col items-center border-b border-gray-300">
        <div className="pt-16 pb-8">
          <div className="text-3xl font-normal text-gray-900">
            Welcome, Minh
          </div>
        </div>
        <NavBar />
        <div className="content text-xl">{props.children}</div>
      </div>
    </div>
  );
};

export { Main };
