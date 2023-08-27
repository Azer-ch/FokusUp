import { useEffect, useRef, useState } from "react";
import { convertToTime } from "@/helpers/convertToTime";
import { createNotification } from "@/helpers/createNotification";
export interface TimerProps {
  fokusUp: boolean;
  setFokusUp: React.Dispatch<React.SetStateAction<boolean>>;
  setTimer: React.Dispatch<React.SetStateAction<string>>;
  timer: string;
  setTimeRemaining: React.Dispatch<React.SetStateAction<number>>;
}
export default function Timer({ fokusUp, setFokusUp , setTimer , timer,setTimeRemaining }: TimerProps) {
  const [duration, setDuration] = useState(fokusUp ? 25 * 60 : 5 * 60);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  useEffect(() => {
    setDuration(fokusUp ? 25 * 60 : 5 * 60);
    if (intervalId) clearInterval(intervalId);
    setIntervalId(undefined);
  }, [fokusUp]);
  useEffect(() => {
    if (duration >= 0) {
        setTimer(convertToTime(duration));
        setTimeRemaining(fokusUp?(1-(duration/(25*60))):(1-(duration/(5*60))));
    }
    else {
      const audio = new Audio("next-assets/alarm.wav");
      audio.play();
      clearInterval(intervalId);
      setIntervalId(undefined);
      setTimeRemaining(0);
      if(fokusUp)
        createNotification('Time to take a break');
    else 
        createNotification('Time to focus')
      setFokusUp(!fokusUp);
    }
  }, [duration]);
  const startTimer = () => {
    const audio = new Audio("next-assets/click.wav");
    audio.play();
    setIntervalId(
      setInterval(() => {
        setDuration((duration) => duration - 1);
      }, 1000)
    );
  };
  const pauseTimer = () => {
    const audio = new Audio("next-assets/click.wav");
    audio.play();
    clearInterval(intervalId);
    setIntervalId(undefined);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-9xl">{timer}</p>
      {intervalId ? (
        <button
          className={
            "btn-primary " +
            (fokusUp ? "text-primary-100" : "text-secondary-100")
          }
          onClick={pauseTimer}
        >
          PAUSE
        </button>
      ) : (
        <button
          className={
            "btn-primary " +
            (fokusUp ? "text-primary-100" : "text-secondary-100")
          }
          onClick={startTimer}
        >
          START
        </button>
      )}
    </div>
  );
}
