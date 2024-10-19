import teamLogos from '../../utils/teamLogos'


export function GameBox({ homeTeam, awayTeam, time }) {
  const teamLogo = teamLogos["Arsenal"];
  console.log({teamLogo})
  return (
    <div className="w-[417px] h-[78px] relative">
      <div className="w-[417px] h-[78px] left-0 top-0 absolute bg-black rounded-[10px]" />
      <div className="w-[388px] h-[43px] left-[22px] top-[17px] absolute">
        <div className="w-[67px] h-[29px] left-[162px] top-[7px] absolute text-[#a6a6a6] text-sm font-bold font-['Inter'] leading-[34px] tracking-tight">
          7:30 PM
        </div>
        <div className="w-[126px] h-[42px] left-0 top-[1px] absolute">
          <div className="w-[72px] h-3 left-0 top-[15px] absolute text-white text-lg font-bold font-['Inter'] leading-[34px] tracking-tight">
            Arsenal
          </div>
          <img
            className="w-[42px] h-[42px] left-[84px] top-0 absolute rounded-[20px]"
            src={teamLogo}
          />
        </div>
        <div className="w-[134px] h-[42px] left-[254px] top-0 absolute">
          <div className="w-20 h-[11px] left-[54px] top-[16px] absolute text-white text-lg font-bold font-['Inter'] leading-[34px] tracking-tight">
            Chelsea
          </div>
          <img
            className="w-[42px] h-[42px] left-0 top-0 absolute"
            src="https://via.placeholder.com/42x42"
          />
        </div>
      </div>
    </div>
  );
}
