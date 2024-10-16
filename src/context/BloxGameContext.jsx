import React, { createContext, useState } from "react";

export const BloxGameContext = createContext();

function BloxGameContextProvider({ children }) {
  const [points, setPoints] = useState(0);
  const [speed, setSpeed] = useState(1.4);
  const [boxSize, setBoxSize] = useState(3);
  const [boxHeight, setBoxHeight] = useState(1);
  const [gameState, setGameState] = useState("start");

  const changePoints = (points) => {
    setPoints(points);
  };
  const changeSpeed = (speed) => {
    setSpeed(speed);
  };

  const changeBoxSize = (size) => {
    setBoxSize(size);
  };

  const changeBoxHeight = (height) => {
    setBoxHeight(height);
  };

  const changeGameState = (gameState) => {
    setGameState(gameState);
  };
  return (
    <BloxGameContext.Provider
      value={{
        points,
        speed,
        boxSize,
        boxHeight,
        gameState,
        changePoints,
        changeSpeed,
        changeBoxSize,
        changeBoxHeight,
        changeGameState,
      }}
    >
      {children}
    </BloxGameContext.Provider>
  );
}

export default BloxGameContextProvider;
