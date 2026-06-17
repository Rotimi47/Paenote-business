import { Download, GetStarted } from "@/components";
import Image from "next/image";



export default function Hero() {
  return (
    <div className=" bg-brand-pure mx-1.5 rounded-[20px] overflow-hidden 2xl:max-w-380 2xl:mx-auto">
        <div className="lg:flex">
            <div className=" flex flex-col gap-6 py-8 px-4 lg:pl-14 xl:pl-28 lg:pt-30 lg:max-w-180">
                
                <h1 className="text-neutral-950 font-heading text-4xl lg:text-h1 leading-105 tracking-[0.01em] ">One place to run<br/>all your business finances</h1>
                <p className="text-neutral-740 font-body text-15 leading-140 tracking-200">From cross-border payments to payroll and taxes, Paenote handles every financial operation so you can focus on the trade.</p>
                <div className="lg:flex gap-2">
                    <GetStarted 
                        label="Get started"
                        className="hidden lg:flex gap-4"
                    />
                    <div>
                        
                        <div className="lg:hidden">
                            <Download variant="hero" />
                        </div>

                        
                        <div className="hidden lg:block">
                            <Download variant="light" />
                        </div>
                    </div>
                </div>

            </div>
    
            <div className="relative right-10 xl:right-40 lg:top-58 xl:top-10">
                <Image src="/images/heroImage.svg" alt="Iphone"  width={960} height={892} priority className="w-full max-w-120  xl:max-w-240 h-auto"/>

            </div>  
        
        
        </div>
    </div>
  )
}
