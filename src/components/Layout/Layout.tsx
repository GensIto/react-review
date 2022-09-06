import { Header } from "./Header";
import { Footer } from "./Footer";
import { ReactNode } from "react";

type LayoutType = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutType) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
