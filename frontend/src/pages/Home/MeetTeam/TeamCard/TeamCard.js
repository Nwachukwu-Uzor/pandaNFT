import React from "react";

import Styles from "./TeamCard.module.css";

const TeamCard = ({ number, text }) => {
  return (
    <div className={Styles.card}>
      <p className={Styles.card__number}>{number}</p>
      <p className={Styles.card__text}>{text}</p>
    </div>
  );
};

export default TeamCard;
