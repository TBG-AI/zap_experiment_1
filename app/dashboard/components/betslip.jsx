"use client";

import { useState } from "react";
import { Button, Card, Input, Divider } from "@nextui-org/react";

export default function BetSlip({ bets, handleRemoveBet, tokensLeft }) {
  // Add state to manage the wager input
  const [wager, setWager] = useState("");

  // Function to handle the wager input change and prevent negative values
  const handleWagerChange = (e) => {
    const value = e.target.value;
    if (value >= 0 || value === "") {
      setWager(value);
    }
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold text-xl">Selected Bets</h2>
        <Card className="bg-yellow-400">
          <p className="flex mx-[4px] justify-center items-center">
            💰 Left: 1000
          </p>
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

      <Divider className="my-[20px]" />

      <div className = "flex items-center justify-between">
        <Input
          type="number"
          label={<span className="text-lg"> Wager </span>}
          value={wager}
          color="success"
          variant="bordered"
          onChange={handleWagerChange}
          placeholder="0.00"
          className="w-[200px]"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
        />

        <p className="text-lg font-black"> 💰To Win: {<span className="text-3xl text-green-500">$1000</span>}</p>
      </div>

      <Button color="success" className="w-full my-[30px]">
        <p className="text-center font-black text-xl text-white">Bet Now</p>
      </Button>
    </div>
  );
}
