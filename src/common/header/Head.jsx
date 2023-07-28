import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import "./Head.css";

const Head = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const hideMenu = () => {
    setMenuVisible(false);
  };

  const menuStyles = {
    display: menuVisible ? "block" : "none",
  };

  return (
    <section className="head">
      <div className="head-container">
        <div className="hamburger-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faCircleInfo} />
        </div>
      </div>
      <ul className={`head-menu ${menuVisible ? "show" : ""}`} onClick={hideMenu}>
        <li>
          <FontAwesomeIcon icon={faPhone} />
          <label>+88012 3456 7894</label>
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
          <label>lil_pizzarie@vamonessa.com</label>
        </li>
        <li>
          FAQ's
        </li>
        <li>
          Precisa de Ajuda?
        </li>
        <li>
          FAQ's
        </li>
      </ul>
    </section>
  );
};

export default Head;
