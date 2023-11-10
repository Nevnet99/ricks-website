import { Inter } from "next/font/google";
import { useReward } from "react-rewards";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { reward, isAnimating } = useReward("rewardId", "emoji", {
    emoji: ["🍔"],
    elementCount: 1000,
    spread: 360,
    elementSize: 100,
  });

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <button disabled={isAnimating} onClick={reward}>
        <span id="rewardId" />
        <h1 className="text-9xl">Yes.</h1>
      </button>
    </main>
  );
}
