import Image from "next/image"
import {IconArrowRight, IconArrowLeft} from "@tabler/icons-react"



export default function Testimonials() {
  return (
    <div className=" bg-user px-4 pt-40 pb-20  w-full  2xl:max-w-380 2xl:mx-auto">
        <div className="flex flex-col gap-12 max-w-fit mx-auto"> 
            <h1 className="font-heading text-[32px] lg:text-5xl ">Built for <br/> Business Owners</h1>
            
            <div className="flex flex-col gap-4 justify-center">
                <div className="flex flex-col gap-4 lg:flex-row">
                    <div className="bg-brand-text-teal p-6 flex flex-col gap-12 rounded-xl max-w-85.75 lg:max-w-148 lg:justify-between">
                        <Image src="icons/quoteIcon.svg" alt="quote" width={40} height={32} priority
                        />
                        <div className="">
                            <p className="font-body text-brand-main-03 text-2xl lg:text-[32px]">We used to spend two days reconciling at month-end and calling three people just to move money to China. Now it&#39;s one screen.</p>
                        </div>
                    </div>
                    <div>
                        <Image src="images/ceoTrader.svg" alt="Trader" width={343} height={343} priority/>
                    </div>
                </div>
                <div className="flex gap-2 justify-center lg:justify-start">
                    <div className="py-2 px-6 rounded-lg bg-brand-text-teal">
                        <IconArrowLeft/>
                    </div>
                    <div className="py-2 px-6 rounded-lg bg-[#00161A59]">
                        <IconArrowRight/>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
