"use client";

import { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import BetSlip from "./betslip";

// Bet Data
const overUnderBets = [
  { name: "Over/Under 0.5 Goals", over: -3500, under: +4000 },
  { name: "Over/Under 1.5 Goals", over: -3500, under: +4000 },
  { name: "Over/Under 2.5 Goals", over: -3500, under: +4000 },
];

const bothTeamToScoreBets = [
  { name: "Both Team To Score in the First Half", yes: -3500, no: +4000 },
  { name: "Both Team to Score in the Second Half", yes: -3500, no: +4000 },
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

export default function ParleyList({ selectedGame, onBetsChange }) {
  const [bets, setBets] = useState([]);

  const handleAddBet = (bet) => {
    setBets((prevBets) => {
      let newBets = [...prevBets];
      if (bet.name.includes("Over/Under")) {
        if (
          newBets.some((existingBet) => existingBet.name.includes("Over/Under"))
        ) {
          alert(
            "You cannot select more than one Over/Under bet. Replacing the previous Over/Under bet."
          );
        }
        newBets = newBets.filter(
          (existingBet) => !existingBet.name.includes("Over/Under")
        );
      }
      if (bet.name.includes("Both Team To Score")) {
        if (
          newBets.some((existingBet) =>
            existingBet.name.includes("Both Team To Score")
          )
        ) {
          alert(
            "You cannot select both Yes and No for Both Team To Score bets. Replacing the previous bet."
          );
        }
        newBets = newBets.filter(
          (existingBet) => !existingBet.name.includes("Both Team To Score")
        );
      }
      if (bet.name.includes("Both Team to Score in the First Half")) {
        if (
          newBets.some((existingBet) =>
            existingBet.name.includes("Both Team to Score in the First Half")
          )
        ) {
          alert(
            "You cannot select both Yes and No for Both Team to Score in the First Half bets. Replacing the previous bet."
          );
        }
        newBets = newBets.filter(
          (existingBet) =>
            !existingBet.name.includes("Both Team to Score in the First Half")
        );
      }
      if (bet.name.includes("Both Team to Score in the Second Half")) {
        if (
          newBets.some((existingBet) =>
            existingBet.name.includes("Both Team to Score in the Second Half")
          )
        ) {
          alert(
            "You cannot select both Yes and No for Both Team to Score in the Second Half bets. Replacing the previous bet."
          );
        }
        newBets = newBets.filter(
          (existingBet) =>
            !existingBet.name.includes("Both Team to Score in the Second Half")
        );
      }
      if (bet.name.includes("Which Team will Win")) {
        if (
          newBets.some((existingBet) =>
            existingBet.name.includes("Which Team will Win")
          )
        ) {
          alert(
            "You can only select one option from Home, Tie, or Away for Which Team will Win bets. Replacing the previous bet."
          );
        }
        newBets = newBets.filter(
          (existingBet) => !existingBet.name.includes("Which Team will Win")
        );
      }
      if (bet.name.includes("Score")) {
        if (newBets.some((existingBet) => existingBet.name.includes("Score"))) {
          alert(
            "You can only select one option from Final Score or Half-Time Score. Replacing the previous bet."
          );
        }
        newBets = newBets.filter(
          (existingBet) => !existingBet.name.includes("Score")
        );
      }
      newBets.push(bet);
      if (onBetsChange) {
        onBetsChange(newBets);
      }
      return newBets;
    });
  };

  const handleRemoveBet = (index) => {
    setBets((prevBets) => {
      const newBets = prevBets.filter((_, i) => i !== index);
      if (onBetsChange) {
        onBetsChange(newBets);
      }
      return newBets;
    });
  };

  return (
    <div className="flex">
      <div className="flex justify-center items-center min-w-[1000px]">
        <div className="w-[98%]">
          {/* Card for Over/Under Bets */}
          <p className="text-center font-black text-4xl mb-6">
            Bets for {`${selectedGame.homeTeam} vs ${selectedGame.awayTeam}`}
          </p>
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
                      <Button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={() =>
                          handleAddBet({
                            ...bet,
                            type: "Over",
                            value: bet.over,
                          })
                        }
                      >
                        Over: {bet.over}
                      </Button>
                      <Button
                        className="bg-red-500 text-white px-4 py-2 rounded"
                        onClick={() =>
                          handleAddBet({
                            ...bet,
                            type: "Under",
                            value: bet.under,
                          })
                        }
                      >
                        Under: {bet.under}
                      </Button>
                    </div>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Card for Both Team To Score Bets */}
          <div className="mb-6 border p-4 rounded-lg shadow-lg">
            <h2 className="ml-4 font-bold text-xl mb-4">Both Teams To Score</h2>
            <Accordion variant="splitted" allowMultiple>
              {bothTeamToScoreBets.map((bet, index) => (
                <AccordionItem
                  key={index}
                  title={<div className="text-md">{bet.name}</div>}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{`${selectedGame.homeTeam} vs ${selectedGame.awayTeam}`}</span>
                    <div className="flex justify-center space-x-4">
                      <Button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={() =>
                          handleAddBet({ ...bet, type: "Yes", value: bet.yes })
                        }
                      >
                        Yes: {bet.yes}
                      </Button>
                      <Button
                        className="bg-red-500 text-white px-4 py-2 rounded"
                        onClick={() =>
                          handleAddBet({ ...bet, type: "No", value: bet.no })
                        }
                      >
                        No: {bet.no}
                      </Button>
                    </div>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Card for Who Wins Bets */}
          <div className="mb-6 border p-4 rounded-lg shadow-lg">
            <h2 className="ml-4 font-bold text-xl mb-4">Who Wins</h2>
            <Accordion variant="splitted" allowMultiple>
              {whoWinsBets.map((bet, index) => (
                <AccordionItem
                  key={index}
                  title={<div className="text-md">{bet.name}</div>}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{`${selectedGame.homeTeam} vs ${selectedGame.awayTeam}`}</span>
                    <div className="flex justify-center space-x-4">
                      <Button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={() =>
                          handleAddBet({
                            ...bet,
                            type: "Home",
                            value: bet.home,
                          })
                        }
                      >
                        Home: {bet.home}
                      </Button>
                      <Button
                        className="bg-yellow-500 text-black px-4 py-2 rounded"
                        onClick={() =>
                          handleAddBet({ ...bet, type: "Tie", value: bet.tie })
                        }
                      >
                        Tie: {bet.tie}
                      </Button>
                      <Button
                        className="bg-red-500 text-white px-4 py-2 rounded"
                        onClick={() =>
                          handleAddBet({
                            ...bet,
                            type: "Away",
                            value: bet.away,
                          })
                        }
                      >
                        Away: {bet.away}
                      </Button>
                    </div>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Card for Correct Score Bets */}
          <div className="mb-6 border p-4 rounded-lg shadow-lg">
            <h2 className="ml-4 font-bold text-xl mb-4">Guess the Score</h2>
            <Accordion variant="splitted" allowMultiple>
              {scoreBets.map((bet, index) => (
                <AccordionItem
                  key={index}
                  title={<div className="text-md">{bet.name}</div>}
                >
                  <div className="grid grid-cols-2 gap-4 justify-center">
                    {bet.scores.map((score, i) => (
                      <Button
                        key={i}
                        className="bg-gray-200 text-black px-4 py-2 rounded"
                        onClick={() =>
                          handleAddBet({
                            ...bet,
                            score: Object.keys(score)[0],
                            value: Object.values(score)[0],
                          })
                        }
                      >
                        {Object.keys(score)[0]}: {Object.values(score)[0]}
                      </Button>
                    ))}
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      <div className="md:overflow-y-auto md:p-[16px] min-w-[500px]">
        <p className="text-center font-black text-4xl mb-6">Betslip</p>
        <BetSlip bets={bets} handleRemoveBet={handleRemoveBet} />
      </div>
    </div>
  );
}
