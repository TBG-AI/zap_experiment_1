"use client";

import { useState } from "react";
import GameList from "./components/gameList";
import ParlayList from "./components/parlayList";

export default function Layout({ children }) {
  const [selectedGame, setSelectedGame] = useState({
    homeTeam: "",
    awayTeam: "",
    time: "",
    date: "",
  });

  const handleGameSelect = (gameData) => {
    setSelectedGame(gameData); // Update the parent's state when a game is selected
  };

  // console.log(selectedGame);

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div>
        <GameList onGameSelect={handleGameSelect} />
      </div>
      <div className="flex-grow p-2 md:overflow-y-auto md:p-[16px]">
        <div>
          {/* <h2>Selected Game:</h2>
        <p>Home Team: {selectedGame?.homeTeam || "No game selected"}</p>
        <p>Away Team: {selectedGame?.awayTeam || "No game selected"}</p>
        <p>Time: {selectedGame?.time || "No time selected"}</p>
        <p>Date: {selectedGame?.date || "No date selected"}</p> */}
          {selectedGame?.homeTeam ? (
             <ParlayList selectedGame={selectedGame} />
          ) : (
            <p className="text-center font-black text-4xl mb-6">Please Select a Game</p>
          )}
         
        </div>
      </div>
      <br />
    </div>
  );
}
