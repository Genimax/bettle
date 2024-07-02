import Image from "next/image";

import teamSettings from "../../config/teamConfig.json";

import CatsPic from "../../public/Images/cats.png";
import DogsPic from "../../public/Images/dogs.png";

/**
 * TeamCard component
 *
 * This component displays a team card with an image, team name, and a styled border.
 * The image, team name, and border color are fetched from a JSON file.
 * The image is displayed using the next/image Image component.
 * The team card is styled using Tailwind CSS classes and inline styles.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.team - The team name, either "red" or "blue". Defaults to "red".
 *
 * @returns {JSX.Element} The TeamCard component.
 */
const TeamCard = ({ team = "red" || "blue" }) => {
  return (
    <div className="uppercase font-bold text-2xl relative  flex-col flex items-center">
      <Image
        src={team === "red" ? DogsPic : CatsPic}
        alt={"Team Icon"}
        width={500}
        height={500}
        className={`h-full md:w-72 translate-y-[-10%] px-10`}
      />
      <div
        className={`py-4 px-10 rounded-xl w-fit min-w-52 md:min-w-[500px] text-center border-2 bg-black`}
        style={{
          borderColor: teamSettings[team].color,
          boxShadow: `0 0 50px 1px ${teamSettings[team].color}`,
        }}
      >
        {teamSettings[team].name}
      </div>
    </div>
  );
};

export default TeamCard;
