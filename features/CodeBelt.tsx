import Image from "next/image"
import { currencies } from "@/constants"

const buildItems = (key: string) =>
  currencies.map(({ code, flag }) => (
    <div
      key={`${key}-${code}`}
      className="flex shrink-0 items-center gap-4"
    >
      <Image
        src={flag}
        alt={code}
        width={48}
        height={48}
        className="size-12 shrink-0 rounded-full object-cover"
      />

      <span className="font-heading text-h2 font-semibold leading-[1.05] tracking-[-0.48px] text-neutral-950">
        {code}
      </span>
    </div>
  ))

export default function CodeBelt() {
  return (
    <div
      className="pointer-events-none relative z-10 h-0 overflow-x-clip"
      aria-hidden
    >
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}
      </style>

      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rotate-[8deg]">
        
        <div className="flex w-[150vw] overflow-hidden bg-brand-pure py-8">

          <div
            className="flex w-max shrink-0"
            style={{ animation: "marquee 30s linear infinite" }}
          >

            {/* SINGLE PERFECT TRACK DUPLICATION */}
            <div className="flex shrink-0 items-center gap-18 pr-18">
              {buildItems("a")}
            </div>

            <div className="flex shrink-0 items-center gap-18 pr-18">
              {buildItems("b")}
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

