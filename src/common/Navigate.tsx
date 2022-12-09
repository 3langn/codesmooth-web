import React from 'react';

interface INavigate {
  title: string;
  main: string[];
}

const Navigate = () => {
  const navigate: INavigate[] = [
    { title: 'Solutions', main: ['Educative Enterprise', 'Developers'] },
    { title: 'Products', main: ['Courses for Enterprise', 'Courses for Individuals'] },
  ];

  return (
    <div className="flex cursor-pointer flex-row">
      {navigate.map((item) => (
        <div
          className="m-0 flex h-full items-center justify-start rounded-sm px-3 font-medium leading-6 hover:bg-button-hover "
          key={item.title}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default Navigate;
