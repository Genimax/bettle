import Image from "next/image";

/**
 * Footer component that renders the footer section of the webpage.
 * It includes links with icons and an email address.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer = () => {
  return (
    <div className="w-full bg-gradient-orange-to-blue flex justify-center">
      <div className="font-medium py-2 flex justify-center items-center gap-12 flex-col md:flex-row container">
        <a href="#" className="flex items-center justify-center gap-2 ">
          <Image
            className=""
            src={"/Images/Telegram.svg"}
            alt={"X icon"}
            width={32}
            height={32}
          />
          betduel
        </a>
        <p>betduel@gmail.com</p>
        <a href="#" className="flex items-center justify-center gap-2 ">
          <Image
            className=""
            src={"/Images/x.svg"}
            alt={"X icon"}
            width={32}
            height={32}
          />
          betduel
        </a>
      </div>
    </div>
  );
};

export default Footer;
