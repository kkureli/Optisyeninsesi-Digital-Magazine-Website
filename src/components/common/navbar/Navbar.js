import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import style from "./Navbar.css";
import BurgerMenu from "./BurgerMenu";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <span className="burgerMenu">
        <BurgerMenu></BurgerMenu>
      </span>
      <div className="navbar">
        <Navbar bg="light" variant="light">
          <Navbar.Brand>
            <NavLink to={"/"}>
              {<img width="150px" src={require("./logo.png")} alt="" />}
            </NavLink>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <NavLink className="ml-3" to={"/"}>
              Anasayfa
            </NavLink>

            <NavLink className="ml-3" to={"/arsiv"}>
              Bütün Sayılar
            </NavLink>
            <a
              className="ml-3"
              target="_blank"
              href="http://www.optisyeninsesi.com"
            >
              Optisyeninsesi Haber
            </a>
            <NavLink className="ml-3 mr-3" to="/iletisim">
              İletişim
            </NavLink>
          </Nav>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
