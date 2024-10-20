"use client"

import { useState } from "react";
// import Link from "next/link";
import {GameItem} from "./gameItem";

const links = [
  { homeTeam: "Chelsea", awayTeam: "Arsenal", time: "7:30 PM" },
  { homeTeam: "Man City", awayTeam: "Man United", time: "8:30 PM" },
  { homeTeam: "Tottenham", awayTeam: "Liverpool", time: "9:30 PM" },
];

export default function GameList({onGameSelect}) {
  const [selectedGame, setSelectedGame] = useState({
    homeTeam: "",
    awayTeam: "",
    time: "",
  });

  const handleGameSelect = (gameData) => {
    setSelectedGame(gameData); // Update the state in the parent
    onGameSelect(gameData);
  };


  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      {/* <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      ></Link> */}
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <>
          {links.map((link) => {
            return (
              <div>
                <GameItem
                  homeTeam={link.homeTeam}
                  awayTeam={link.awayTeam}
                  time={link.time}
                  onGameSelect={handleGameSelect}
                />
              </div>
            );
          })}
        </>
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
    </div>
  );
}
