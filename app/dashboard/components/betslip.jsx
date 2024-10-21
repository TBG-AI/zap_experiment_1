"use client";

import { Button } from "@nextui-org/react";

export default function BetSlip({ bets, handleRemoveBet }) {
  return (
    <div className="border p-4 rounded-lg shadow-lg ">
      <h2 className="font-bold text-xl mb-4">Selected Bets</h2>
      {bets.length === 0 ? (
        <p>No bets selected yet.</p>
      ) : (
        <ul >
          {bets.map((bet, index) => (
            <li key={index} className="flex justify-between items-center mb-1">
              {`${bet.name} - ${bet.type || bet.score}: ${bet.value}`}
              <Button size = "sm"
                className="bg-red-500 text-white px-2 py-1 ml-4 rounded"
                onClick={() => handleRemoveBet(index)}
              >
                Remove
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
