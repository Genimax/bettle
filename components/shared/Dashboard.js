import ShareIcon from "@/public/share.svg";
import Image from "next/image";
import useStore from "@/store";
import ModalWindowShare from "@/components/shared/ModalWindowShare";
import { findConfigById } from "@/utils/configTools";

const Dashboard = ({ address }) => {
  if (!address) return null;

  const setModal = useStore((state) => state.setModal);
  const feed = [
    {
      id: 1,
      competitionId: 0,
      date: "07/27/2024",
      type: "win",
      winnersTeam: {
        color: "red",
      },
      looseTeam: {
        color: "blue",
      },
      contributedAmount: "0.007",
      amount: "0.013",
    },
    {
      id: 2,
      competitionId: 0,
      date: "07/27/2024",
      type: "win",
      winnersTeam: {
        color: "red",
      },
      looseTeam: {
        color: "blue",
      },
      contributedAmount: "0.007",
      amount: "0.013",
    },
    {
      id: 3,
      competitionId: 0,
      date: "06/27/2024",
      type: "bet",
      team: {
        color: "red",
        name: "dogs",
      },
      amount: "0.003",
    },
    {
      competitionId: 0,
      id: 4,
      date: "06/28/2024",
      type: "bet",
      team: {
        color: "red",
        name: "dogs",
      },
      amount: "0.004",
    },
    {
      competitionId: 0,
      id: 5,
      date: "06/28/2024",
      type: "bet",
      team: {
        color: "red",
        name: "dogs",
      },
      amount: "0.004",
    },
  ];
  // const feed = [];

  return (
    <div className="bg-[#0F0F0F] container w-full lg:w-4/6 px-4 sm:px-10 md:px-12 py-8 sm:py-10 md:py-8 rounded-xl">
      <h4 className="text-2xl text-center font-thin">YOUR FEED:</h4>
      <div className="min-h-60 h-60  p-6">
        {!!feed.length && (
          <div className="w-full max-h-60 overflow-y-auto pr-4 flex flex-col gap-4">
            {feed.map((item) => (
              <div className="text-center relative" key={item.id}>
                {item.type === "win" && (
                  <>
                    <button
                      onClick={() => {
                        setModal(
                          <ModalWindowShare
                            team={item.winnersTeam}
                            type={"win"}
                            competitionId={item.competitionId}
                          />
                        );
                      }}
                      className="w-6 h-6 absolute top-0 bottom-0 right-6 m-auto hover:scale-125 transition-all"
                    >
                      <Image src={ShareIcon} alt="share icon" />
                    </button>

                    <p
                      className="text-lg bg-[#212121] py-2 px-16 rounded-xl"
                      style={{
                        color:
                          item.winnersTeam.color === "red"
                            ? "#DE883F"
                            : "#1B7BD4",
                      }}
                    >
                      Congratulations! Team{" "}
                      {findConfigById(item.competitionId)[
                        item.winnersTeam.color
                      ].name.toUpperCase()}{" "}
                      has defeated Team{" "}
                      {findConfigById(item.competitionId)[
                        item.looseTeam.color
                      ].name.toUpperCase()}
                      . Your contribution amounted to {item.contributedAmount}{" "}
                      TON, your winnings are{" "}
                      <span className="font-bold">{item.amount} TON</span>.
                    </p>
                  </>
                )}
                {item.type === "bet" && (
                  <p className="text-lg bg-[#212121] py-2 px-10 rounded-xl text-[#787878]">
                    {item.date}: You have placed a bet of {item.amount} TON on
                    Team{" "}
                    {findConfigById(item.competitionId)[
                      item.team.color
                    ].name.toUpperCase()}
                    .
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
        {!feed.length && (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-2xl opacity-15">NO TRANSACTIONS</p>
          </div>
        )}
      </div>
      <div className="pt-10 w-full flex justify-end">
        <p
          className="text-2xl text-right w-fit"
          style={{
            backgroundImage: "linear-gradient(90deg, #DE883F, #1B7BD4)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            display: "inline-block",
          }}
        >
          Total TON Earned:{" "}
          {feed
            .filter((all) => all.type === "win")
            .reduce((acc, item) => acc + Number(item.amount), 0)}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
