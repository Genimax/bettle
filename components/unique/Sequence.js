import Image from "next/image";

const Sequence = () => {
  return (
    <div className="w-1/2 text-center font-semibold text-lg flex flex-col items-center gap-4">
      <p className="py-2 px-10 w-full rounded-xl bg-[#212121]">
        You bet on the Red team <span className="text-main-orange">1 TON</span>
      </p>
      <Image src={"/arrow.svg"} alt={"arrow"} width={12} height={25} />
      <p className="py-2 px-10 w-full rounded-xl bg-[#212121]">
        Red team beats Blue team{" "}
        <span className="text-main-orange">10 TON</span> |{" "}
        <span className="text-main-blue">8 TON</span>
      </p>
      <Image src={"/arrow.svg"} alt={"arrow"} width={12} height={25} />
      <p className="py-2 px-10 w-full rounded-xl bg-main-orange">
        You take your deposit and 10% of your winnings (equivalent to your
        deposit) = 1.8 TON
      </p>
    </div>
  );
};

export default Sequence;
