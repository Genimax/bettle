import BorderedBlock from "../shared/BorderedBlock";
import Timer from "../unique/Timer";

const Hero = ({ isCompetitionActive, dateUNIX }) => {
  const timestamp = dateUNIX ? new Date(Number(dateUNIX) * 1000) : null;

  return (
    <BorderedBlock>
      <div className="flex flex-col lg:flex-row flex-wrap container gap-10 lg:gap-4 justify-between px-4 sm:px-8 md:px-16">
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-between">
          <h1 className="text-xl sm:text-3xl font-black">WELCOME TO BETTLE</h1>
          <p className="text-lg sm:text-l ">
            Bet on your favorite team and win cryptocurrency!
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black">
            {!isCompetitionActive ? "NEXT COMPETITION" : "TIME LEFT"}:
          </h2>
          <Timer timestamp={timestamp} />
        </div>
      </div>
    </BorderedBlock>
  );
};

export default Hero;
