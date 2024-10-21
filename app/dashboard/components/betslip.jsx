"use client";

import { Button } from "@nextui-org/react";
import { Card, Text } from "@nextui-org/react";

export default function BetSlip({ bets, handleRemoveBet, tokensLeft }) {
  return (
    <div className="border p-4 rounded-lg shadow-lg ">
      <div className="flex justify-between items-center mb-2">
      <h2 className="font-bold text-xl ">Selected Bets</h2>
      <Card className = "bg-green-400" >
        <p className="flex m-[8px] justify-center, items-center">Tokens Left: 1000</p>
      </Card>
      </div>
      
      {bets.length === 0 ? (
        <p>No bets selected yet.</p>
      ) : (
        <ul>
          {bets.map((bet, index) => (
            <li key={index} className="flex justify-between items-center mb-1">
              {`${bet.name} - ${bet.type || bet.score}: ${bet.value}`}
              <Button
                size="sm"
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
