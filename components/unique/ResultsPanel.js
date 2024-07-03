import { extractCurrentConfig } from "@/utils/configTools";
import { CldImage } from "next-cloudinary";

const ResultsPanel = ({ data }) => {
  const { isCompetitionActive, winnersTeam, losersTeam } = data;
  if (isCompetitionActive) return null;

  const config = extractCurrentConfig();

  const winText = config[winnersTeam.color].winText;

  let winColor, looseColor, winNeon, winBorder, loseBorder;

  if (winnersTeam.color === "red") {
    winColor = "text-main-orange";
    winNeon = "glow-red";
    winBorder = "border-main-orange";
    loseBorder = "border-main-blue";
  } else {
    winColor = "text-main-blue";
    winNeon = "glow-blue";
    winBorder = "border-main-blue";
    loseBorder = "border-main-orange";
  }

  return (
    <div className="container w-full lg:w-4/6 flex flex-col lg:flex-row justify-between items-center">
      <div className="w-1/2 flex flex-col gap-10">
        <p className={`w-full text-3xl font-light ${winColor} ${winNeon}`}>
          {winText.toUpperCase()}
        </p>
        <p className="w-full text-2xl font-bold">
          STAY TUNED FOR OUR NEXT BETTLE!
        </p>
      </div>
      <div className="w-1/2 flex flex-col items-center lg:items-end pt-10 lg:pt-0 gap-8 lg:gap-0">
        <div className="flex flex-col lg:flex-row justify-start items-center w-full">
          <CldImage
            className={`${
              winnersTeam.color === "red"
                ? "scale-x-[-1] animate-wiggleFlipped"
                : "animate-wiggle"
            } lg:mr-[-10%] mt-[-10%]`}
            alt={"winners icon"}
            src={config[winnersTeam.color].cloudinaryImageId}
            height={200}
            width={300}
          />
          <div
            className={`px-8 bg-transparent h-fit py-6 w-full border-4 rounded-xl text-center content-center font-bold text-xl ${winBorder}`}
          >
            {config[winnersTeam.color].name.toUpperCase()}:{" "}
            {winnersTeam.totalCollected} TON
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-start items-center w-5/6">
          <CldImage
            className={`${
              losersTeam.color === "red"
                ? "scale-x-[-1] animate-wiggleFlipped"
                : "animate-wiggle"
            } lg:mr-[-10%] z-10 animate-wiggle`}
            alt={"losers icon"}
            src={config[losersTeam.color].cloudinaryImageId}
            height={150}
            width={150}
          />
          <div
            className={`px-8 bg-transparent h-fit py-6 w-full border-4 rounded-xl text-center content-center font-bold  text-xl ${loseBorder}`}
          >
            {config[losersTeam.color].name.toUpperCase()}:{" "}
            {losersTeam.totalCollected} TON
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPanel;
