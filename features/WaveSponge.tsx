'use client'
import Image from 'next/image'
import phoneMask from '@/public/icons/cta-phone-mask.svg'
import appleIcon from '@/public/icons/apple.svg'
import {IconBrandGooglePlay} from "@tabler/icons-react"
import { IconArrowUpRight, IconWorld } from '@tabler/icons-react'

export const WaveSponge = () => {
  return (
    <div className="relative aspect-1280/576 w-full max-w-7xl">

      {/* Cyan wave */}
     <div className="absolute left-[3.9%] top-[24.18%] w-[92.19%] h-[75.82%]">
        <Image
            src="/icons/cta-wave.svg"
            alt=""
            fill
            className="object-cover"
        />
    </div>

      {/* Black card */}
     <div className="absolute left-0 top-[12.65%] w-full h-[83.28%]">
        <Image
            src="/icons/cta-card.svg"
            alt=""
            fill
            className="object-cover"
        />
    </div>

      {/* Phone mockup with mask */}
      <div
        className="absolute inset-x-0 top-0 z-10 overflow-hidden"
        style={{
          height: '95.93%',
          WebkitMaskImage: `url(${phoneMask.src})`,
          maskImage: `url(${phoneMask.src})`,
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        }}
      >
       <div className="absolute left-[57.15%] top-[6.62%] w-[28.68%] h-[161.64%]">
            <Image
                src="/icons/phone-mockup.svg"
                alt="The Paenote mobile app"
                fill
                className="object-contain max-w-none"
            />
        </div>
      </div>

      {/* Text block */}
      <div
        className="absolute z-10 flex flex-col gap-8"
        style={{ left: '7.11%', top: '28.97%' }}
      >
        <h2 className="w-123 max-w-full text-h2 font-semibold leading-[1.05] tracking-[-0.48px] text-brand-pure">
          <span className="block">Stop patching your finances together.</span>
          <span className="block">Start running them.</span>
        </h2>

        <div className="flex items-end gap-2">

          {/* Web CTA */}
          <button
            type="button"
            className="flex h-27.5 w-30 flex-col justify-between rounded-xl bg-neutral-800 p-3 transition-colors hover:bg-neutral-750"
          >
            <div className="flex items-center justify-between">
              <IconWorld className="size-4 text-brand-pure" />
              <IconArrowUpRight className="size-4 text-brand-pure" />
            </div>

            <span className="text-14 font-medium leading-[1.4] tracking-[-0.105px] text-brand-pure">
              Get started
              <br />
              on the web
            </span>
          </button>

          {/* Mobile CTA */}
          <button
            type="button"
            className="flex h-27.5 items-end gap-3 rounded-xl bg-neutral-800 p-3 transition-colors hover:bg-neutral-750"
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center gap-1.5">
                <Image src={appleIcon} alt="" width={16} height={16} />
                <span className="h-3 w-px rounded-[5px] bg-neutral-650" />
                <IconBrandGooglePlay width={16} height={16} />
              </div>

              <span className="whitespace-nowrap text-14 font-medium leading-[1.4] tracking-[-0.105px] text-brand-pure">
                Scan QR
                <br />
                to download
              </span>
            </div>

            <div className="overflow-hidden rounded-[5px]">
                <Image src="/icons/qrWave.svg" alt='' width={86} height={86} priority/>
            </div>
          </button>

        </div>
      </div>
    </div>
  )
}