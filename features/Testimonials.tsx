import Image from "next/image";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

export default function Testimonials() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-brand-main-02 px-4 pb-20 pt-40 xl:px-5 xl:py-50">
      
      {/* Glow Background */}
      <div className="absolute inset-[-153.79%_-30.15%_-153.86%_-30.14%]">
        <Image
          src="/images/patternImage.svg"
          alt=""
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-242 bg-linear-to-b from-[rgba(0,92,109,0)] to-brand-main-02" />

      {/* Content */}
      <div className="relative flex  max-w-4xl flex-col items-start gap-12">
        <h2 className="font-heading text-[32px] leading-[1.05] lg:text-5xl">
          Built for
          <br />
          Business Owners
        </h2>

        <div className="flex  flex-col gap-6   bg-red-900">
          
          <div className="flex  flex-col gap-4 lg:flex-row lg:items-center">
            
            {/* Quote Card */}
            <div className="w-full bg-brand-text-teal p-6 flex flex-col gap-12 rounded-xl max-w-85.75 lg:max-w-148 lg:justify-between xl:p-7.5">
              <Image
                src="/icons/quoteIcon.svg"
                alt="Quote"
                width={40}
                height={32}
                priority
              />

              <p className="font-body text-brand-main-03 text-2xl lg:text-[32px]">
                We used to spend two days reconciling at month-end and calling
                three people just to move money to China. Now it&#39;s one screen.
              </p>
            </div>

            {/* Person Card */}
            <div className=" w-full lg:w-85.75">
              <Image
                src="/images/ceoTrader.svg"
                alt="Trader"
                width={343}
                height={343}
                priority
                
              />

              {/* <div className="absolute inset-0 bg-linear-to-b from-transparent to-[rgba(0,92,109,0.2)]" /> */}

            
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-2 justify-center lg:justify-start">
            <button
              type="button"
              className="rounded-lg bg-brand-text-teal px-6 py-2"
            >
              <IconArrowLeft />
            </button>

            <button
              type="button"
              className="rounded-lg bg-[#00161A59] px-6 py-2"
            >
              <IconArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}