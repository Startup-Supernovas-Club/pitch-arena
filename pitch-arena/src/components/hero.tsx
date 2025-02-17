import Image from 'next/image'


export default function HeroComponent() {
    return (
        <section className="min-h-screen w-full flex items-center justify-center bg-background">
            <div className="container px-4 md:px-6 py-10">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] animate-float">
                            <Image
                                src="/logos/Pitch-Arena-Logo.svg"
                                alt="Pitch Arena Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-6 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-[400] tracking-tight">
                            Pitch Arena
                        </h1>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-[400] text-[#246AAF]">
                            Science and Biomedical.
                        </h2>
                        <p className="text-[#75798E] text-lg max-w-[600px] leading-relaxed">
                            Pon a prueba tus habilidades en Ciencias Naturales y en Ingeniería Biomédica presentándonos tu innovadora idea de negocio.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-6">
                            <div className="flex flex-col sm:flex-row gap-4 mt-6">
                                
                                <button className="bg-[#246AAF] text-white text-base font-medium px-6 py-3 rounded-full hover:bg-blue-700 transition">
                                    Inscripción
                                </button>

                                <button className="border border-gray-400 text-gray-700 text-base font-medium px-6 py-3 rounded-full hover:bg-gray-100 transition">
                                    Más Información
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
