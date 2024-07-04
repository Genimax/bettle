import TeamCard from "@/components/unique/TeamCard";
import ContributionPanel from "@/components/shared/ContributionPanel";
import { useTonAddress } from "@tonconnect/ui-react";

const TeamInterface = ({ isCompetitionActive }) => {
  const address = useTonAddress();

  if (!isCompetitionActive) return null;
  return (
    <div className="flex flex-wrap container gap-16 flex-row w-full justify-evenly my-[-10px] mb-10">
      <div className="flex flex-wrap container gap-12 flex-row w-full justify-evenly">
        <div>
          <TeamCard team="red" />
          {address && <ContributionPanel team={"red"} />}
        </div>
        <div>
          <TeamCard team="blue" />
          {address && <ContributionPanel team={"blue"} />}
        </div>
      </div>
    </div>
  );
};

export default TeamInterface;
