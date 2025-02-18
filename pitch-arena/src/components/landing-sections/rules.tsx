import { ChevronRight } from "lucide-react";
import { Rule } from "../ui/Rule";

export const RulesSection = () => {
  return (
    <section className="w-full flex flex-col items-center py-10 px-4 sm:px-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-center">Reglas</h2>
      <p className="text-gray-500 text-center mt-2 text-sm md:text-base">
        Conoce las reglas del evento y asegura tu participación
      </p>

      <div className="mt-8 flex flex-col gap-8 items-center justify-center lg:flex-row lg:gap-12 w-full">
        <article className="flex flex-col h-full gap-6 justify-center items-center rounded-xl px-6 sm:px-8 w-full">
          <div className="w-full flex flex-col md:flex-row items-center md:items-start md:justify-center gap-5 h-52 md:h-full overflow-y-auto">
            <div className=" flex flex-col gap-5">
              <Rule
                numRule={1}
                nameRule={"Participación y Puntualidad"}
                ruleDescription={
                  <>
                    - El concurso se realizará de manera presencial en ULACIT.
                    <br />
                    - Los participantes deberán llegar puntualmente a la hora
                    estipulada.
                    <br />- En caso de retraso, deberán comunicarse con un
                    organizador; de lo contrario, podrían ser excluidos del
                    evento.
                  </>
                }
              />
              <Rule
                numRule={2}
                nameRule={"Tema y Contenido del Pitch"}
                ruleDescription={
                  "La idea presentada debe ser innovadora y estar relacionada con Biomedicina o Ciencias de la vida. Se evaluará la originalidad, relevancia y aplicabilidad de la propuesta. Se prohíbe la lectura"
                }
              />
              <Rule
                numRule={3}
                nameRule={"Estructura del Pitch"}
                ruleDescription={
                  <>
                    Cada presentación deberá seguir la siguiente estructura:
                    <br />
                    ✔️ Introducción
                    <br />
                    ✔️ Identificación del problema
                    <br />
                    ✔️ Solución propuesta
                    <br />
                    ✔️ Impacto y diferenciación
                  </>
                }
              />
            </div>
            <div className=" flex flex-col gap-5">
              <Rule
                numRule={4}
                nameRule={"Evaluación"}
                ruleDescription={
                  <>
                    Un jurado compuesto por tres jueces calificará cada
                    presentación.
                    <br />
                    Cada criterio será evaluado en una escala de 1 a 20.
                    <br />
                    La decisión de los jueces es inapelable.
                    <br />
                    <br />
                    Los criterios de evaluación serán:
                    <br />
                    🟢 Claridad y estructura: ¿El pitch es comprensible y bien
                    organizado?
                    <br />
                    🟢 Innovación y viabilidad: ¿La idea es creativa y factible?
                    <br />
                    🟢 Impacto y relevancia: ¿La solución responde a una
                    necesidad en biomedicina o ciencias de la salud?
                    <br />
                    🟢 Ajuste al tiempo: ¿Cumple con la duración establecida
                    (28-33 segundos)?
                    <br />
                    🟢 Presentación: lenguaje corporal y demás.
                  </>
                }
              />
              <Rule
                numRule={5}
                nameRule={"Penalizaciones y Descalificación"}
                ruleDescription={
                  <>
                    ❌ Pitches que duren menos de 28 segundos o más de 33
                    segundos recibirán una penalización.
                    <br />❌ Si la idea no está relacionada con biomedicina o
                    ciencias de la vida, el participante será descalificado.
                    <br />❌ El uso de lenguaje ofensivo o contenido inapropiado
                    resultará en descalificación inmediata.
                  </>
                }
              />
              <Rule
                numRule={6}
                nameRule={"Premiación"}
                ruleDescription={
                  <>
                    🏆 1.er lugar: ₡25,000
                    <br />
                    🥈 2.º lugar: ₡15,000
                    <br />
                    🥉 3.er lugar: ₡10,000
                  </>
                }
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
