
import Marquee from "react-fast-marquee"

export const CustomSeparator = () => {
    return (
        <div className="my-20 flex flex-col gap-5 h-[20]">
            <Marquee speed={100} gradient={false}>
                {Array(10).fill("").map((_, index) => (
                    <div key={index} className="flex items-center">
                        <div className="md:w-[200px] w-[150px] h-[1.5px] bg-[#00a2af] md:mx-10 mx-5"></div>
                    </div>
                ))}
            </Marquee>
            <Marquee speed={100} gradient={false} direction="right">
                {Array(10).fill("").map((_, index) => (
                    <div key={index} className="flex items-center">
                        <div className="md:w-[200px] w-[150px] h-[1.5px] bg-[#46bcc9] md:mx-10 mx-5"></div>
                    </div>
                ))}
            </Marquee>
        </div>
    )
}
