import TeamCard from "@/components/unique/TeamCard";
import HowItWorks from "@/components/unique/howItWorks";
import Footer from "@/components/shared/Footer";
import ContributionPanel from "@/components/shared/ContributionPanel";
import Slider from "@/components/unique/Slider";
import Hero from "@/components/unique/Hero";
import { useTonAddress } from "@tonconnect/ui-react";
import Dashboard from "@/components/shared/Dashboard";

const HomePage = () => {
  const address = useTonAddress();

  return (
    <>
      <Hero />
      <h3 className="font-thin uppercase text-[#D2D7FF] text-2xl lg:text-5xl w-4/6 text-center">
        Place your bet on a team using cryptocurrency and join the month-long
        competition
      </h3>
      <div className="flex flex-wrap container gap-16 flex-row w-full justify-evenly my-[-5%] mb-10">
        <div className="flex flex-wrap container gap-12 flex-row w-full justify-evenly">
          <TeamCard team="red" />
          <TeamCard team="blue" />
        </div>
        {address && (
          <div className="flex flex-wrap container gap-12 w-full justify-evenly">
            <ContributionPanel team={"red"} />
            <ContributionPanel team={"blue"} />
          </div>
        )}
      </div>
      {address && <Dashboard />}
      <HowItWorks />
      {!address && <Slider />}
      <Footer />
    </>
  );
};

export default HomePage;
