import HowItWorks from "../unique/HowItWorks";
import Footer from "../shared/Footer";
import Hero from "../unique/Hero";
import { useTonAddress } from "@tonconnect/ui-react";
import Dashboard from "../shared/Dashboard";
import TeamInterface from "@/components/shared/TeamInterface";
import ResultsPanel from "@/components/unique/ResultsPanel";
import useStore from "@/store";
import { useBettleContract } from "@/hooks/useBettleContract";

const HomePage = () => {
  const modal = useStore((state) => state.modal);
  const address = useTonAddress();
  const { summary } = useBettleContract();
  console.log(summary);

  return (
    <>
      {modal}
      <Hero
        isCompetitionActive={summary?.isCompetitionActive}
        dateUNIX={summary?.nextDate}
      />
      <h3 className="font-thin uppercase text-[#D2D7FF] text-2xl lg:text-5xl w-4/6 text-center">
        Place your bet on a team using cryptocurrency and join the month-long
        competition
      </h3>
      <ResultsPanel data={summary} />
      <TeamInterface isCompetitionActive={summary?.isCompetitionActive} />
      <Dashboard address={address} />
      <HowItWorks />
      <Footer />
    </>
  );
};

export default HomePage;
