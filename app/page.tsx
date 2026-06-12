import { CodeBelt, Hero, ImageHero, SectionFour, SectionOne, SectionThree, SectionTwo, Testimonials } from "@/features";


export default function Home() {
  return (
    <div>
      <Hero/>
      <SectionOne/>
      <SectionTwo/>
      <div className="relative overflow-hidden"> 
        <SectionThree/>
        <CodeBelt/>
        <Testimonials/>
      </div>
      <ImageHero/>
      <SectionFour/>
    </div>
  )
}


