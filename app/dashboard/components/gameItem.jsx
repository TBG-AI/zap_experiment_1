import teamLogos from "../../utils/teamLogos";
import { Card, CardBody } from "@nextui-org/react";
import { Image } from "@nextui-org/image";
import { useState } from "react";

export function GameItem({ homeTeam, awayTeam, time, date, onGameSelect}) {

  const homeTeamLogo = teamLogos[homeTeam];
  const awayTeamLogo = teamLogos[awayTeam];

  const handlePress = () => {
    onGameSelect({
      homeTeam: homeTeam,
      awayTeam: awayTeam,
      time: time,
      date: date,
    });
   
  };

  return (
    <Card isHoverable isPressable allowTextSelectionOnPress className="w-[500px]" onPress={handlePress}>
      <CardBody className="flex">
        <div className="flex justify-center items-center ">
        <div className = "flex flex-none justify-between items-center w-20">
        <p className = "text-lg text-right">{homeTeam}</p>
        </div>

        <div className = "flex flex-none justify-center items-center w-60">
        <Image
          alt="Home Team Logo"
          src={homeTeamLogo}
          className="m-2"
        />
        <p className = "text-[#a6a6a6] text-sm items-center">{time}</p>
        <Image
          alt="Away Team Logo"
          src={awayTeamLogo}
          className="m-2"
        />
        </div>

        <div className = "flex flex-none justify-between items-center w-20">
        <p className = "text-lg">{awayTeam}</p>
        </div>
        </div>
      </CardBody>
    </Card>
  );
}
