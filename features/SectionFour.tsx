"use client";
import { faqs } from "@/constants"
import {IconPlus, IconX, IconArrowUpRight, IconBrandGooglePlay} from "@tabler/icons-react"
import Image from "next/image";
import { useState } from "react";
import { WaveSponge } from "./WaveSponge";



export default function SectionFour() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <div className="w-full mx-auto 2xl:max-w-380 2xl:mx-auto bg-brand-pure pt-20 px-4  lg:py-40 flex flex-col gap-35 lg:rounded-b-[64px]">
        <div className="flex flex-col gap-12 ">
            <div className="flex flex-col gap-4">
                <h1 className="font-heading text-[32px] text-neutral-950 text-center font-semibold leading-105 ">
                    <span className="text-neutral-500">Got questions?</span><br/> We’ve got answers
                </h1>
                <p className="font-body text-neutral-700 text-15 text-center ">If you can`&#39;`t find answers to your question here, you can <br/> reach out to us for further help.</p>
            </div>
            <div className="flex flex-col gap-1 max-w-148 mx-auto w-full ">
                {faqs.map((faq, index) => ( 
                    <div
                    key={index}
                    className={` bg-neutral-50 border-neutral-800 flex flex-col gap-2.5  ${index === 0 ? "rounded-t-3xl" : index === faqs.length - 1 ? "rounded-b-3xl" : "rounded-xl"} `} 
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center p-6"
                            >
                            <h3 className="font-heading text-neutral-950 text-14 ">{faq.question}</h3>

                            {openIndex === index ? (
                              <span className='flex size-6 shrink-0 items-center justify-center rounded-full bg-neutral-950'>
                                <IconX className='size-3.5 text-brand-pure' />
                                </span>
                            ) : (
                                <IconPlus className='size-6 p-1.5 shrink-0 bg-brand-pure rounded-full text-neutral-700' stroke={1.5} />
                            )}
                        </button>

                        {openIndex === index && (
                            <div className="px-6 pb-6">
                                <p className="text-15 font-body text-neutral-700 leading-140 tracking-75">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ) )}

            </div>
        </div>
        <div className="flex flex-col gap-12 lg:gap-0">
            <div className="flex flex-col gap-4 ">
                <h1 className="font-heading text-[32px] text-neutral-950 text-center font-semibold leading-105 lg:text-5xl lg:translate-y-23">Paenote as <br/> seen in the{" "}<span className="hidden lg:inline"> <br/></span>news</h1>
                <p className="font-body text-neutral-700 text-15 text-center lg:hidden">If you can&#39;t find answers to your question here, you can reach out to us for further help.</p>
            </div>
            <div className="flex flex-col gap-2 lg:hidden">
                <div className="bg-neutral-35 p-5 rounded-[20px] flex flex-col gap-16">
                    <div className="flex justify-between">
                        <Image src="/icons/tc.svg" alt="TC logo" width={24} height={24} priority/>
                        
                        <IconArrowUpRight className="text-neutral-300"/>
                    </div>
                    <div>
                        <p className="font-body text-neutral-700 text-15 ">Bank Direct on Paenote: Converting crypto to naira without stress</p>
                    </div>
                </div>
                <div>
                    <div className="bg-neutral-35 p-5 rounded-[20px] flex flex-col gap-16">
                        <div className="flex justify-between">
                            <Image src="/icons/condia.svg" alt="Condia logo" width={115} height={20} priority/>
                            <IconArrowUpRight className="text-neutral-300"/>
                        </div>
                        <div>
                            <p className="font-body text-neutral-700 text-15 ">Bank Direct on Paenote: Converting crypto to naira without stress</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:flex w-full mx-auto max-w-4xl gap-4 hidden ">

                <div
                    className="p-3 flex flex-col justify-between w-110 h-110 rounded-[37px]  bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/images/press-card-orange.svg')",
                    }}
                    >
                    <div className="w-50 p-1.5">
                        <span className="flex size-10.5 items-center justify-center rounded-full bg-[rgba(0,0,0,0.5)]">
                        <IconArrowUpRight className="size-5 text-brand-pure" />
                        </span>
                    </div>

                    <div className="bg-neutral-950 rounded-[27px] flex flex-col gap-6.5 p-6.5">
                        <Image
                        src="/icons/tcWhite.svg"
                        alt="TC logo"
                        width={24}
                        height={24}
                        />

                        <p className="font-body text-neutral-300 font-medium text-15 leading-140 tracking-75">
                        Bank Direct on Paynote: Converting crypto to naira without stress
                        </p>
                    </div>
                </div>
                    <div
                    className="p-3 flex flex-col justify-between w-110 h-110 rounded-[37px]  overflow-hidden bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/images/press-card-purple.svg')",
                    }}
                    >
                    <div className="w-full pt-1.5 flex justify-end">
                        <span className="flex size-10.5 items-center justify-center rounded-full bg-[rgba(0,0,0,0.5)]">
                        <IconArrowUpRight className="size-5 text-brand-pure" />
                        </span>
                    </div>

                    <div className="bg-neutral-950 rounded-[27px] flex flex-col gap-6.5 p-6.5">
                        <Image
                        src="/icons/condiaWhite.svg"
                        alt="Condia logo"
                        width={115}
                        height={20}
                        />

                        <p className="font-body text-neutral-300 font-medium text-15 leading-140 tracking-75">
                        Bank Direct on Paynote: Converting crypto to naira without stress
                        </p>
                    </div>
                </div>
               
                
            </div>
        </div>

        <div className="lg:hidden mx-auto max-w-84 mt-40 ">
            <div className=" relative flex justify-between w-49  ">
                <div className="bg-[#E0E0E0] w-5.25 h-66.5"></div>
                <div className="bg-[#E0E0E0] w-5.25 h-50  -translate-y-40"></div>
                <div className="bg-[#E0E0E0] w-5.25 h-66.5"></div>


                <div className="absolute -top-60 left-1/2 -translate-x-1/2  ">
                    <Image src="/images/qrCode.svg" alt="QR Code" width={500} height={500} priority />
                </div>

                <div className="flex flex-col gap-5 bg-black absolute p-5 w-84 mx-auto right-1/2 translate-x-1/2 -translate-y-1/2 rounded-3xl">
                    <h1 className="font-heading text-[27px] text-center">Stop patching your finances together. Start running them.</h1>
                    <div className="flex gap-3.5 justify-center">
                        <Image src="icons/btcCoin.svg" alt="BTC" width={55} height={22} priority />
                        <Image src="icons/tronCoin.svg" alt="BTC" width={55} height={22} priority />
                    </div>
                </div>

                <div className="absolute bottom-6 right-1/2 flex gap-3.5 translate-x-1/2">
                    <div className="bg-[#00A647] w-40 p-3 rounded-lg flex flex-col gap-5">
                        <div className="flex justify-between">
                            <IconBrandGooglePlay/>
                            <IconArrowUpRight/>
                        </div>
                        <p className="font-heading text-15 font-semibold">Download <br/> on PlayStore</p>
                    </div>
                    <div className="bg-[#005EFF] w-40 p-3 rounded-lg flex flex-col gap-5" >
                        <div className="flex justify-between">
                            <IconBrandGooglePlay/>
                            <IconArrowUpRight/>
                        </div>
                        <p className="font-heading text-15 font-semibold">Download <br/> on AppStore</p>
                    </div>
                </div>
            </div>
           
        </div>

        <div className="hidden lg:flex justify-center">
            <WaveSponge/>
        </div>
       

    </div>
  )
}
