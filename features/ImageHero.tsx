 import Image from "next/image";

export default function ImageHero() {
  return (
    <div className=" relative w-full h-150 lg:h-screen  ">
        <Image
            src="/images/sectionHero.svg"
            alt="background"
            fill
            className="object-cover"
        />
    </div>
  )
}
