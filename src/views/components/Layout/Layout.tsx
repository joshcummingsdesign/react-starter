import React, { SFC } from "react";
import Header from "./Header";

const Layout: SFC = ({ children }) => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <Header />
        {children}
      </div>
    </div>
  </div>
);

export default Layout;
