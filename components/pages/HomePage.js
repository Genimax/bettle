import HowItWorks from "../unique/HowItWorks";
import Footer from "../shared/Footer";
import Slider from "../unique/Slider";
import Hero from "../unique/Hero";
import { useTonAddress } from "@tonconnect/ui-react";
import Dashboard from "../shared/Dashboard";
import TeamInterface from "@/components/shared/TeamInterface";
import ResultsPanel from "@/components/unique/ResultsPanel";
import useStore from "@/store";

const HomePage = () => {
  const address = useTonAddress();
  const modal = useStore((state) => state.modal);

  const data = {
    competitionId: 0,
    isCompetitionActive: true,
    winnersTeam: {
      color: "red",
      totalCollected: 10025.6,
    },
    losersTeam: {
      color: "blue",
      totalCollected: 9568.8,
    },
  };

  return (
    <>
      {modal}
      <Hero />
      <h3 className="font-thin uppercase text-[#D2D7FF] text-2xl lg:text-5xl w-4/6 text-center">
        Place your bet on a team using cryptocurrency and join the month-long
        competition
      </h3>
      <ResultsPanel data={data} />
      <TeamInterface isCompetitionActive={data.isCompetitionActive} />
      <Dashboard address={address} />
      <HowItWorks />
      {!address && <Slider />}
      <Footer />
    </>
  );
};

export default HomePage;
