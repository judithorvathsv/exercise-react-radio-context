import { useEffect, useState } from "react";
import { get } from "./http";
import Program from "./Program";
import Categories from "./Categories";
import ProgramSearchInput from "./ProgramSearchInput";
import { IOneProgramProps } from "./interfaces";

export interface IProgramProps {
  getAllPrograms: (allPrograms: IOneProgramProps[]) => void;
  getSelectedCategoryId: (selectedCategoryId: string) => void;
}

const Programs = ({ getAllPrograms, getSelectedCategoryId }: IProgramProps) => {
  const [programs, setPrograms] = useState<IOneProgramProps[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("0");
  const [searchedProgramName, setSearchedProgramName] = useState<string>("");
  const [searchedPrograms, setSearchedPrograms] = useState<IOneProgramProps[]>([]);

  //set selected category from Categories dropdown
  let handleSelectedCategory = (selectedCategoryId: string) => {
    setSelectedCategoryId(selectedCategoryId);
    getSelectedCategoryId(selectedCategoryId);
  };

  //fetch all programs and filter by category if there is selected category
  let url = `http://api.sr.se/api/v2/programs?format=json`;
  let categoryParameter = `/index?programcategoryid=${selectedCategoryId}&format=json`;
  if (Number(selectedCategoryId) > 0) {
    url = `http://api.sr.se/api/v2/programs${categoryParameter}`;
  }

  //fetch program
  useEffect(() => {
    async function fetchPrograms() {
      const data = (await get(url)) as any;
      const fetchedPrograms: any = data.programs.map((fetchedPrograms: any) => {
        return fetchedPrograms;
      });
      setPrograms(fetchedPrograms);
      getAllPrograms(fetchedPrograms);
    }
    fetchPrograms().then((programs) => programs);
  }, [selectedCategoryId]);

  //fetch searchedProgram by input in Navbar
  function handleSearchedProgram(searchedProgramName: string) {
    setSearchedProgramName(searchedProgramName);
  }

  //searched program
  useEffect(() => {
    let searchedProgramsArray: IOneProgramProps[] = [];
    function getSearchedPrograms() {
      if (programs !== undefined && programs.length >= 0) {
        programs.map((program) => {
          if (program.name.includes(searchedProgramName)) {
            (searchedProgramsArray as IOneProgramProps[]).push(program as IOneProgramProps);
          }
        });

        setSearchedPrograms(searchedProgramsArray);
      }
    }

    getSearchedPrograms();
  }, [searchedProgramName]);

  return (
    <>
      <Categories handleSelectedCategory={handleSelectedCategory} />
      <ProgramSearchInput handleSearchedProgram={handleSearchedProgram} />
      <div>
        {searchedPrograms !== null &&
          searchedProgramName.length > 1 &&
          searchedPrograms!.map((program: any) => (
            <div>
              <Program program={program} key={program.id} />
            </div>
          ))}
      </div>
      <hr />

      <div>
        {programs !== undefined &&
          programs.length > 0 &&
          programs.map((program: any) => (
            <div>
              <Program program={program} key={program.id} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Programs;


