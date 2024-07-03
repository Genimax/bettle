import generateShareUrls from "@/utils/generateShareURL";

const SocialMediaPanel = ({ text }) => {
  const urls = generateShareUrls(text);
  const handleClick = (media) => {
    open(urls[media], "_blank");
  };

  return (
    <div className="w-full flex flex-wrap gap-2  justify-between">
      <button
        className={`w-1/4 h-10 bg-white flex justify-center items-center rounded-xl text-black hover:bg-opacity-70 transition-all duration-300`}
        onClick={() => handleClick("x")}
      >
        <p className="text-2xl font-bold">X</p>
      </button>
      <button
        className={`w-1/4 h-10 bg-white flex justify-center items-center rounded-xl text-black hover:bg-opacity-70 transition-all duration-300`}
        onClick={() => handleClick("facebook")}
      >
        <p className="text-2xl font-bold">f</p>
      </button>
      <button
        className={`w-1/4 h-10 bg-white flex justify-center items-center rounded-xl text-black hover:bg-opacity-70 transition-all duration-300`}
        onClick={() => handleClick("linkedin")}
      >
        <p className="text-xl font-bold">Ln</p>
      </button>
    </div>
  );
};

export default SocialMediaPanel;
