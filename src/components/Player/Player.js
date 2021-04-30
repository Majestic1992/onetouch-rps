import React from "react";
import Tool from "./Tool";
import chips from "../../assets/chips1.svg";
import "../../styles/Player.scss";

const Player = ({
  balance,
  setBalance,
  playerTool,
  setPlayerTool,
  onSubmitHandler,
  winnerCheck,
  startNewRound,
  addPlayButton,
  playButtonStatus,
  newGameButton,
}) => {
  return (
    <div className="player">
      <h1 className="player__name">Player:</h1>
      <div className="player__weapon">
        {playerTool.map((tool) => (
          <Tool
            key={tool.id}
            image={tool.name}
            id={tool.id}
            tool={tool}
            betAmount={tool.betAmount}
            newGameButton={newGameButton}
            balance={balance}
            setBalance={setBalance}
            playerTool={playerTool}
            setPlayerTool={setPlayerTool}
          />
        ))}
      </div>
      <div className="player__bank">
        <img src={chips} alt="chips" className="player__bank--image" />
        <p className="player__bank--balance">{balance}</p>
      </div>
      <div className="player__button">
        {addPlayButton ? (
          <button
            onClick={() => {
              onSubmitHandler();
              winnerCheck();
            }}
            disabled={playButtonStatus}
          >
            Play
          </button>
        ) : (
          ""
        )}
        {newGameButton ? <button onClick={startNewRound}>New Game</button> : ""}
      </div>
    </div>
  );
};

export default Player;
