import { useEffect, useState } from "react";
import HeroHeader from "@/components/HeroHeader";
import HeroBody from "../HeroBody";
export interface HeroProps {
  fokusUp: boolean;
  setFokusUp: React.Dispatch<React.SetStateAction<boolean>>;
  setTimer: React.Dispatch<React.SetStateAction<string>>;
  timer: string;
}
export default function Hero({
  fokusUp,
  setFokusUp,
  setTimer,
  timer,
}: HeroProps) {
  const [timeRemaining, setRemainingTime] = useState(0);
  return (
    <div
      className={
        "flex flex-col justify-between " +
        (fokusUp ? "bg-primary-100" : "bg-secondary-100")
      }
    >
      <HeroHeader remainingTime={timeRemaining} fokusUp={fokusUp} />
      <HeroBody
        fokusUp={fokusUp}
        setFokusUp={setFokusUp}
        setTimer={setTimer}
        timer={timer}
        setTimeRemaining={setRemainingTime}
      />
    </div>
  );
}
