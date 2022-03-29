import React, { ReactNode } from "react";

interface InputTypes {
  header: string;
  className: string;
  children: ReactNode;
}

const index = ({ header, children, className }: InputTypes) => {
  return (
    <div className={className}>
      <div className="text-white">{header}</div>
      <div className="inputbox__fields display-f flex-column align-center">
        <input type="text" placeholder="email" />
        <input className="mt-2" placeholder="password" type="text" />
      </div>
      <div className="inputbox__buttons display-f align-center flex-column">
        {children}
      </div>
    </div>
  );
};

export default index;
