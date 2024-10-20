// import {GameBox} from "./components/gameBox"



export default function Page({selectedGame}) {
   
    return (
      <div>
       {/* <GameBox homeTeam="Chelsea" awayTeam="Arsenal" time = "10:00 AM"/> */}
      <p>Game Dashboard</p>
      <div>
        <h2>Selected Game:</h2>
        <p>Home Team: {selectedGame?.homeTeam || "No game selected"}</p>
        <p>Away Team: {selectedGame?.awayTeam || "No game selected"}</p>
        <p>Time: {selectedGame?.time || "No time selected"}</p>
      </div>
      </div>
    );
  }