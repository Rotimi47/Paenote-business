import Image from "next/image"

export default function SectionTwo() {
  return (
    <div className="hidden bg-black bg-hero lg:flex w-full mx-auto 2xl:max-w-380 2xl:mx-auto justify-center lg:pt-5">
        <div className="flex  items-center">
            <Image src="/images/macScreen.svg" alt="mac laptop" width={930} height={1059} priority/>

        </div>
    </div>
  )
}
