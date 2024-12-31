
import { bebas } from "@/app/fonts/fonts"

export const TitleSection = ({
    title,
} : {
    title: string,
}) => {
    return (
        <div className="w-full min-h-fit text-center flex flex-col gap-2 shadow-xl py-5 px-10 mt-40">
            <h1 className={`md:text-4xl text-3xl ${bebas.className}`}>{title}.</h1>
        </div>
    )
}