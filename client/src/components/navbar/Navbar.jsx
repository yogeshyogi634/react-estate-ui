import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

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
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?_gl=1*qekn97*_ga*MTIzODM5NTk0OS4xNzYyMTYwMTg1*_ga_8JE65Q40S6*czE3NjIxNjAxODQkbzEkZzEkdDE3NjIxNjA1MzYkajU3JGwwJGgw"
              alt=""
            />
            <span>John Dow</span>
            <Link to="/profile" className="profile">
              <div className="notification">2</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign in</a>
            <a href="" className="signup">
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
