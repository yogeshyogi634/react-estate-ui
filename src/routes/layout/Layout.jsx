import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";
import HomePage from "../homePage/homePage";
import "./layout.scss";

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
