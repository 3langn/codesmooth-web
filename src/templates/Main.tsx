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
      <div className="fixed">
        <div>
          <span>Logo</span>
        </div>
      </div>
      <NavBar />
      <div className="content text-xl">{props.children}</div>
    </div>
  );
};

export { Main };
