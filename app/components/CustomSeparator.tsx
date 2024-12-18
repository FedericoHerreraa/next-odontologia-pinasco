'use client'


import Marquee from "react-fast-marquee"
import Image from "next/image"
import p from '../img/P.png'
import { useMobileView } from "@/app/context/MobileView"

export const CustomSeparator = () => {
    const { isMobile } = useMobileView()

    return (
        <div className="my-20 flex flex-col gap-5 h-[20]">
            {Array(2).fill("").map((_, index) => (
                <Marquee speed={100} gradient={false} key={index} direction={index == 1 ? "right" : "left"}>
                    {Array(10).fill("").map((_, index) => (
                        <div key={index} className="flex items-center">
                            <Image
                                src={p}
                                alt="p logo"
                                width={isMobile ? 30 : 40}
                                height={40}
                            />
                            <div className="md:w-[250px] w-[150px] md:h-[1px] h-[0.8px] bg-zinc-400 md:mx-10 mx-5"></div>
                        </div>
                    ))}
                </Marquee>
            ))}
        </div>
    )
}
