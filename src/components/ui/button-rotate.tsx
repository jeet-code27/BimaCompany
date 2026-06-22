"use client"

import { Button } from "@/components/ui/button";

export const ButtonRotate = ({ text = "GET STARTED NOW • " }: { text?: string }) => {
  return (
    <div className="border p-2 rounded-full border-dotted border-[#673CDD] inline-block hover:scale-105 transition-transform duration-300 group cursor-pointer bg-[#673CDD]/5">
      <Button
        className="relative w-[120px] h-[120px] rounded-full overflow-hidden p-0 grid place-content-center bg-[#673CDD] text-white hover:bg-purple-700 shadow-xl"
      >
        <p
          className="absolute inset-0 animate-[spin_10s_linear_infinite]"
          style={{
            position: "absolute",
            inset: 0,
          }}
        >
          {Array.from(text).map((char, i) => (
            <span
              key={i}
              style={{ 
                position: "absolute",
                inset: "6px",
                transform: `rotate(${(360 / text.length) * i}deg)`,
                transformOrigin: "50% 50%",
                userSelect: "none",
                display: "inline-block",
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "2px"
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </p>

        <div className="relative w-[50px] h-[50px] rounded-full text-[#673CDD] bg-white flex items-center justify-center overflow-hidden z-10 group-hover:scale-110 transition-transform duration-300 shadow-md">
          <svg
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"
          >
            <path
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              fill="currentColor"
            />
          </svg>
          <svg
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-5 h-5 transition-transform duration-300 ease-in-out -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0"
          >
            <path
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              fill="currentColor"
            />
          </svg>
        </div>

      </Button>
    </div>
  );
}
