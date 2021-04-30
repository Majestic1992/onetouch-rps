import React from "react";
import "../../styles/Tool.scss";

const Weapon = ({
  image,
  betAmount,
  newGameButton,
  playerTool,
  setPlayerTool,
  balance,
  setBalance,
  tool,
}) => {
  // Adds bets on a certain tool and adjusts the balance
  const addBetHandler = (tool) => {
    setPlayerTool(
      playerTool.map((item) => {
        if (item.id === tool.id && balance !== 0) {
          setBalance(balance - 500);
          return {
            ...item,
            betAmount: item.betAmount + 500,
          };
        }
        return item;
      })
    );
  };

  // Removes bets from a certain tool and adjusts the balance
  const removeBetHandler = (tool) => {
    setPlayerTool(
      playerTool.map((item) => {
        if (item.id === tool.id && item.betAmount !== 0) {
          setBalance(balance + 500);
          return {
            ...item,
            betAmount: item.betAmount - 500,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="tool">
      <img src={image} alt="tool" />
      <div>
        <p className="tool__betAmount">{betAmount}</p>
        <div className="tool__buttons">
          <button onClick={() => addBetHandler(tool)} disabled={newGameButton}>
            {" "}
            Increase bet
          </button>
          <button
            onClick={() => removeBetHandler(tool)}
            disabled={newGameButton}
          >
            Decrease bet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Weapon;
