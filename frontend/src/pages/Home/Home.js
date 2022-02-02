import React from "react";

import Styles from "./Home.module.css";

import pandaImage from "../../assets/panda-image.png";

// components
import MintPrompt from "./MintPrompt/MintPrompt";

const Home = () => {
  return (
    <>
      <div className={Styles.Home}>
        <div className={`container ${Styles.hero}`}>
          <div className={Styles.hero__text}>
            <h2 className={`main__text`}>
              Introducing <br /> "PANDA-Monium" CLUB.
            </h2>
            <p>
              The story of 4,444 dope animated pandas that became world famous
              Anarchists. In the story behind this collection, you will find
              what preceded the creation of the Legendary Panda-Monium club and
              also how ordinary Pandas became world famous anarchists,
              intentional chaotic for survival to prevent its anhillation.
            </p>
            <button
              className={`primary__btn ${Styles.MintPromptPrimary} ${Styles.hideMobile}`}
            >
              Mint
            </button>
          </div>
          <img src={pandaImage} alt="Panda-monium club" />
        </div>
        <div className={Styles.hideDesktop}>
          <button className={`primary__btn ${Styles.MintPromptPrimary}`}>
            Mint
          </button>
        </div>
      </div>
      <MintPrompt />
    </>
  );
};

export default Home;
