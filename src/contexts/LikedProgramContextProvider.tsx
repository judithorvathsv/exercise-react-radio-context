import { ReactElement, createContext, useState } from "react";
import { IOneProgramProps } from "../interfaces";

interface ILikedProgramContext {
  likedProgramList: IOneProgramProps[];
  addLikedProgram: (likedProgram: IOneProgramProps) => void;
  deleteLikedProgram: (dislikedProgram: IOneProgramProps) => void;
}

interface ILikedProgramContextProvider {
  children: ReactElement;
}

export const LikedProgramContext = createContext({} as ILikedProgramContext);

export function ILikedProgramContextProvider({ children }: ILikedProgramContextProvider): ReactElement {
  const [likedProgramList, setLikedProgramList] = useState<IOneProgramProps[]>([]);

  //local storage data saving locally
  function addOrRemoveProgramToLocalStorage(programToAddOrRemove: IOneProgramProps, isAdd: boolean) {
    let likedProgramsStorage: any = localStorage.getItem("likedPrograsStorage");
    let likedProgramsFromStorage = JSON.parse(likedProgramsStorage);
    let likedProgramsFromStorageArray: any[] = [];

    //if storage is not empty -> put in array for looping
    if (likedProgramsStorage !== undefined && likedProgramsStorage !== null) {
      //get program objects from storage to an array
      let programValuesFromStorage = Object.values(likedProgramsFromStorage);
      programValuesFromStorage.forEach((program) => likedProgramsFromStorageArray.push(program));

      //adding new liked program, if it is not already added
      if (isAdd) {
        let isAlreadyAdded = false;
        for (let i = 0; i < likedProgramsFromStorageArray.length; i++) {
          if (likedProgramsFromStorageArray[i].id === programToAddOrRemove.id) {
            isAlreadyAdded = true;
          }
        }
        if (isAlreadyAdded == false) {
          likedProgramsFromStorageArray.push(programToAddOrRemove);
        }
        localStorage.setItem("likedPrograsStorage", JSON.stringify(likedProgramsFromStorageArray));
      }

      //removing liked programs
      else if (isAdd == false) {
        for (let i = 0; i < likedProgramsFromStorageArray.length; i++) {
          if (likedProgramsFromStorageArray[i].id === programToAddOrRemove.id) {
            likedProgramsFromStorageArray.splice(i, 1);
            localStorage.setItem("likedPrograsStorage", JSON.stringify(likedProgramsFromStorageArray));
            break;
          }
        }
      }
    } else {
      likedProgramsFromStorageArray.push(programToAddOrRemove);
      localStorage.setItem("likedPrograsStorage", JSON.stringify(likedProgramsFromStorageArray));
    }
  }

  const addLikedProgram = (likedProgram: IOneProgramProps) => {
    if (likedProgramList.filter((program: IOneProgramProps) => program.id !== likedProgram.id)) {
      setLikedProgramList((oldLikedPrograms: IOneProgramProps[]) => [...oldLikedPrograms, likedProgram]);
      addOrRemoveProgramToLocalStorage(likedProgram, true);
    }
  };

  const deleteLikedProgram = (dislikedProgram: IOneProgramProps) => {
    setLikedProgramList((oldLikedPrograms: any) => {
      return oldLikedPrograms.filter((program: any) => program.id !== dislikedProgram.id);
    });
    addOrRemoveProgramToLocalStorage(dislikedProgram, false);
  };

  const values: ILikedProgramContext = {
    likedProgramList,
    addLikedProgram,
    deleteLikedProgram,
  };

  return <LikedProgramContext.Provider value={values}>{children}</LikedProgramContext.Provider>;
}
