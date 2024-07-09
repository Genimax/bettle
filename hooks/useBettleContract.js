import { useTonClient } from "@/hooks/useTonClient";
import { BettleContract } from "@/contract/wrappers/BettleContract";
import { Address, fromNano } from "ton-core";
import { useEffect, useMemo, useState } from "react";
import { useTonAddress } from "@tonconnect/ui-react";
import { useTonConnect } from "@/hooks/useTonConnect";

const getSummary = async (bettleContract) => {
  if (!bettleContract) return null;

  return await bettleContract.getSummary();
};

const getBalance = async (bettleContract, wallet) => {
  if (!bettleContract || !wallet) return null;

  try {
    const balance = await bettleContract.getBalanceByAddress(
      Address.parse(wallet)
    );
    return Number(fromNano(balance));
  } catch (e) {
    console.error(e);
    return 0;
  }
};

const getFeed = async (bettleContract, connected, wallet) => {
  if (!bettleContract || !connected) return null;

  const feed = await bettleContract.getNotificationsByAddress(
    Address.parse(wallet)
  );

  console.log(feed);

  return feed;
};

export const useBettleContract = () => {
  const { client } = useTonClient();
  const [summary, setSummary] = useState(null);
  const [balance, setBalance] = useState(null);
  const [feed, setFeed] = useState(null);
  const address = useTonAddress();

  const { sender, wallet, network, connected } = useTonConnect();

  const isAllowed = () => {
    return !(!connected || network !== process.env.NEXT_PUBLIC_NETWORK_CODE);
  };

  const bettleContract = useMemo(() => {
    if (!client) return null;

    const contract = BettleContract.fromAddress(
      Address.parse(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS)
    );

    return client.open(contract);
  }, [client]);

  useEffect(() => {
    getSummary(bettleContract).then(setSummary);
  }, [bettleContract]);

  useEffect(() => {
    if (balance !== null && connected) return;
    getBalance(bettleContract, wallet).then(setBalance);
  }, [address, bettleContract]);

  useEffect(() => {
    if (feed !== null && connected) return;
    getFeed(bettleContract, connected, wallet).then(setFeed);
  }, [connected, bettleContract]);

  return {
    allowed: isAllowed,
    bettleContract,
    summary,
    balance,
    feed,
    bet: (amount, team) => {
      const message = {
        $$type: "Bet",
        team: team,
      };

      bettleContract?.send(
        sender,
        {
          value: amount,
        },
        message
      );
    },
    withdraw: () => {
      bettleContract?.send(
        sender,
        {
          value: "0.02",
        },
        "withdraw"
      );
    },
  };
};
