import ShareIcon from "@/public/share.svg";
import Image from "next/image";
import useStore from "@/store";
import ModalWindowShare from "@/components/shared/ModalWindowShare";
import { findConfigById } from "@/utils/configTools";
import { useBettleContract } from "@/hooks/useBettleContract";
import { fromNano } from "ton-core";

const Dashboard = ({ address }) => {
  if (!address) return null;

  const setModal = useStore((state) => state.setModal);
  const { feed } = useBettleContract();

  return (
    <div className="bg-[#0F0F0F] container w-full lg:w-4/6 px-4 sm:px-10 md:px-12 py-8 sm:py-10 md:py-8 rounded-xl">
      <h4 className="text-2xl text-center font-thin">YOUR FEED:</h4>
      <div className="min-h-60 h-60  p-6">
        {!!feed?.items?.values().length && (
          <div className="w-full max-h-60 overflow-y-auto pr-4 flex flex-col gap-4">
            {feed.items
              ?.values()
              .reverse()
              .map((item, index) => (
                <div className="text-center relative" key={index}>
                  {item.notificationType === "win" && (
                    <>
                      <button
                        onClick={() => {
                          setModal(
                            <ModalWindowShare
                              team={item.winnersTeam}
                              type={"win"}
                              competitionId={Number(item.competitionId)}
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
                        {findConfigById(Number(item.competitionId))[
                          item.winnersTeam.color
                        ].name.toUpperCase()}{" "}
                        has defeated Team{" "}
                        {findConfigById(Number(item.competitionId))[
                          item.looseTeam.color
                        ].name.toUpperCase()}
                        . TON, your winnings are{" "}
                        <span className="font-bold">
                          {fromNano(item.amount)} TON
                        </span>
                        .
                      </p>
                    </>
                  )}
                  {item.notificationType === "refund" && (
                    <p className="text-lg bg-[#212121] py-2 px-10 rounded-xl text-[#787878]">
                      {new Date(Number(item.date) * 1000).toLocaleDateString()}:
                      We have refunded you your bets in the amount of{" "}
                      {fromNano(item.amount)} TON as the opposing team either
                      did not fight or you were tied.
                    </p>
                  )}
                  {item.notificationType === "bet" && (
                    <p className="text-lg bg-[#212121] py-2 px-10 rounded-xl text-[#787878]">
                      {new Date(Number(item.date) * 1000).toLocaleDateString()}:
                      You have placed a bet of {fromNano(item.amount)} TON.
                    </p>
                  )}
                </div>
              ))}
          </div>
        )}
        {!feed?.items?.values().length && (
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
          {feed?.items?.values()?.length
            ? fromNano(
                feed?.items
                  ?.values()
                  ?.filter((all) => all.notificationType === "win")
                  .reduce((acc, item) => acc + Number(item.amount), 0)
              )
            : 0}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
