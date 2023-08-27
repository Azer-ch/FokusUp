import { HeroProps } from "../Hero";
import Timer from "../Timer";
interface HeroBodyProps extends HeroProps {
  setTimeRemaining: React.Dispatch<React.SetStateAction<number>>;
}
export default function HeroBody({
  fokusUp,
  setFokusUp,
  setTimer,
  timer,
  setTimeRemaining,
}: HeroBodyProps) {
  return (
    <div className="hero-body w-1/2 mr-auto bg-transparent flex flex-col gap-5">
      <ul className="flex flex-row list-none align-middle justify-center gap-5 mt-2">
        <li>
          <button
            className={
              "pr-3 pl-3 rounded " +
              (fokusUp ? "bg-darkTransparent font-bold" : "")
            }
            onClick={() => setFokusUp(true)}
          >
            FokusUp
          </button>
        </li>
        <li>
          <button
            className={
              "pr-3 pl-3 rounded " +
              (!fokusUp ? "bg-darkTransparent font-bold" : "")
            }
            onClick={() => setFokusUp(false)}
          >
            Break
          </button>
        </li>
      </ul>
      <Timer
        fokusUp={fokusUp}
        setFokusUp={setFokusUp}
        setTimer={setTimer}
        timer={timer}
        setTimeRemaining={setTimeRemaining}
      />
    </div>
  );
}
