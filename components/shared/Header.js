import Image from "next/image";

import logo from "@/public/Logo.svg";
import Link from "next/link";
import { TonConnectButton } from "@tonconnect/ui-react";

const Header = () => {
  return (
    <div className="w-4/5 flex flex-row justify-between items-center h-fit">
      <Link href="/#">
        <Image src={logo} alt={"logo"} width={100} height={100} />
      </Link>
      <TonConnectButton className="text-2xl" />
    </div>
  );
};

export default Header;
