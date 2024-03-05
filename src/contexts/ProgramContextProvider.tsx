import { ReactElement, createContext, useState } from "react";
import { IOneProgramProps } from "../interfaces";

interface IContext {
  programs: IOneProgramProps[];
  modifyProgramList: (filteredPrograms: any) => void;
}

interface IProgramContextProvider {
  children: ReactElement;
}

export const ProgramContext = createContext({} as IContext);

export function ProgramContextProvider({ children }: IProgramContextProvider): ReactElement {
  const [programs, setPrograms] = useState<IOneProgramProps[]>([]);

  const modifyProgramList = (filteredPrograms: any) => setPrograms(filteredPrograms);

  const values: IContext = {
    programs,
    modifyProgramList,
  };

  return <ProgramContext.Provider value={values}>{children}</ProgramContext.Provider>;
}

//channels->channel, likedprogram->program, programs->program, selectedchannel->program
