'use client'


import img from "@/app/img/contactoBackground.png";
import { bebas, montserrat } from "@/app/fonts/fonts";
import { useState } from 'react';

export const ContactContent = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const onSubmit = () => {
        const { name, lastName, email, phone, subject, message } = formData;
        const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;

        const whatsappMessage = `
            ¡Hola! Quiero ponerme en contacto con ustedes. Mi nombre es ${name} ${lastName}, y pueden contactarme al correo ${email}. Mi número de teléfono es ${phone || 'No especificado'}. Asunto: "${subject || 'No especificado'}". Mensaje: \n"${message}" \nQuedo atento a su respuesta. ¡Gracias!
        `.trim();
    
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappURL, "_blank");
    }


    return (
        <div className="h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${img.src})` }}>
            <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:top-[50%] md:right-10 md:left-auto md:translate-x-0 md:translate-y-[-50%] w-[90%] md:w-[60%] bg-[#e0f0f1] shadow-lg rounded-lg p-8">
                <h1 className={`text-4xl md:text-5xl font-bold text-gray-700 mb-10 text-center md:text-left ${bebas.className}`}>
                    Contacto
                </h1>
                <form onSubmit={onSubmit}>
                    <div className={`flex gap-4 mb-4 ${montserrat.className}`}>
                        <div className="w-1/2">
                            <label className="block text-sm font-semibold text-gray-600 mb-1">Nombre*</label>
                            <input
                                type="text"
                                placeholder="Nombre"
                                name="name"
                                value={formData.name}
                                required
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-lg px-4 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A2AF]"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-sm font-semibold text-gray-600 mb-1">Apellido*</label>
                            <input
                                type="text"
                                placeholder="Apellido"
                                name="lastName"
                                required
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-lg px-4 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A2AF]"
                            />
                        </div>
                    </div>
                    <div className={`mb-4 ${montserrat.className}`}>
                        <label className="block text-sm font-semibold text-gray-600 mb-1">Email*</label>
                        <input
                            type="email"
                            placeholder="Ej: nombreapellido@mail.com"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A2AF]"
                        />
                    </div>
                    <div className={`mb-4 ${montserrat.className}`}>
                        <label className="block text-sm font-semibold text-gray-600 mb-1">Teléfono</label>
                        <input
                            type="tel"
                            placeholder="Ej: 1122334455"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A2AF]"
                        />
                    </div>
                    <div className={`mb-4 ${montserrat.className}`}>
                        <label className="block text-sm font-semibold text-gray-600 mb-1">Asunto</label>
                        <input
                            type="text"
                            placeholder="Escribe el asunto aquí"
                            name="subject"
                            value={formData.subject}
                            required
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00A2AF]"
                        />
                    </div>
                    <div className={`mb-6 ${montserrat.className}`}>
                        <label className="block text-sm font-semibold text-gray-600 mb-1">Mensaje*</label>
                        <textarea
                            placeholder="Deje su mensaje..."
                            name="message"
                            value={formData.message}
                            required
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-1 text-gray-700 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-[#00A2AF]"
                        ></textarea>
                    </div>
                    <p className={`mb-2 text-zinc-500 md:text-base text-sm ${montserrat.className}`}>***Este mensaje se enviara al <span className="text-green-600">WhatsApp</span> de Pinasco***</p>
                    <div className="md:text-left text-center">    
                        <button
                            type="submit"
                            className="md:w-[20%] w-[30%] bg-none border border-[#00A2AF] text-[#00A2AF] font-semibold py-1 rounded-lg hover:scale-110 transition-all duration-200"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    ) 
}
