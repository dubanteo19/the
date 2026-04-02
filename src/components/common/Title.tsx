import type { FC, ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}
export const Title: FC<TitleProps> = ({ children }) => {
  return (
    <h3 className=" text-black bg-primary whitespace-nowrap my-2 rounded inline-block px-2 border-black border-2 ">
      {children}
    </h3>
  );
};
