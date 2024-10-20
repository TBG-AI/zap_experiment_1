"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";

// Bet Data
const overUnderBets = [
  { name: "Over/Under 0.5 Goals", over: -3500, under: +4000 },
  { name: "Over/Under 1.5 Goals", over: -3500, under: +4000 },
  { name: "Over/Under 2.5 Goals", over: -3500, under: +4000 },
];

const bothTeamToScoreBets = [
  { name: "Both Team To Score", yes: -3500, no: +4000 },
  { name: "Both Team to Score in the First Half", yes: -3500, no: +4000 },
];

const whoWinsBets = [
  { name: "Which Team will Win", home: -3500, tie: -3000, away: +4000 },
];

const scoreBets = [
  {
    name: "Final Score",
    scores: [
      { "0-0": +6000 },
      { "0-1": +6000 },
      { "1-0": +6000 },
      { "1-1": +6000 },
      { "2-0": +6000 },
      { "0-2": +6000 },
    ],
  },
  {
    name: "Half-Time Score",
    scores: [
      { "0-0": +6000 },
      { "0-1": +6000 },
      { "1-0": +6000 },
      { "1-1": +6000 },
      { "2-0": +6000 },
      { "0-2": +6000 },
    ],
  },
];

export default function ParleyList({ selectedGame }) {
  return (
    <div>
      <p className="text-center font-black text-4xl mb-6">Bets for {`${selectedGame.homeTeam} vs ${selectedGame.awayTeam}`}</p>

      <div className="flex justify-center items-center">
        <div className="w-[80%] py-4">
          {/* Card for Over/Under Bets */}
          <div className="mb-6 border p-4 rounded-lg shadow-lg">
            <h2 className="text-left font-bold text-xl mb-4 ml-4">
              Over/Under
            </h2>
            <Accordion allowMultiple variant="splitted">
              {overUnderBets.map((bet, index) => (
                <AccordionItem
                  key={index}
                  title={<div className="text-left text-md">{bet.name}</div>}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{`${selectedGame.homeTeam} vs ${selectedGame.awayTeam}`}</span>
                    <div className="flex space-x-4">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded">
                        Over: {bet.over}
                      </button>
                      <button className="bg-red-500 text-white px-4 py-2 rounded">
                        Under: {bet.under}
                      </button>
                    </div>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Card for Both Team To Score Bets */}
          <div className="mb-6 border p-4 rounded-lg shadow-lg">
            <h2 className="ml-4 font-bold text-xl mb-4">
              Both Teams To Score
            </h2>
            <Accordion variant="splitted" allowMultiple>
              {bothTeamToScoreBets.map((bet, index) => (
                <AccordionItem
                  key={index}
                  title={<div className="text-md">{bet.name}</div>}
                >
                  <div className = "flex justify-between items-center">
                  <span className="text-sm">{`${selectedGame.homeTeam} vs ${selectedGame.awayTeam}`}</span>
                  <div className="flex justify-center space-x-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                      Yes: {bet.yes}
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded">
                      No: {bet.no}
                    </button>
                  </div>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Card for Who Wins Bets */}
          <div className="mb-6 border p-4 rounded-lg shadow-lg">
            <h2 className="ml-4 font-bold text-xl mb-4">
              Who Wins
            </h2>
            <Accordion variant="splitted" allowMultiple>
              {whoWinsBets.map((bet, index) => (
                <AccordionItem
                  key={index}
                  title={<div className="text-md">{bet.name}</div>}
                >
                <div className = "flex justify-between items-center">
                  <span className="text-sm">{`${selectedGame.homeTeam} vs ${selectedGame.awayTeam}`}</span>
                  <div className="flex justify-center space-x-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                      Home: {bet.home}
                    </button>
                    <button className="bg-yellow-500 text-black px-4 py-2 rounded">
                      Tie: {bet.tie}
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded">
                      Away: {bet.away}
                    </button>
                  </div>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Card for Correct Score Bets */}
          <div className="mb-6 border p-4 rounded-lg shadow-lg">
            <h2 className="ml-4 font-bold text-xl mb-4">
              Guess the Score
            </h2>
            <Accordion variant="splitted" allowMultiple>
              {scoreBets.map((bet, index) => (
                <AccordionItem
                  key={index}
                  title={<div className="text-md">{bet.name}</div>}
                >
                  <div className="grid grid-cols-2 gap-4 justify-center">
                    {bet.scores.map((score, i) => (
                      <button
                        key={i}
                        className="bg-gray-200 text-black px-4 py-2 rounded"
                      >
                        {Object.keys(score)[0]}: {Object.values(score)[0]}
                      </button>
                    ))}
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
