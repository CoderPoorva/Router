import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useNavigation } from "react-router-dom";

const AppLayout = () => {
  const navigation = useNavigation();

  if (navigation === true) {
    return (
      <div>
        <h1>Loading..</h1>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
