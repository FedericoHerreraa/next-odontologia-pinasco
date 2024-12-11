import { Metadata } from "next";
import img from "../img/contacto.png";

import { Bebas_Neue, Montserrat } from "next/font/google";
const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400'],
});
const montserrat = Montserrat({
    subsets: ['latin'],
    style: ['normal'],
    weight: ['400'],
});

export const metadata: Metadata = {
    title: "Contacta Pincasco Odontología",
    description: "En este apartado puedes contactarnos para agendar una cita, o para cualquier duda o comentario que tengas.",
};

export default function ContactUs() {
    return (
        <div className="h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${img.src})` }}>
            
            <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:top-[60%] md:right-10 md:left-auto md:translate-x-0 md:translate-y-[-50%] w-[90%] md:w-[60%] bg-[#e0f0f1] shadow-lg rounded-lg p-8">
                <h1 className={`text-4xl md:text-5xl font-bold text-gray-700 mb-10 text-center md:text-left ${bebas.className}`}>
                    Contacto
                </h1>
                <form>
                    <div className={`flex gap-4 mb-4 ${montserrat.className}`}>
                        <div className="w-1/2">
                            <label className="block text-sm font-semibold text-gray-600 mb-1">Nombre*</label>
                            <input
                                type="text"
                                placeholder="Nombre"
                                className="w-full border border-gray-300 rounded-lg px-4 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A2AF]"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-sm font-semibold text-gray-600 mb-1">Apellido*</label>
                            <input
                                type="text"
                                placeholder="Apellido"
                                className="w-full border border-gray-300 rounded-lg px-4 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A2AF]"
                            />
                        </div>
                    </div>
                    <div className={`mb-4 ${montserrat.className}`}>
                        <label className="block text-sm font-semibold text-gray-600 mb-1">Email*</label>
                        <input
                            type="email"
                            placeholder="Ej: nombreapellido@mail.com"
                            className="w-full border border-gray-300 rounded-lg px-4 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A2AF]"
                        />
                    </div>
                    <div className={`mb-4 ${montserrat.className}`}>
                        <label className="block text-sm font-semibold text-gray-600 mb-1">Teléfono</label>
                        <input
                            type="tel"
                            placeholder="Ej: 1122334455"
                            className="w-full border border-gray-300 rounded-lg px-4 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A2AF]"
                        />
                    </div>
                    <div className={`mb-4 ${montserrat.className}`}>
                        <label className="block text-sm font-semibold text-gray-600 mb-1">Asunto</label>
                        <input
                            type="text"
                            placeholder="Escribe el asunto aquí"
                            className="w-full border border-gray-300 rounded-lg px-4 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A2AF]"
                        />
                    </div>
                    <div className={`mb-6 ${montserrat.className}`}>
                        <label className="block text-sm font-semibold text-gray-600 mb-1">Mensaje*</label>
                        <textarea
                            placeholder="Deje su mensaje..."
                            className="w-full border border-gray-300 rounded-lg px-4 py-1 text-gray-700 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-[#00A2AF]"
                            ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-[20%] bg-none border border-[#00A2AF] text-[#00A2AF] font-semibold py-1 rounded-lg hover:bg-[#008891] transition-all duration-150"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
}
