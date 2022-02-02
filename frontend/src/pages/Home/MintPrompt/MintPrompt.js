import React, { useState } from "react";

import Styles from "./MintPrompt.module.css";

const MintPrompt = () => {
  let [mintCount, setMintCount] = useState(0);

  const addMintCount = () => {
    setMintCount((prev) => prev + 1);
  };
  const reduceMintCount = () =>
    setMintCount((currentValue) => currentValue - 1);

  return (
    <div className={`${Styles.MintPrompt} container`}>
      <h2 className={`main__text primary__text`}>MINT YOUR PMC</h2>
      <p className={`text__center`}>
        You need to connect your solana wallet to mint your PMC NFT
      </p>
      <div className={`${Styles.promptButton} horizontal__flex`}>
        <button
          className={`outlined__btn ${Styles.promptBtn}`}
          disabled={mintCount <= 0}
          onClick={reduceMintCount}
        >
          <i className="fas fa-minus"></i>
        </button>
        <p className={`${Styles.mintCount} semi-bold`}>{mintCount}</p>
        <button
          className={`primary__btn ${Styles.promptBtn}`}
          onClick={addMintCount}
        >
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <div className={`horizontal__flex ${Styles.connectPrompt}`}>
        <button className={`outlined__btn ${Styles.outlined_prompt}`}>
          Connect Wallet
        </button>
        <button className={`primary__btn ${Styles.filled_prompt}`}>Mint</button>
      </div>
    </div>
  );
};

export default MintPrompt;
