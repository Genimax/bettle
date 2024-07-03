import Image from "next/image";
import useStore from "@/store";

import ModalWindow from "@/components/shared/ModalWindow";

import RedWonResult from "@/public/Images/RedWonResult.png";
import BlueWonResult from "@/public/Images/BlueWonResult.png";
import RedInvested from "@/public/Images/RedInvested.png";
import BlueInvested from "@/public/Images/BlueInvested.png";
import SocialMediaPanel from "@/components/shared/SocialMediaPanel";
import teamConfig from "@/config/teamConfig";

const ModalWindowShare = ({
  type = "bet" || "win",
  team = "red" || "blue",
}) => {
  let color;

  if (team === "red") {
    color = "bg-main-orange";
  } else {
    color = "bg-main-blue";
  }

  const setModal = useStore((state) => state.setModal);

  const handleClose = () => {
    setModal(null);
  };

  const generateShareText = () => {
    if (type === "bet") {
      return `I just invested in ${teamConfig[
        team
      ].name.toUpperCase()} team, help us win!`;
    } else {
      return `I just won the Bettle on with ${teamConfig[
        team
      ].name.toUpperCase()} team!`;
    }
  };

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = pictures[type][team].component.src;
    a.download = "ShareBettle.png";
    a.click();
  };

  const pictures = {
    bet: {
      red: { component: RedInvested, fileName: "RedInvested.png" },
      blue: { component: BlueInvested, fileName: "BlueInvested.png" },
    },
    win: {
      red: { component: RedWonResult, fileName: "RedWonResult.png" },
      blue: { component: BlueWonResult, fileName: "BlueWonResult.png" },
    },
  };

  return (
    <ModalWindow>
      <button
        onClick={handleClose}
        className={`absolute top-5 right-5 font-bold text-black text-xl ${color} w-8 h-8 rounded-full hover:bg-opacity-70 hover:shadow-lg transition-all duration-300`}
      >
        &times;
      </button>
      <p className="text-center font-bold text-lg md:text-2xl">
        SHARE YOUR {type.toUpperCase()} ON SOCIAL MEDIA
      </p>
      <div className="flex justify-center">
        <Image
          src={pictures[type][team].component}
          className="rounded-2xl max-w-full h-auto"
          alt={"Social media share picture of a result"}
        />
      </div>
      <SocialMediaPanel
        imageName={pictures[type][team].fileName}
        text={generateShareText()}
      />
      <div className="flex justify-center w-full">
        <button
          onClick={handleDownload}
          className={`${color} font-bold w-full p-2 rounded-xl hover:bg-opacity-70 hover:shadow-lg transition-all duration-300`}
        >
          DOWNLOAD
        </button>
      </div>
    </ModalWindow>
  );
};

export default ModalWindowShare;
