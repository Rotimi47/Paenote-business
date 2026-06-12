import { TeamSwiper } from '@/utils'
import { teams } from '@/constants'
import Image from 'next/image'


export default function AboutSection() {
  return (
    <div className='w-full mx-auto 2xl:max-w-380 2xl:mx-auto py-20 px-4 lg:pt-20 flex flex-col gap-30 lg:gap-60'>
        <div className='flex flex-col gap-10 w-full mx-auto max-w-4xl'>
            <h3 className='text-brand-main-07 text-xl lg:text-2xl leading-140 font-body font-medium tracking-200'>Paenote began with a simple observation.</h3>
            <h3 className='text-neutral-200 text-xl lg:text-2xl leading-140 font-body font-medium tracking-200'>Businesses across Nigeria were moving serious money, managing teams, and trading across borders, yet still relying on fragmented financial tools to operate.</h3>
            <h3 className='text-neutral-200 text-xl lg:text-2xl leading-140 font-body font-medium tracking-200'>Payroll was manual. Tax compliance lived in spreadsheets. Supplier payments depended on informal FX channels. And as businesses grew, the system became harder to manage.</h3>
            <h3 className='text-neutral-200 text-xl lg:text-2xl leading-140 font-body font-medium tracking-200'>We built Paenote to replace that complexity with one platform for payments, payroll, expenses, taxes, and funding, built specifically for how African businesses work.</h3>
        </div>
        <div className='flex flex-col gap-8 lg:16 w-full mx-auto max-w-4xl'>
            <h1 className='text-brand-pure font-heading text-3xl lg:text-5xl leading-105 tracking-[0.01em] text-center'>Our team</h1>

            <div className='lg:hidden'>
                <TeamSwiper teams={teams} />
            </div>

             <div className='hidden lg:flex flex-col lg:flex-row gap-4 mx-auto  '>
                <div className='flex flex-col gap-6'>
                    <Image src="/images/ceoTeam.svg" alt='CEO' width={288} height={363} priority/>
                    <div>
                        <h3>Chukwudi Ubah</h3>
                        <p>Founder & CEO</p>
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <Image src="/images/cfoTeam.svg" alt='CEO' width={288} height={363} priority/>
                    <div>
                        <h3>Chukwudi Ubah</h3>
                        <p>Founder & CEO</p>
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <Image src="/images/ctoTeam.svg" alt='CEO' width={288} height={363} priority/>
                    <div>
                        <h3>Chukwudi Ubah</h3>
                        <p>Founder & CEO</p>
                    </div>
                </div>
            </div> 
        </div>
        <div className='flex flex-col gap-8 lg:gap-16 w-full mx-auto max-w-4xl'>
            <h1 className='text-brand-pure font-heading text-3xl lg:text-5xl leading-105 tracking-[0.01em] text-center'>Our core values</h1>
            <div className='flex flex-col lg:flex-row gap-4 '>
                <div className='flex flex-col gap-8 items-center lg:items-start '>
                    <div  className='flex flex-col gap-4 text-center  lg:text-start'>
                        <h3 className='font-heading text-15 text-brand-main-11 font-semibold'>Integrity</h3>
                        <p className='font-body font-medium text-15 leading-140 text-neutral-300 tracking-75'>We operate with transparency, honesty, and ethical responsibility in all financial dealings.</p>
                    </div>
                    <div className='bg-[#5CD0E526] w-[288px] h-40 rounded-2xl flex items-center justify-center'>
                        <Image src="/icons/intergrityIcon.svg" alt='intergrity' width={32} height={32} priority />

                    </div>
                </div>
                <div  className='flex flex-col gap-8 items-center lg:items-start '>
                    <div  className='flex flex-col gap-4  text-center lg:text-start'>
                        <h3 className='font-heading text-15 text-orange-02 font-semibold'>Reliability</h3>
                        <p className='font-body font-medium text-15 leading-140 text-neutral-300 tracking-75'>We ensure financial security and consistency, building long-term trust with clients.</p>
                    </div>
                    <div className='bg-[#F88C9E26] w-[288px] h-40 rounded-2xl flex items-center justify-center'>
                         <Image src="/icons/reliabilityIcon.svg" alt='intergrity' width={32} height={32} priority />
                    </div>

                </div>
                <div  className='flex flex-col gap-8 items-center lg:items-start'>
                    <div className='flex flex-col gap-4  text-center  lg:text-start'>
                        <h3 className='font-heading text-15 text-purple-02 font-semibold'>Customer first</h3>
                        <p className='font-body font-medium text-15 leading-140 text-neutral-300 tracking-75'>Every product decision starts with the businesses we serve and the problems they face every day.</p>
                    </div>
                    <div className='bg-[#B99DFA26] w-[288px] h-40 rounded-2xl flex items-center justify-center'>
                         <Image src="/icons/customerIcon.svg" alt='intergrity' width={32} height={32} priority />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
