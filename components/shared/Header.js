import Image from "next/image";

import logo from "../../public/Logo.svg";
import Link from "next/link";
import { TonConnectButton } from "@tonconnect/ui-react";
import Balance from "@/components/unique/Balance";
import { useBettleContract } from "@/hooks/useBettleContract";

const Header = () => {
  const { allowed } = useBettleContract();

  return (
    <div className="w-4/5 flex flex-col lg:flex-row justify-between items-center h-fit gap-10 py-5 lg:py-0">
      <Link href="/#">
        <Image src={logo} alt={"logo"} width={100} height={100} />
      </Link>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        {allowed() && <Balance />}
        <TonConnectButton className="text-2xl" />
      </div>
    </div>
  );
};

export default Header;
