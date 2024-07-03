import generateShareUrls from "@/utils/generateShareURL";
import Image from "next/image";

import XLogo from "@/public/Images/x.svg";
import FBLogo from "@/public/Images/facebook.svg";

const SocialMediaPanel = ({ text, color }) => {
  const urls = generateShareUrls(text);
  const handleClick = (media) => {
    open(urls[media], "_blank");
  };

  return (
    <div className="w-full flex gap-2 justify-around">
      <button
        className={`${color} w-full h-10 flex justify-center items-center rounded-xl text-black hover:bg-opacity-70 transition-all duration-300`}
        onClick={() => handleClick("x")}
      >
        <Image
          src={XLogo}
          className="text-2xl font-bold"
          alt="X icon"
          height={20}
          width={20}
        />
      </button>
      <button
        className={`${color} w-full h-10 flex justify-center items-center rounded-xl text-black hover:bg-opacity-70 transition-all duration-300`}
        onClick={() => handleClick("facebook")}
      >
        <Image
          src={FBLogo}
          className="text-2xl font-bold"
          alt="Facebook icon"
          height={30}
          width={30}
        />
      </button>
    </div>
  );
};

export default SocialMediaPanel;
