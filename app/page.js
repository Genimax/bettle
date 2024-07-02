"use client";
import Header from "../components/shared/Header";
import HomePage from "../components/pages/HomePage";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

const manifestUrl = process.env.NEXT_PUBLIC_MANIFEST_URL;

export default function Home() {
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <div className="min-w-full flex flex-col items-center">
        <Header />
      </div>
      <div className="min-h-screen min-w-full flex flex-col items-center gap-32">
        <HomePage />
      </div>
    </TonConnectUIProvider>
  );
}
