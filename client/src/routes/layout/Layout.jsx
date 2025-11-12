import { Navigate, Outlet } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";
import HomePage from "../homePage/homePage";
import "./layout.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Layout = () => {
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

export const RequiredAuth = () => {
  const { currentUser } = useContext(AuthContext);

  // if (!user) {
  //   return <Navigate to="/login" />;
  // }
  return !currentUser ? (
    <Navigate to="/login" />
  ) : (
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
