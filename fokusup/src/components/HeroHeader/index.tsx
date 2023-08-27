import Image from "next/image";
import { useEffect } from "react";
interface HeroHeaderProps {
  fokusUp: boolean;
  remainingTime: number;
}
export default function HeroHeader({ remainingTime }: HeroHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex justify-center pt-5 gap-2 w-screen">
        <Image
          src="next-assets/icon-white2.png"
          alt="checkmark"
          width={30}
          height={20}
        />
        <h1 className="font-bold text-xl">Fokusup</h1>
      </div>
      <div className="border-b-2 w-3/4 border-transparent">
        <div id="progressBar" className="border-b-2 w-0 border-white">
          <style jsx global>
            {`
              #progressBar {
                width: ${remainingTime * 100}%;
              }
            `}
          </style>
        </div>
      </div>
    </div>
  );
}
