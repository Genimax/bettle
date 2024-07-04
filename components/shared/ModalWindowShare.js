import useStore from "@/store";

import ModalWindow from "@/components/shared/ModalWindow";

import SocialMediaPanel from "@/components/shared/SocialMediaPanel";

import { CldImage } from "next-cloudinary";
import { extractCurrentConfig, findConfigById } from "@/utils/configTools";
import { useState } from "react";
import LoadingSpinner from "@/components/shared/LoadingSpinnder";

const teamConfig = extractCurrentConfig();

const ModalWindowShare = ({
  type = "bet" || "win",
  team,
  competitionId = null,
}) => {
  let color;

  if (team.color === "red") {
    color = "bg-main-orange";
  } else {
    color = "bg-main-blue";
  }

  const setModal = useStore((state) => state.setModal);
  const selectedTeamConfig = findConfigById(competitionId);
  const [loading, setLoading] = useState(true);

  const handleClose = () => {
    setModal(null);
  };

  const generateShareText = () => {
    if (type === "bet") {
      return `I just invested in ${teamConfig[
        team.color
      ].name.toUpperCase()} team, help us win!`;
    } else {
      return `I just won the Bettle with ${selectedTeamConfig[
        team.color
      ].name.toUpperCase()} team!`;
    }
  };

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href =
      type === "bet"
        ? teamConfig[team.color].betImage.url
        : selectedTeamConfig[team.color].winImage.url;
    a.download = "ShareBettle.png";
    a.style.display = "none"; // Ensure the link is not visible
    a.target = "_blank"; // Open in a new tab to ensure download
    document.body.appendChild(a); // Append the link to the body
    a.click();
    document.body.removeChild(a); // Remove the link after clicking
  };

  return (
    <ModalWindow>
      <button
        onClick={handleClose}
        className={`absolute top-[-10%] md:top-5 right-5 font-bold text-black text-xl ${color} w-8 h-8 rounded-full hover:bg-opacity-70 hover:shadow-lg transition-all duration-300`}
      >
        &times;
      </button>
      <p className="text-center font-bold text-lg md:text-2xl">
        SHARE YOUR {type.toUpperCase()} ON SOCIAL MEDIA
      </p>
      <div className="flex flex-col justify-center items-center">
        <CldImage
          src={
            type === "bet"
              ? teamConfig[team.color].betImage.url
              : selectedTeamConfig[team.color].winImage.url
          }
          height={600}
          onLoad={() => {
            setLoading(false);
          }}
          width={600}
          className={`rounded-2xl ${loading && "opacity-0 scale-0 absolute"}`}
          alt={"Social media share picture of a result"}
        />
        <LoadingSpinner
          loading={loading}
          className="py-10"
          widthHeight={"w-16 h-16"}
          color={team.color === "red" ? "main-orange" : "blue-500"}
        />
      </div>
      <SocialMediaPanel text={generateShareText()} color={color} />
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
