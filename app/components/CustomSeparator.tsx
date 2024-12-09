
import Marquee from "react-fast-marquee"
import { FaTooth } from "react-icons/fa";

export const CustomSeparator = () => {
    return (
        <div className="my-20 flex flex-col gap-5 h-[20]">
            <Marquee speed={100} gradient={false}>
                {Array(10).fill("").map((_, index) => (
                    <div key={index} className="flex items-center">
                        <FaTooth size={24} className="text-[#46bcc9]" />
                        <div className="w-[200px] h-[1.5px] bg-[#a6a6a6] mx-10"></div>
                    </div>
                ))}
            </Marquee>
            <Marquee speed={100} gradient={false} direction="right">
                {Array(10).fill("").map((_, index) => (
                    <div key={index} className="flex items-center">
                        <FaTooth size={24} className="text-[#46bcc9]" />
                        <div className="w-[200px] h-[1.5px] bg-[#a6a6a6] mx-10"></div>
                    </div>
                ))}
            </Marquee>
        </div>
    )
}