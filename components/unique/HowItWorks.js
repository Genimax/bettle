import BorderedBlock from "@/components/shared/BorderedBlock";
import Sequence from "@/components/unique/Sequence";

const howItWorksText = [
  {
    name: "Place Your Bet",
    description:
      "Connect your wallet, choose a team to support and place your bet. You CAN bet on multiple teams.",
  },
  {
    name: "Monthly Competition",
    description:
      "The teams compete over a month-long period. You won't see the teams progress until the competition is over.",
  },
  {
    name: "Winner Takes All",
    description:
      "At the end of the month, the winning team takes the combined pool of all bets (-8% fee).",
  },
  {
    name: "Proportional Payouts",
    description:
      "Your winnings are distributed proportionally based on your contribution to the team's total bets.",
  },
  {
    name: "Fair and Transparent",
    description:
      "Enjoy a transparent and secure betting experience with no need for personal information or KYC.",
  },
];

const HowItWorks = () => {
  return (
    <BorderedBlock>
      <div className="w-full flex flex-col items-center gap-12">
        <h2 className="font-thin uppercase text-[#D2D7FF] text-2xl lg:text-5xl text-center">
          HOW IT WORKS
        </h2>
        <ol className="w-4/5 flex flex-col gap-8 text-lg">
          {howItWorksText.map((item, index) => (
            <li key={item.name}>
              <span className="font-bold">
                {index + 1}. {item.name}:
              </span>{" "}
              {item.description}
            </li>
          ))}
        </ol>
        <Sequence />
      </div>
    </BorderedBlock>
  );
};

export default HowItWorks;
