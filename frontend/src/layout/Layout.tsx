import React from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
