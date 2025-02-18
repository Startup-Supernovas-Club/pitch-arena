import { ChevronRight } from "lucide-react"

interface RuleProps {
  numRule: number;
  nameRule: string;
  ruleDescription: string;
}

export const Rule = ({numRule, nameRule, ruleDescription}: RuleProps) =>{
      return(
            <div
              tabIndex={0}
              className="bg-lightGray text-gray focus:bg-blue focus:text-white collapse w-full h-full"
            >
              <div className="collapse-title">
                <div className="flex flex-row justify-between items-center gap-1">
                  <div className="flex flex-row items-center gap-1">
                    <h1 className="text-2xl lg:text-4xl font-semibold">{numRule}</h1>
                    <h2 className="text-2xl lg:text-4xl font-semibold text-left">{nameRule}</h2>
                  </div>
                  {/* <div>
                    <ChevronRight className="w-7 h-7 md:w-8 md:h-8 font-bold" />
                  </div> */}
                </div>
              </div>
              <div className="collapse-content">
                <p>{ruleDescription}</p>
              </div>
            </div>
      )
}