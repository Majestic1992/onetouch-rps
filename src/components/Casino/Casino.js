import React from "react";
import "../../styles/Casino.scss";

const Casino = ({ casinoImage }) => {
  return (
    <div className="casino">
      <h1 className="casino__name">Casino:</h1>
      <div className="casino__picture">
        {casinoImage != null ? (
          <img src={casinoImage} alt="casino tool" />
        ) : (
          <h2>Waiting for your bets</h2>
        )}
      </div>
    </div>
  );
};

export default Casino;
