import { Download, GetStarted } from "@/components";
import Image from "next/image";


export default function SectionThree() {
  return (
    <div className="flex flex-col gap-40 lg:gap-60  bg-neutral-950 w-full px-4 pt-20 pb-40 mx-auto 2xl:max-w-380 2xl:mx-auto lg:pt-40 lg:pb-50 lg:px-30">
        <div className="flex flex-col gap-16 lg:gap-12">  
            <div className="flex flex-col gap-6 items-center lg:flex-row lg:justify-between lg:max-w-300 lg:items-end">
                <div>
                    <h1 className="font-heading text-4xl text-center leading-105  lg:text-5xl lg:text-start ">Everything your <br/> business needs to grow</h1>
                </div>
                <div className="flex gap-2 ">
                    <GetStarted
                    label="Get Started"
                    className="bg-brand-pure text-neutral-950 font-body gap-4 hidden lg:flex"
                    iconClassname="text-neutral-500"
                    />
                    <Download
                    label="Download app"
                    className="bg-brand-pure text-neutral-950 lg:bg-neutral-700 lg:text-brand-pure"
                    iconClassname="text-neutral-500"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-neutral-870  p-4 h-100 lg:max-h-120 rounded-xl shadow-inset flex flex-col">
                    <div className="mt-auto"> 
                        <h3 className="font-heading text-15 font-semibold lg:text-20">Pay suppliers and get paid by customers</h3>
                        <p className="font-body text-neutral-300 text-15 font-medium">Send money to suppliers in China, Dubai, Europe, and across Africa, and receive payments from customers in their own currency.</p>
                    </div>
                </div>
                <div className="bg-neutral-870  p-4  h-100 lg:max-h-120 rounded-xl shadow-inset flex flex-col">
                    <div className="mt-auto"> 
                        <h3  className="font-heading text-15 font-semibold lg:text-20">Control what your team spends</h3>
                        <p className="font-body text-neutral-300 text-15 font-medium">Issue cards to staff with limits you set, and see every transaction the moment it happens.</p>
                    </div>
                </div>
                <div className="bg-neutral-870  p-4  h-100 lg:max-h-120 rounded-xl shadow-inset flex flex-col">
                    <div className="mt-auto"> 
                        <h3  className="font-heading text-15 font-semibold lg:text-20">Payroll and taxes without the manual work</h3>
                        <p className="font-body text-neutral-300 text-15 font-medium">Salaries, PAYE, pension, VAT, and withholding tax all calculated and filed automatically.</p>
                    </div>
                </div>
                <div className="bg-neutral-870  p-4  h-100 lg:max-h-120 rounded-xl shadow-inset flex flex-col">
                    <div className="mt-auto"> 
                        <h3  className="font-heading text-15 font-semibold lg:text-20">Access cash before customers pay</h3>
                        <p className="font-body text-neutral-300 text-15 font-medium">Turn outstanding invoices into working capital and keep your business moving without collateral or long bank processes.</p>
                    </div>
                </div>
                <div className="lg:col-span-2 bg-neutral-870  p-4  h-100 lg:max-h-120 rounded-xl shadow-inset flex flex-col">
                    <div className="mt-auto"> 
                        <h3  className="font-heading text-15 font-semibold lg:text-20">Understand how your business is performing</h3>
                        <p className="font-body text-neutral-300 text-15 font-medium">See which branches are profitable, where expenses are rising, which customers pay late, <br/> and how cash moves through your business, all from one dashboard.</p>
                    </div>
                </div>

            </div>
        </div>
        <div className="flex flex-col gap-16">  
            <div className="flex flex-col items-center gap-6">
                <div>
                    <h1 className="text-[32px] font-heading text-center ">Just three steps <br/> and you’re set to transact</h1>
                </div>
                <div className="flex gap-2 ">
                        <GetStarted
                        label="Get Started"
                        className="bg-brand-pure text-neutral-950 font-body gap-4 hidden lg:flex"
                        iconClassname="text-neutral-500"
                        />
                        <Download
                        label="Download app"
                        className="bg-brand-pure text-neutral-950 lg:bg-neutral-700 lg:text-brand-pure"
                        iconClassname="text-neutral-500"
                        />
                </div>
            </div>
            <div className="flex flex-col gap-12 lg:flex-row justify-center"  >
                <div className="flex flex-col gap-4 items-center">
                    <Image src="/images/phoneOne.svg" width={300} height={360} alt="iphone" priority/>
                    <div className="text-center">
                        <h3 className="font-heading text-15 font-semibold lg:text-20">Create your account</h3>
                        <p className="font-body text-neutral-300 text-15 font-medium">Get verified in less than 48 hours.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <Image src="/images/phoneTwo.svg" width={300} height={360}  alt="Iphone" priority/>
                      <div className="text-center">
                        <h3 className="font-heading text-15 font-semibold lg:text-20">Set up in minutes</h3>
                        <p className="font-body text-neutral-300 text-15 font-medium">Add your team, suppliers, and more</p>
                    </div>

                </div>
                <div className="flex flex-col gap-4 items-center">
                    <Image src="/images/phoneThree.svg" width={300} height={360}  alt="Iphone" priority/>
                      <div className="text-center">
                        <h3 className="font-heading text-15 font-semibold lg:text-20">Run your finances</h3>
                        <p className="font-body text-neutral-300 text-15 font-medium">Create invoices, pay suppliers, and more</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
