
import { Metadata } from "next";
import { HistoryContent } from "./HistoryContent";

export const metadata: Metadata = {
    title: "Historia | Pinasco Odontología",
    description: "En este espacio te contamos acerca de nuestra historia, como llegamos hasta aqui, y que nos motiva a seguir adelante.",
};

export default function History() {
    return (
        <div>
            <p className="text-center mt-10 mb-3 text-zinc-500 md:text-md text-sm">Como llegamos hasta donde estamos.</p>
            <h1 className="md:text-5xl text-3xl text-black  text-center">Conoce la Historia de <span className="bg-gradient-to-r to-[#00a2af] from-[#46bcc9] bg-clip-text text-transparent">Pinasco.</span></h1>
            <section className="mt-40 mb-20 flex flex-col gap-56 md:w-[60%] w-[95%] mx-auto">
                <HistoryContent />
            </section>
        </div>
    )
}


