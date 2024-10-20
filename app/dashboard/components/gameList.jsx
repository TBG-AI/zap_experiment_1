"use client";

import { useState } from "react";
import { GameItem } from "./gameItem";
import { Accordion, AccordionItem } from "@nextui-org/react";

// Sample game data
const links = [
  { homeTeam: "Chelsea", awayTeam: "Arsenal", time: "7:30 PM", date: "Saturday 26 October 2024" },
  { homeTeam: "Man City", awayTeam: "Man United", time: "8:30 PM", date: "Saturday 26 October 2024" },
  { homeTeam: "Tottenham", awayTeam: "Liverpool", time: "9:30 PM", date: "Saturday 26 October 2024" },
  { homeTeam: "Chelsea", awayTeam: "Arsenal", time: "7:30 PM", date: "Sunday 27 October 2024" },
  { homeTeam: "Man City", awayTeam: "Man United", time: "8:30 PM", date: "Sunday 27 October 2024" },
  { homeTeam: "Tottenham", awayTeam: "Liverpool", time: "9:30 PM", date: "Sunday 27 October 2024" },
  { homeTeam: "Chelsea", awayTeam: "Arsenal", time: "7:30 PM", date: "Monday 28 October 2024" },
  { homeTeam: "Man City", awayTeam: "Man United", time: "8:30 PM", date: "Monday 28 October 2024" },
  { homeTeam: "Tottenham", awayTeam: "Liverpool", time: "9:30 PM", date: "Monday 28 October 2024" },
];

export default function GameList({ onGameSelect }) {
  const [selectedGame, setSelectedGame] = useState({
    homeTeam: "",
    awayTeam: "",
    time: "",
    date: "",
  });

  // Group games by their date
  const gamesByDate = links.reduce((acc, game) => {
    const { date } = game;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(game);
    return acc;
  }, {});

  const handleGameSelect = (gameData) => {
    setSelectedGame(gameData); // Update the state in the parent
    onGameSelect(gameData);
  };

  return (
 <div className="flex h-full flex-col px-3 py-4 md:px-2 w-[580px]">
    <div className="flex flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
      <p className="text-center font-black text-4xl">EPL Fixtures</p>
      <Accordion variant="splitted" fullWidth >
        {/* Render AccordionItem for each date */}
        {Object.keys(gamesByDate).map((date) => (
          <AccordionItem key={date} title={<div className="w-full text-center">{date}</div>} >
            {gamesByDate[date].map((game, index) => (
              <div key={index} className="mb-2">
                <GameItem
                  homeTeam={game.homeTeam}
                  awayTeam={game.awayTeam}
                  time={game.time}
                  date = {game.date}
                  onGameSelect={handleGameSelect}
                />
              </div>
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </div>

    <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block pt-50">
    </div>
    </div>
  );
}
