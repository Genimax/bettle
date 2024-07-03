import ValueInput from "../shared/ValueInput";
import { useEffect, useState } from "react";
import axios from "axios";
import useStore from "@/store";
import ModalWindowShare from "@/components/shared/ModalWindowShare";
import { extractCurrentConfig } from "@/utils/configTools";

const ContributionPanel = ({ team }) => {
  let color;
  if (team === "red") {
    color = "bg-main-orange";
  } else {
    color = "bg-main-blue";
  }

  const getUSDToTON = async () => {
    // const response = await axios.get(
    //   "https://min-api.cryptocompare.com/data/price?fsym=TON&tsyms=BTC,USD,EUR"
    // );
    // const data = response.data;
    // console.log(data);
    // return data["USD"];

    return 1.155;
  };

  const [TONValue, setTONValue] = useState("");
  const [usdValue, setUsdValue] = useState("");
  const [usdToTON, setUsdToTON] = useState(null);

  const setModal = useStore((state) => state.setModal);

  const showModal = () => {
    setModal(<ModalWindowShare type={"bet"} team={{ color: team }} />);
  };

  useEffect(() => {
    if (!usdToTON) getUSDToTON().then((usd) => setUsdToTON(usd));
  }, []);

  const [lastUpdated, setLastUpdated] = useState(null);

  // Эффект для отслеживания изменений TONValue
  useEffect(() => {
    if (TONValue && usdToTON && lastUpdated === "TON") {
      const newUsdValue = Math.round(TONValue * usdToTON);
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

  const usdMin = extractCurrentConfig().minimumUSD;
  const TONMin = usdToTON ? (usdMin / usdToTON).toFixed(4) : 0.85616 * usdMin;

  return (
    <div className="flex flex-col gap-4 w-1/3 text-xl min-w-60">
      <ValueInput
        currency="TON"
        minimum={TONMin}
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
        onClick={showModal}
        disabled={!TONValue || !usdValue || usdValue < usdMin}
        className={`transition-transform duration-100 ease-in-out active:scale-95 disabled:bg-gray-500 font-bold ${color} px-4 py-3 rounded-xl hover:bg-opacity-80 transition-all duration-300 ease-in-out`}
      >
        CONTRIBUTE
      </button>
    </div>
  );
};

export default ContributionPanel;
