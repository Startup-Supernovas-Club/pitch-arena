import { Trophy, CalendarDays, CheckCircle, ArrowRight, HandCoins } from "lucide-react";

export default function InscriptionSection() {
  return (
    <section className="w-full flex flex-col items-center py-10 px-4 sm:px-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-center">Inscripción</h2>
      <p className="text-gray-500 text-center mt-2 text-sm md:text-base">
        Asegura tu lugar para participar y presentar tu idea innovadora
      </p>

      <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:gap-12 w-full max-w-6xl">
        <article className="flex flex-col gap-6 justify-between bg-gray-100 rounded-xl p-6 sm:p-8 shadow-md w-full lg:w-2/3">
          <div className="flex items-center gap-3">
            <HandCoins className="text-[#246AAF] w-6 h-6 md:w-7 md:h-7" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">
              Participa y sé el ganador de:
            </h3>
          </div>
          <ul className="text-gray-700 mt-4 space-y-4 text-sm md:text-base">
            <li className="flex items-center gap-3">
              <Trophy className="text-yellow-500 w-5 h-5 md:w-6 md:h-6" />
              <strong>Primer lugar:</strong> 25,000 colones
            </li>
            <li className="flex items-center gap-3">
              <Trophy className="text-gray-500 w-5 h-5 md:w-6 md:h-6" />
              <strong>Segundo lugar:</strong> 15,000 colones
            </li>
            <li className="flex items-center gap-3">
              <Trophy className="text-orange-500 w-5 h-5 md:w-6 md:h-6" />
              <strong>Tercer lugar:</strong> 10,000 colones
            </li>
          </ul>
          <button className="mt-4 w-full sm:w-[12rem] flex items-center justify-center gap-2 bg-[#246AAF] text-white p-3 rounded-full text-sm md:text-[15px] font-medium transition">
            Inscribirse ahora <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </article>

        <article className="flex flex-col justify-between bg-gray-100 rounded-xl p-6 sm:p-8 shadow-md w-full lg:w-1/2">
          <div className="flex items-center gap-3">
            <CheckCircle className="text-blue-500 w-6 h-6 md:w-7 md:h-7" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">
              Este evento es válido para Sellos Azules
            </h3>
          </div>
          <p className="text-gray-700 mt-4 flex items-center gap-3 text-sm md:text-base">
            <CalendarDays className="w-5 h-5 md:w-6 md:h-6 text-gray-500" />
            Lee las fechas e indicaciones para asistir.
          </p>
          <p className="text-gray-700 mt-2 flex items-center gap-3 text-sm md:text-base">
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-gray-500" />
            Entra a EventBridge y confirma tu asistencia.
          </p>
        </article>
      </div>
    </section>
  );
}
