import { ReactNode } from "react";
import { Header } from "../header/Header";

export interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
