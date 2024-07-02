const Slider = ({ position = 0 }) => {
  const scrollToPosition = () => {
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={scrollToPosition}
      className="border-gradient text-xl py-4 px-12 font-bold rounded-xl cursor-pointer transition duration-300 hover:bg-white hover:text-black"
    >
      Connect TON Wallet
    </div>
  );
};

export default Slider;
