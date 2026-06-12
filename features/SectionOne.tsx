import Image from "next/image"

export default function SectionOne() {
  return (
    <div className='bg-dark w-full mx-auto px-8 py-20 lg:pt-40 lg:pb-20 2xl:max-w-380 2xl:mx-auto'>
      <div className="text-center flex flex-col gap-8 lg:text-left lg:max-w-150 lg:mx-auto">
        <div className="flex gap-2 justify-center lg:justify-start ">
          <Image src="/images/hourglassBadge.svg" alt=" hourglass icon" width={59} height={64} priority/>
          <Image src="/images/questionBadge.svg" alt="question icon"  width={59} height={64} priority/>

        </div>
        <div className="flex flex-col gap-8 lg"> 
          <p className="font-body font-medium text-2xl leading-115 tracking-200 lg:text-4xl">You have a bank account that takes <span className="lg:text-neutral-740">three days to clear a transfer.</span> </p>

           <p className="font-body font-medium text-2xl text-neutral-740 leading-115 tracking-200 lg:text-4xl"> A domiciliary account that mostly confuses you...</p>
        </div>
        <div>
          <p className="text-brand-main-07 font-body font-medium text-18">That changes with Paenote.</p>
        </div>
      </div>

    </div>
  )
}
