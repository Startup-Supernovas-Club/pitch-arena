import { JudgeInfo } from '../ui/JudgeInfo';
export const Judges = () => {
  return (
    <section className="w-full flex flex-col items-center py-6 px-4 sm:px-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-center">Jueces</h2>
      <p className="text-gray-500 text-center mt-2 text-sm md:text-base">
        Conoce más de las personas que te van a evaluar{" "}
      </p>
      <div className="mt-8 flex flex-col gap-8 items-center justify-center lg:flex-row lg:gap-12 w-full max-w-6xl">
        <article className="flex flex-col h-full gap-6 justify-center items-center rounded-xl px-6 sm:px-8 w-full">
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-5">
            <div className='flex flex-col md:flex-row md:gap-14'>
                  <JudgeInfo judgeName={"Name 1"}/>
                  <JudgeInfo judgeName={'Name 2'}/>
                  <JudgeInfo judgeName={'Name 3'}/>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
