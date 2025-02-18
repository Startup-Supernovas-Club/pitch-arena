import { JudgeInfo } from '../ui/JudgeInfo';

export const Judges = () => {
  return (
    <section className="w-full flex flex-col items-center py-16 px-4 sm:px-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-center">Jueces</h2>
      <p className="text-gray-500 text-center mt-2 text-sm md:text-base">
        Conoce más de las personas que te van a evaluar{" "}
      </p>
      <div className="mt-8 flex flex-col gap-8 items-center justify-center lg:flex-row lg:gap-12">
        <article className="flex flex-col h-full justify-center items-center rounded-xl px-6 sm:px-8 w-full">
          <div className="w-full flex flex-col md:flex-row items-center justify-center">
            <div className='flex flex-col md:flex-row gap-12'>
                  <JudgeInfo judgeName={"Briansy Angulo Gaucherand"} judgeDescription={"Coordinador de Innovación"} judgePhoto={"/images/Judge1.jpeg"}/>
                  <JudgeInfo judgeName={'Mariana Solano'} judgePhoto={"/images/judge2.jpg"} judgeDescription={"Gestora de Innovación en Parque Tec"}/>
                  <JudgeInfo judgeName={'Alonso Morales'} judgePhoto={"/images/judge3.png"} judgeDescription={"Experto en Negocios Digitales y Mercadeo"}/>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
