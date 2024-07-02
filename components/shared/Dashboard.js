const Dashboard = () => {
  const feed = [];

  return (
    <div className="bg-[#0F0F0F] container w-full lg:w-4/6 px-4 sm:px-10 md:px-20 py-8 sm:py-10 md:py-12 rounded-xl">
      <h4 className="text-2xl text-center font-thin">YOUR FEED:</h4>
      <div className="min-h-60 h-60 p-6">
        {!!feed.length && (
          <div className="w-full max-h-60 overflow-y-auto"></div>
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
            "-webkit-background-clip": "text",
            backgroundClip: "text",
            color: "transparent",
            display: "inline-block",
          }}
        >
          Total TON Earned: 0
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
