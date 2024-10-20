"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";

// Bet Data
const overUnderBets = [
  { name: "Over/Under 0.5 Goals", over: -3500, under: +4000 },
  { name: "Over/Under 1.5 Goals", over: -3500, under: +4000 },
  { name: "Over/Under 2.5 Goals", over: -3500, under: +4000 },
];

const bothTeamToScoreBets = [
  { name: "Both Team To Score", over: -3500, under: +4000 },
  { name: "Both Team to Score in the First Half", over: -3500, under: +4000 },
];

const whoWinsBets = [
  { name: "Which Team will Win", home: -3500, tie: -3000, away: +4000 },
];

const scoreBets = [
  {
    name: "Final Correct Score",
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
    name: "Half-Time Correct Score",
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

export default function ParleyList() {
  return (
    <>
      <p className="text-center font-black text-4xl">Bets</p>
      <Accordion variant="splitted" className="py-4" allowMultiple>
        {/* Over/Under Bets */}
        <AccordionItem key="over-under" title="Over/Under Bets">
          {overUnderBets.map((bet, index) => (
            <div key={index} className="mb-4">
              <p className="font-bold mb-2">{bet.name}</p>
              <div className="flex space-x-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  Over: {bet.over}
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded">
                  Under: {bet.under}
                </button>
              </div>
            </div>
          ))}
        </AccordionItem>
        
        {/* Both Team To Score Bets */}
        <AccordionItem key="both-team" title="Both Teams To Score Bets">
          {bothTeamToScoreBets.map((bet, index) => (
            <div key={index} className="mb-4">
              <p className="font-bold mb-2">{bet.name}</p>
              <div className="flex space-x-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  Over: {bet.over}
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded">
                  Under: {bet.under}
                </button>
              </div>
            </div>
          ))}
        </AccordionItem>

        {/* Who Wins Bets */}
        <AccordionItem key="who-wins" title="Who Wins Bets">
          {whoWinsBets.map((bet, index) => (
            <div key={index} className="mb-4">
              <p className="font-bold mb-2">{bet.name}</p>
              <div className="flex space-x-4">
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
          ))}
        </AccordionItem>

        {/* Correct Score Bets */}
        <AccordionItem key="correct-score" title="Correct Score Bets">
          {scoreBets.map((bet, index) => (
            <div key={index} className="mb-4">
              <p className="font-bold mb-2">{bet.name}</p>
              <div className="grid grid-cols-2 gap-4">
                {bet.scores.map((score, i) => (
                  <button
                    key={i}
                    className="bg-gray-200 text-black px-4 py-2 rounded"
                  >
                    {Object.keys(score)[0]}: {Object.values(score)[0]}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </AccordionItem>
      </Accordion>
    </>
  );
}
