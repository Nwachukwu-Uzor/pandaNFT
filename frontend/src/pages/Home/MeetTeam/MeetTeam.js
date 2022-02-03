import Styles from "./MeetTeam.module.css";

import TeamCard from "./TeamCard/TeamCard";

const cardDetailArray = [
  {
    number: 1,
    text: "Sell out 20%  - we immediately use the funds to hire community  managers & Moderators for the Discord. Giveaway of 8 Pandason Twitter & Discord.",
  },
  {
    number: 2,
    text: "Get collection featured on Rarity tools, - 4 Panda’s to Panda owners",
  },
  {
    number: 3,
    text: "Sell Out 50% - Release of our own comic. Every P.C Holder will receive comic in digital form. 4 pandas giveaway to panda owners",
  },
  {
    number: 4,
    text: "Sell Out 75% - Airdrop to random P.C Holders. Launch campaign to bring more members to P.C community. Continue growing the Twitter & Discord community.",
  },
  {
    number: 5,
    text: "Sold Out - Get the P.C Collection on Opensea.io verified! Big giveaway on Twitter on Discords.",
  },
  {
    number: 6,
    text: "P.C team will start working on play to earn game. Holders will have in-game utility.",
  },
];

const MeetTeam = () => {
  return (
    <div className={Styles.MeetTeam}>
      <div className={`container`}>
        <h2 className={`text__center`}>MEET OUR TEAM OF CREATIVES</h2>
        <p className={`text__center`}>
          Wondering who is behind these PANDAS? A team of Young Creatives and
          Experienced Creators from Africa ❤💖❤ coming with exclusive comic &
          RPG Play to earn game.
        </p>
        <p className={`text__center`}>
          Become a member of the PANDA-Monium Club.
        </p>
        <h2 className={`text__center ${Styles.road__map}`}>ROAD MAP</h2>
        <div className={Styles.card__section}>
          {cardDetailArray.map((detail) => (
            <TeamCard
              text={detail.text}
              id={detail.number}
              number={detail.number}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetTeam;
