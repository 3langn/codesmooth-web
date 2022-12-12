import { useRouter } from 'next/router';
import { useState } from 'react';

import HomeLayout from '../layouts/Home';

const NavItem = [
  { name: 'Home' },
  { name: 'In Progress' },
  { name: 'Saved' },
  { name: 'Completed' },
];

const Body = ({ name }: { name: string | undefined }) => {
  switch (name) {
    case 'Home':
      return <HomeLayout />;
    case 'In Progress':
      return <div>In Progress</div>;
    case 'Saved':
      return <div>Saved</div>;
    case 'Completed':
      return <div>Completed</div>;
    default:
      return <div>Home</div>;
  }
};

const Learn = () => {
  const router = useRouter();
  const path = router.pathname;
  const [currentNavItem, setCurrentNavItem] = useState(NavItem[0]);
  return (
    <>
      <div className="top-16 z-10 flex w-full flex-col items-center border-black bg-white pt-10">
        <span className="p-10 text-3xl">Welcome, Minh</span>
        <ul className="sticky top-0 flex w-full flex-wrap justify-center border-b-2 border-gray-300 text-xl">
          {NavItem.map((item, index) => {
            return (
              <li
                onClick={() => setCurrentNavItem(item)}
                key={index}
                className={`mr-6 inline-flex cursor-pointer ${
                  currentNavItem?.name === item.name && 'border-b-2 border-blue-500'
                }`}
              >
                <div
                  className={`border-none px-20 py-2 text-base text-gray-600 hover:text-gray-900 ${
                    path === '/' && 'font-medium text-gray-900'
                  }`}
                >
                  {item.name}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="my-10 flex w-[90%] flex-col justify-center px-[10%]">
        <Body name={currentNavItem?.name} />
      </div>
    </>
  );
};

export default Learn;
