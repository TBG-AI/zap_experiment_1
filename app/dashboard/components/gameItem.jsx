import teamLogos from "../../utils/teamLogos";
import { Card, CardBody } from "@nextui-org/react";
import { Image } from "@nextui-org/image";
import { useState } from "react";

export function GameItem({ homeTeam, awayTeam, time }) {
  const [selectedGame, setSelectedGame] = useState({
    homeTeam: "",
    awayTeam: "",
    time: "",
  });
  const homeTeamLogo = teamLogos[homeTeam];
  const awayTeamLogo = teamLogos[awayTeam];

  const handlePress = () => {
    setSelectedGame({
      homeTeam: homeTeam,
      awayTeam: awayTeam,
      time: time,
    });
    console.log("Selected Game:", selectedGame);
  };

  return (
    <Card isHoverable isPressable allowTextSelectionOnPress className="w-[500px]" onPress={handlePress}>
      <CardBody className="flex">
        <div className="flex justify-center items-center">
        <div className = "flex justify-between items-center">
        <p className = "text-lg">{homeTeam}</p>
        <Image
          alt="Home Team Logo"
          src={homeTeamLogo}
          className="m-2"
        />
        </div>

        <p className = "text-[#a6a6a6] text-sm items-center">{time}</p>

       <div className = "flex justify-between items-center">
        <Image
          alt="Away Team Logo"
          src={awayTeamLogo}
          className="m-2"
        />
        <p className = "text-lg">{awayTeam}</p>
        </div>
        </div>
      </CardBody>
    </Card>
  );
}
