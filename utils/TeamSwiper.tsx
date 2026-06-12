"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image"
import type { Props } from "@/types";

export default function TeamSwiper({teams}: Props) {
  return (
    <Swiper
        className=""
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            speed={400}
            grabCursor={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
        >
        {teams.map((team, index) => (
            <SwiperSlide key={index}>
                <div className="flex justify-center">
                    <div className='flex flex-col gap-6 bg-white/5 border border-white/10 p-3 rounded-xl'>
                        <Image src={team.image} alt='CEO' width={288} height={363} priority/>
                        <div>
                            <h3>{team.name}</h3>
                            <p>{team.role}</p>
                        </div>
                    </div>
                </div>

            </SwiperSlide>

        ))}

    </Swiper>
  )
}
