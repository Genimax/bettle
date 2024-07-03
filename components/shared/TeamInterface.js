import TeamCard from "@/components/unique/TeamCard";
import ContributionPanel from "@/components/shared/ContributionPanel";
import { useTonAddress } from "@tonconnect/ui-react";

const TeamInterface = ({ isCompetitionActive }) => {
  const address = useTonAddress();

  if (!isCompetitionActive) return null;
  return (
    <div className="flex flex-wrap container gap-16 flex-row w-full justify-evenly my-[-10px] mb-10">
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
  );
};

export default TeamInterface;
