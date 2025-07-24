// libraries
import type { ReactNode } from "react";

// components
import { Header } from "./Header";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col w-full h-full bg-white">
      <Header />
      <div className="flex-1 w-full px-8 pt-8 pb-20 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};
