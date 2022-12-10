import { useRouter } from "next/router";
import { useState } from "react";
import HomeLayout from "../layouts/Home";

const NavItem = [
  { name: "Home" },
  { name: "In Progress" },
  { name: "Saved" },
  { name: "Completed" },
];

const Body = ({ name }: { name: string | undefined }) => {
  switch (name) {
    case "Home":
      return <HomeLayout />;
    case "In Progress":
      return <div>In Progress</div>;
    case "Saved":
      return <div>Saved</div>;
    case "Completed":
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
      <div className="fixed flex flex-col items-center top-16 w-full pt-10 bg-white border-black z-10">
        <span className="p-10 text-3xl">Welcome, Minh</span>
        <ul className="flex w-full flex-wrap justify-center text-xl border-b-2 border-gray-300">
          {NavItem.map((item, index) => {
            return (
              <li onClick={() => setCurrentNavItem(item)} key={index}
                className={`mr-6 inline-flex cursor-pointer ${
                  currentNavItem?.name === item.name && "border-b-2 border-blue-500"
                }`}
              >
                <div
                  className={`border-none px-20 py-2 text-gray-600 hover:text-gray-900 text-base ${
                    path === "/" && "text-gray-900 font-medium"
                  }`}
                >
                  {item.name}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col justify-center my-10 w-[90%] px-[10%]">
        <Body name={currentNavItem?.name} />
      </div>
    </>
  );
};

export default Learn;
