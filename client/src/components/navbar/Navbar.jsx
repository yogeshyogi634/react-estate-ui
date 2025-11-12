import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const user = true;

  return (
    <nav className="">
      <div className="left">
        <a href="/" className="logo">
          <img src="./logo.png" alt="logo" />
          <span>Neo Estate</span>
        </a>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Agents</a>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.webp"} alt="" />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              <div className="notification">2</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/login">Sign in</a>
            <a href="/register" className="signup">
              Sign up
            </a>{" "}
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            // onClick={() => setOpen((prev) => !prev)}
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Agents</a>
          <a href="">Sign in</a>
          <a href="">Sign up</a>
        </div>
      </div>
    </nav>
  );
};
