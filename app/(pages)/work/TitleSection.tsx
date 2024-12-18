


export const TitleSection = ({
    title,
} : {
    title: string,
}) => {
    return (
        <div className="w-full min-h-fit text-center flex flex-col gap-2 bg-zinc-100 shadow-xl py-5 px-10 mt-40">
            <h1 className="text-4xl">{title}</h1>
        </div>
    )
}