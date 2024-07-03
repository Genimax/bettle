import teamConfig from "../../config/teamConfig";

const Dashboard = () => {
  const feed = [
    {
      id: 1,
      date: "07/27/2024",
      type: "win",
      winnersTeam: "red",
      looseTeam: "blue",
      contributedAmount: "0.007",
      amount: "0.013",
    },
    {
      id: 2,
      date: "07/27/2024",
      type: "win",
      winnersTeam: "red",
      looseTeam: "blue",
      contributedAmount: "0.007",
      amount: "0.013",
    },
    { id: 3, date: "06/27/2024", type: "bet", team: "red", amount: "0.003" },
    {
      id: 4,
      date: "06/28/2024",
      type: "bet",
      team: "red",
      amount: "0.004",
    },
    {
      id: 5,
      date: "06/28/2024",
      type: "bet",
      team: "red",
      amount: "0.004",
    },
  ];

  return (
    <div className="bg-[#0F0F0F] container w-full lg:w-4/6 px-4 sm:px-10 md:px-20 py-8 sm:py-10 md:py-12 rounded-xl">
      <h4 className="text-2xl text-center font-thin">YOUR FEED:</h4>
      <div className="min-h-60  p-6">
        {!!feed.length && (
          <div className="w-full max-h-60 overflow-y-auto pr-4 flex flex-col gap-4">
            {feed.map((item, index) => (
              <div className="text-center" key={item.id}>
                {item.type === "win" && (
                  <p
                    className="text-lg bg-[#212121] py-2 px-10 rounded-xl"
                    style={{
                      color: item.winnersTeam === "red" ? "#DE883F" : "#1B7BD4",
                    }}
                  >
                    Congratulations! Team{" "}
                    {teamConfig[item.winnersTeam].name.toUpperCase()} has
                    defeated Team{" "}
                    {teamConfig[item.looseTeam].name.toUpperCase()}. Your
                    contribution amounted to {item.contributedAmount} TON, your
                    winnings are{" "}
                    <span className="font-bold">{item.amount} TON</span>.
                  </p>
                )}
                {item.type === "bet" && (
                  <p className="text-lg bg-[#212121] py-2 px-10 rounded-xl text-[#787878]">
                    {item.date}: You have placed a bet of {item.amount} TON on
                    Team {teamConfig[item.team].name.toUpperCase()}.
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
        {!feed.length && (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-2xl opacity-15">NO DATA</p>
          </div>
        )}
      </div>
      <div className="w-full flex justify-end">
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
