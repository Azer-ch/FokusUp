import { useState } from "react";
import Hero from "@/components/Hero";
import Head from "next/head";
import { convertToTime } from "@/helpers/convertToTime";

export default function Home() {
  const [fokusUp, setFokusUp] = useState(true);
  const [timer, setTimer] = useState(
    fokusUp ? convertToTime(25 * 60) : convertToTime(5 * 60)
  );
  return (
    <div
      className={"main " + (fokusUp ? "bg-primary-100" : "bg-secondary-100")}
    >
      <Head>
        <title>{timer}</title>
      </Head>
      <style jsx global>{`
        body {
          background: ${fokusUp
            ? "rgb(var(--primary-rgb))"
            : "rgb(var(--secondary-rgb))"};
        }
      `}</style>
      <Hero
        fokusUp={fokusUp}
        setFokusUp={setFokusUp}
        setTimer={setTimer}
        timer={timer}
      />
    </div>
  );
}
