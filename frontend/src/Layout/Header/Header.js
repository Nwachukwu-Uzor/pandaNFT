import React, { useState } from "react";

import Styles from "./Header.module.css";

// image imports
import logo from "../../assets/logo.png";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className={Styles.Header}>
      <nav className={`container ${Styles.HeaderContainer}`}>
        <div className={Styles.logo__div}>
          <img src={logo} alt="Logo for PandaNFT" className={Styles.logo} />
          <div
            className={Styles.toggle__icons}
            onClick={() => setOpenMenu((open) => !open)}
          >
            {openMenu ? (
              <i class="fas fa-times"></i>
            ) : (
              <i class="fas fa-bars"></i>
            )}
          </div>
        </div>
        <div
          className={`${Styles.submenu} ${
            openMenu ? Styles.open : Styles.close
          }`}
        >
          <div className={Styles.menu__links}>
            <a href="#" className={Styles.menu__link}>
              Home
            </a>
            <a href="#" className={Styles.menu__link}>
              Mint
            </a>
            <a href="#" className={Styles.menu__link}>
              Team
            </a>
            <a href="#" className={Styles.menu__link}>
              Roadmap
            </a>
          </div>
          <div className={Styles.menu__icons}>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-discord"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
