import React from "react";
import style from "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <ul>
          <li className="footerBorder">
            <a href="http://www.optisyeninsesi.com">
              {" "}
              <img src={require("./icons/logo (1).png")} alt="" />
            </a>
          </li>
          <li className="footerInfo footerBorder">
            © 2020 OptisyeninSesi | İzinsiz ve kaynak gösterilmeden
            yayınlanamaz. <br /> Whatsapp Mesaj Hattı: 0507 316 9645
            <br />
          </li>
          <div className="footerSocials">
            <li>
              <a
                target="_blank"
                href="https://www.facebook.com/optisyeninsesihaber/"
              >
                {" "}
                <img src={require("./icons/fb.png")} alt="" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/optisyeninsesi">
                {" "}
                <img src={require("./icons/twt.png")} alt="" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://plus.google.com/110267815015699512147"
              >
                {" "}
                <img src={require("./icons/g+.png")} alt="" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/home?trk=nav_responsive_tab_home"
              >
                {" "}
                <img src={require("./icons/lin.png")} alt="" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.youtube.com/user/optisyeninsesi"
              >
                {" "}
                <img src={require("./icons/ytb.png")} alt="" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://optisyeninsesi.com/wp-content/themes/theHABER/images/sosyal/ricon.png"
              >
                {" "}
                <img src={require("./icons/feed.png")} alt="" />
              </a>
            </li>
            <p className="footerKK">
              Made by{" "}
              <a target="_blank" href="https://kkureli.github.io/Portfolio/">
                KK
              </a>{" "}
            </p>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Footer;
