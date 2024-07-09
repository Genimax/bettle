import { useTonConnect } from "./useTonConnect";
import { TonClient } from "ton";
import { getHttpEndpoint } from "@orbs-network/ton-access";
import { useAsyncInitialize } from "./useAsyncInitialize";

export const useTonClient = () => {
  const { network } = useTonConnect();

  return {
    client: useAsyncInitialize(async () => {
      if (network !== process.env.NEXT_PUBLIC_NETWORK_CODE && network !== null)
        return;

      return new TonClient({
        endpoint: await getHttpEndpoint({
          network: process.env.NEXT_PUBLIC_NETWORK,
        }),
      });
    }, [network]),
  };
};
