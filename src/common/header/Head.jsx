import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faBars } from "@fortawesome/free-solid-svg-icons";
import "./Head.css";

const Head = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className>
      <div className="container d_flex">
        <div className={`menu-btn ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="menu-btn-burger">
          </div>
        </div>
        <ul className={`menu ${menuOpen ? 'active' : ''}`}>

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
      </div>
    </section>
  );
};

export default Head;
