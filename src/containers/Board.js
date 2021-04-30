import React, { useEffect, useState } from "react";
import Player from "../components/Player/Player";
import Casino from "../components/Casino/Casino";
import rock from "../assets/rock.svg";
import paper from "../assets/paper.svg";
import scissors from "../assets/scissors.svg";
import "../styles/Board.scss";

const Board = () => {
  const playerTools = [
    { id: 1, name: rock, betAmount: 0 },
    { id: 2, name: paper, betAmount: 0 },
    { id: 3, name: scissors, betAmount: 0 },
  ];

  const casinoTools = [
    { id: 1, name: rock, betAmount: 0 },
    { id: 2, name: paper, betAmount: 0 },
    { id: 3, name: scissors, betAmount: 0 },
  ];
  const [balance, setBalance] = useState(5000);
  const [playerTool, setPlayerTool] = useState(playerTools);
  const [casinoTool, setCasinoTool] = useState(casinoTools);
  const [activePlayerTools, setActivePlayerTools] = useState([]);
  const [casinoImage, setCasinoImage] = useState(null);
  const [playButtonStatus, setPlayButtonStatus] = useState(true);
  const [addPlayButton, setAddPlayButton] = useState(true);
  const [newGameButton, setNewGameButton] = useState(false);

  const startNewRound = () => {
    setPlayerTool(playerTools);
    setPlayButtonStatus(true);
    setAddPlayButton(true);
    setNewGameButton(false);
    setCasinoImage(null);
  };

  useEffect(() => {
    onSubmitHandler();
  }, [balance]);

  // Sets player tools according to bets and enables/disables play button
  const onSubmitHandler = () => {
    if (
      playerTool[0].betAmount === 0 &&
      playerTool[1].betAmount === 0 &&
      playerTool[2].betAmount != 0
    ) {
      setActivePlayerTools([playerTool[2]]);
      setPlayButtonStatus(false);
    }

    if (
      playerTool[0].betAmount === 0 &&
      playerTool[1].betAmount != 0 &&
      playerTool[2].betAmount === 0
    ) {
      setActivePlayerTools([playerTool[1]]);
      setPlayButtonStatus(false);
    }

    if (
      playerTool[0].betAmount != 0 &&
      playerTool[1].betAmount === 0 &&
      playerTool[2].betAmount === 0
    ) {
      setActivePlayerTools([playerTool[0]]);
      setPlayButtonStatus(false);
    }

    if (
      playerTool[0].betAmount === 0 &&
      playerTool[1].betAmount != 0 &&
      playerTool[2].betAmount != 0
    ) {
      setActivePlayerTools([playerTool[1], playerTool[2]]);
      setPlayButtonStatus(false);
    }

    if (
      playerTool[0].betAmount != 0 &&
      playerTool[1].betAmount === 0 &&
      playerTool[2].betAmount != 0
    ) {
      setActivePlayerTools([playerTool[0], playerTool[2]]);
      setPlayButtonStatus(false);
    }

    if (
      playerTool[0].betAmount != 0 &&
      playerTool[1].betAmount != 0 &&
      playerTool[2].betAmount === 0
    ) {
      setActivePlayerTools([playerTool[0], playerTool[1]]);
      setPlayButtonStatus(false);
    }

    if (
      playerTool[0].betAmount === 0 &&
      playerTool[1].betAmount === 0 &&
      playerTool[2].betAmount === 0
    ) {
      setPlayButtonStatus(true);
    }
    if (
      playerTool[0].betAmount !== 0 &&
      playerTool[1].betAmount !== 0 &&
      playerTool[2].betAmount !== 0
    ) {
      setPlayButtonStatus(true);
    }
    let value = Math.ceil(Math.random() * 3);
    setCasinoTool(value);
  };

  // Sets a casino tool image
  const casinoWeaponHandler = () => {
    if (casinoTool === 1) {
      setCasinoImage(rock);
    }
    if (casinoTool === 2) {
      setCasinoImage(paper);
    }
    if (casinoTool === 3) {
      setCasinoImage(scissors);
    }
  };

  // Checks who won
  const winnerCheck = () => {
    casinoWeaponHandler();
    setAddPlayButton(false);
    setNewGameButton(true);
    if (activePlayerTools.length > 1) {
      if (
        activePlayerTools[0].id === 1 &&
        activePlayerTools[1].id === 2 &&
        casinoTool === 1
      ) {
        setBalance(
          balance +
            activePlayerTools[0].betAmount +
            activePlayerTools[1].betAmount * 2
        );
      }
      if (
        activePlayerTools[0].id === 1 &&
        activePlayerTools[1].id === 2 &&
        casinoTool === 2
      ) {
        setBalance(balance + activePlayerTools[1].betAmount);
      }
      if (
        activePlayerTools[0].id === 1 &&
        activePlayerTools[1].id === 2 &&
        casinoTool === 3
      ) {
        setBalance(balance + activePlayerTools[0].betAmount * 2);
      }
      if (
        activePlayerTools[0].id === 1 &&
        activePlayerTools[1].id === 3 &&
        casinoTool === 1
      ) {
        setBalance(balance + activePlayerTools[1].betAmount);
      }
      if (
        activePlayerTools[0].id === 1 &&
        activePlayerTools[1].id === 3 &&
        casinoTool === 2
      ) {
        setBalance(balance + activePlayerTools[1].betAmount * 2);
      }
      if (
        activePlayerTools[0].id === 1 &&
        activePlayerTools[1].id === 3 &&
        casinoTool === 3
      ) {
        setBalance(
          balance +
            activePlayerTools[1].betAmount +
            activePlayerTools[0].betAmount * 2
        );
      }

      if (
        activePlayerTools[0].id === 2 &&
        activePlayerTools[1].id === 1 &&
        casinoTool === 1
      ) {
        setBalance(
          balance +
            activePlayerTools[1].betAmount +
            activePlayerTools[0].betAmount * 2
        );
      }
      if (
        activePlayerTools[0].id === 2 &&
        activePlayerTools[1].id === 1 &&
        casinoTool === 2
      ) {
        setBalance(balance + activePlayerTools[0].betAmount);
      }
      if (
        activePlayerTools[0].id === 2 &&
        activePlayerTools[1].id === 1 &&
        casinoTool === 3
      ) {
        setBalance(balance + activePlayerTools[1].betAmount * 2);
      }
      if (
        activePlayerTools[0].id === 2 &&
        activePlayerTools[1].id === 3 &&
        casinoTool === 1
      ) {
        setBalance(balance + activePlayerTools[0].betAmount * 2);
      }
      if (
        activePlayerTools[0].id === 2 &&
        activePlayerTools[1].id === 3 &&
        casinoTool === 2
      ) {
        setBalance(
          balance +
            activePlayerTools[0].betAmount +
            activePlayerTools[1].betAmount * 2
        );
      }
      if (
        activePlayerTools[0].id === 2 &&
        activePlayerTools[1].id === 3 &&
        casinoTool === 3
      ) {
        setBalance(balance + activePlayerTools[1].betAmount);
      }

      if (
        activePlayerTools[0].id === 3 &&
        activePlayerTools[1].id === 1 &&
        casinoTool === 1
      ) {
        setBalance(balance + activePlayerTools[1].betAmount);
      }
      if (
        activePlayerTools[0].id === 3 &&
        activePlayerTools[1].id === 1 &&
        casinoTool === 2
      ) {
        setBalance(balance + activePlayerTools[0].betAmount * 2);
      }
      if (
        activePlayerTools[0].id === 3 &&
        activePlayerTools[1].id === 1 &&
        casinoTool === 3
      ) {
        setBalance(
          balance +
            activePlayerTools[0].betAmount +
            activePlayerTools[1].betAmount * 2
        );
      }
      if (
        activePlayerTools[0].id === 3 &&
        activePlayerTools[1].id === 2 &&
        casinoTool === 1
      ) {
        setBalance(balance + activePlayerTools[1].betAmount * 2);
      }
      if (
        activePlayerTools[0].id === 3 &&
        activePlayerTools[1].id === 2 &&
        casinoTool === 2
      ) {
        setBalance(
          balance +
            activePlayerTools[1].betAmount +
            activePlayerTools[0].betAmount * 2
        );
      }
      if (
        activePlayerTools[0].id === 3 &&
        activePlayerTools[1].id === 2 &&
        casinoTool === 3
      ) {
        setBalance(balance + activePlayerTools[0].betAmount);
      }
    }

    if (activePlayerTools.length <= 1) {
      if (activePlayerTools[0].id === 1 && casinoTool === 2) {
        setBalance(balance);
      }
      if (activePlayerTools[0].id === 1 && casinoTool === 3) {
        setBalance(balance + activePlayerTools[0].betAmount * 14);
      }
      if (activePlayerTools[0].id === 2 && casinoTool === 1) {
        setBalance(balance + activePlayerTools[0].betAmount * 14);
      }
      if (activePlayerTools[0].id === 2 && casinoTool === 3) {
        setBalance(balance);
      }
      if (activePlayerTools[0].id === 3 && casinoTool === 1) {
        setBalance(balance);
      }
      if (activePlayerTools[0].id === 3 && casinoTool === 2) {
        setBalance(balance + activePlayerTools[0].betAmount * 14);
      }
      if (activePlayerTools[0].id === casinoTool) {
        setBalance(balance + activePlayerTools[0].betAmount);
      }
    }
  };

  return (
    <div className="board">
      <Casino casinoImage={casinoImage} />
      <Player
        balance={balance}
        setBalance={setBalance}
        playerTool={playerTool}
        setPlayerTool={setPlayerTool}
        winnerCheck={winnerCheck}
        onSubmitHandler={onSubmitHandler}
        addPlayButton={addPlayButton}
        startNewRound={startNewRound}
        newGameButton={newGameButton}
        playButtonStatus={playButtonStatus}
      />
    </div>
  );
};

export default Board;
