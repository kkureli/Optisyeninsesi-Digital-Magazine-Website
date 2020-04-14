import React from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import style from "./BurgerMenu.css";

export default class BurgerMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu>
        <NavLink id="burgerLogo" className="menu-item" to="/">
          <img width="150px" src={require("./logo.png")} alt="" />
        </NavLink>
        <NavLink id="home" className="menu-item" to="/">
          Anasayfa
        </NavLink>
        <NavLink id="about" className="menu-item" to="/arsiv">
          Bütün Sayılar
        </NavLink>
        <a
          className="menu-item"
          target="_blank"
          href="http://www.optisyeninsesi.com"
        >
          Optisyeninsesi Haber
        </a>
        <NavLink id="contact" className="menu-item" to="/iletisim">
          İletişim
        </NavLink>
      </Menu>
    );
  }
}
