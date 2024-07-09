import ValueInput from "../shared/ValueInput";
import { useEffect, useState } from "react";
import axios from "axios";
import useStore from "@/store";
import ModalWindowShare from "@/components/shared/ModalWindowShare";
import config from "@/config/teamConfig.json";
import { useBettleContract } from "@/hooks/useBettleContract";
import { Address, beginCell } from "ton-core";
import { useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";
import { storeBet } from "@/contract/build/BettleContract/tact_BettleContract";
import { useTonConnect } from "@/hooks/useTonConnect";

const ContributionPanel = ({ team }) => {
  let color;
  if (team === "red") {
    color = "bg-main-orange";
  } else {
    color = "bg-main-blue";
  }
  const { bet } = useBettleContract();

  const getUSDToTON = async () => {
    const response = await axios.get(
      "https://min-api.cryptocompare.com/data/price?fsym=TONCOIN&tsyms=USD"
    );
    const data = response.data;
    return data["USD"];

    return 7.867;
  };

  const [TONValue, setTONValue] = useState("");
  const [usdValue, setUsdValue] = useState("");
  const [usdToTON, setUsdToTON] = useState(1.128);

  const setModal = useStore((state) => state.setModal);

  const showModal = () => {
    setModal(<ModalWindowShare type={"bet"} team={{ color: team }} />);
  };

  useEffect(() => {
    getUSDToTON().then((usd) => setUsdToTON(usd));
  }, []);

  const [lastUpdated, setLastUpdated] = useState(null);

  // Эффект для отслеживания изменений TONValue
  useEffect(() => {
    if (TONValue && usdToTON && lastUpdated === "TON") {
      const newUsdValue = Math.round(usdToTON * TONValue);
      setUsdValue(newUsdValue);
      setLastUpdated(null); // сбросить последнее обновление
    }
  }, [TONValue, usdToTON, lastUpdated]);

  // Эффект для отслеживания изменений usdValue
  useEffect(() => {
    if (usdValue && usdToTON && lastUpdated === "usd") {
      const newTONValue = (usdValue / usdToTON).toFixed(5);
      setTONValue(newTONValue);
      setLastUpdated(null); // сбросить последнее обновление
    }
  }, [usdValue, usdToTON, lastUpdated]);

  // Обновление TONValue
  const updateTONValue = (value) => {
    setTONValue(value);
    setLastUpdated("TON");
  };

  // Обновление usdValue
  const updateUsdValue = (value) => {
    setUsdValue(value);
    setLastUpdated("usd");
  };

  const usdMin = config.minimumUSD;
  const TONMin = (usdMin / usdToTON).toFixed(4);

  const contributeHandler = async () => {
    try {
      await bet(TONValue, team);
      showModal();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full text-xl min-w-60 pt-8">
      <ValueInput
        currency="TON"
        minimum={Number(TONMin)}
        value={TONValue}
        setValue={updateTONValue}
      />
      <ValueInput
        currency="$ ≈"
        minimum={usdMin}
        value={usdValue}
        setValue={updateUsdValue}
      />
      <button
        onClick={contributeHandler}
        disabled={!TONValue || !usdValue || usdValue < usdMin}
        className={`transition-transform duration-100 ease-in-out active:scale-95 disabled:bg-gray-500 font-bold ${color} px-4 py-3 rounded-xl hover:bg-opacity-80 transition-all duration-300 ease-in-out`}
      >
        CONTRIBUTE
      </button>
    </div>
  );
};

export default ContributionPanel;
