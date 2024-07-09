import { useTonWallet } from "@tonconnect/ui-react";
import { useBettleContract } from "@/hooks/useBettleContract";

const Balance = () => {
  const { balance, allowed } = useBettleContract();
  const wallet = useTonWallet();

  const { withdraw } = useBettleContract();

  return (
    <div
      className={
        "bg-white py-2 px-8 rounded-full flex flex-col lg:flex-row gap-0 lg:gap-10 justify-center items-center bg-gradient-orange-to-blue"
      }
    >
      <button
        className="text-white disabled:opacity-40"
        disabled={balance === 0}
        onClick={() => withdraw()}
      >
        Withdraw
      </button>
      <div className="text-white">
        Your balance: <span className="font-bold">{balance} TON</span>
      </div>
    </div>
  );
};

export default Balance;
