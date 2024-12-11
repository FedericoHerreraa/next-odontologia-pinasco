
import Marquee from "react-fast-marquee"
import Image from "next/image"
import p from '../img/P.png'

export const CustomSeparator = () => {
    return (
        <div className="my-20 flex flex-col gap-5 h-[20]">
            <Marquee speed={100} gradient={false}>
                {Array(10).fill("").map((_, index) => (
                    <div key={index} className="flex items-center">
                        <Image
                            src={p}
                            alt="p logo"
                            width={40}
                            height={40}
                        />
                        <div className="md:w-[250px] w-[150px] h-[1px] bg-zinc-400 md:mx-10 mx-5"></div>
                    </div>
                ))}
            </Marquee>
            <Marquee speed={100} gradient={false} direction="right">
                {Array(10).fill("").map((_, index) => (
                    <div key={index} className="flex items-center">
                        <Image
                            src={p}
                            alt="p logo"
                            width={40}
                            height={40}
                        />
                        <div className="md:w-[250px] w-[150px] h-[1px] bg-zinc-400 md:mx-10 mx-5"></div>
                    </div>
                ))}
            </Marquee>
        </div>
    )
}
