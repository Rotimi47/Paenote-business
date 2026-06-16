import { Download, GetStarted } from "@/components";
import Image from "next/image";


export default function AboutHero() {
  return (
    <div className=" mx-2 2xl:max-w-380 2xl:mx-auto bg-about px-4 py-8 lg:px-27.5 lg:pt-40 lg:pb-20 rounded-t-4xl">
      <div className="flex flex-col gap-20 lg:gap-40"> 
        <div className="flex flex-col gap-8 w-full mx-auto max-w-4xl">
          <h1 className="text-brand-pure font-heading text-4xl lg:text-h1 leading-105 tracking-[0.01em]">Built for the businesses <br/> moving Africa forward</h1>
          <p className="text-neutral-3000 font-body text-15 leading-140 tracking-200">One account for payments, invoices, payroll, expenses, and taxes. <span className="hidden lg:inline"><br/></span> Built for how African businesses actually work.</p>
          <div className="lg:flex gap-2">
            <GetStarted 
                label="Get started"
                className="hidden lg:flex gap-4"
            />
             <div>       
                <div className="lg:hidden">
                    <Download variant="light" />
                </div>

                
                <div className="hidden lg:block">
                    <Download variant="dark" />
                </div>
              </div>
          </div>
        </div>
        <div className="w-full mx-auto max-w-300">
          <Image src="/images/ghanaMustgo.svg" alt="About Hero Image" width={1200} height={700} priority/>
        </div>
      </div>
    </div>
  )
}
