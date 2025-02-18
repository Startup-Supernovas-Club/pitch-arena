import { ChevronRight } from "lucide-react";
import { Rule } from "../ui/Rule";

export const RulesSection = () => {
  return (
    <section className="w-full flex flex-col items-center py-10 px-4 sm:px-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-center">Reglas</h2>
      <p className="text-gray-500 text-center mt-2 text-sm md:text-base">
        Conoce las reglas del evento y asegura tu participación
      </p>

      <div className="mt-8 flex flex-col gap-8 items-center justify-center lg:flex-row lg:gap-12 w-full max-w-6xl">
        <article className="flex flex-col h-full gap-6 justify-center items-center rounded-xl px-6 sm:px-8 w-full">
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-5">
            <div className=" flex flex-col gap-5">
              <Rule
                numRule={1}
                nameRule={"Rule"}
                ruleDescription={"First rule description"}
              />
              <Rule
                numRule={2}
                nameRule={"Rule"}
                ruleDescription={"Second rule description"}
              />
              <Rule
                numRule={3}
                nameRule={"Rule"}
                ruleDescription={"Third rule description"}
              />
            </div>
            <div className=" flex flex-col gap-5">
              <Rule
                numRule={4}
                nameRule={"Rule"}
                ruleDescription={"Fourth rule description"}
              />
              <Rule
                numRule={5}
                nameRule={"Rule"}
                ruleDescription={"Fifth rule description"}
              />
              <Rule
                numRule={6}
                nameRule={"Rule"}
                ruleDescription={"Sixth rule description"}
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
