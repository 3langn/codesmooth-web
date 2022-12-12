import type { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

interface IIinput
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const Input: FC<IIinput> = (attr) => {
  const { placeholder, type, ...props } = attr;
  return (
    <div className="flex h-12 w-96 items-center justify-between rounded-lg border border-gray-900 px-4  outline-none">
      <input className="h-full w-full outline-none" placeholder={placeholder} type={type} />
      {props.children}
    </div>
  );
};

export default Input;
