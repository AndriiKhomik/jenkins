import { FC } from "react";

interface ContainerProps {
  children: any;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
      {children}
    </div>
  );
};

export default Container;
