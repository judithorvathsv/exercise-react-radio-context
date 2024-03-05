import { useContext, useEffect, useState } from "react";
import { get } from "../utilities/http";
import Program from "./Program";
import Categories from "./Categories";
import ProgramSearchInput from "./ProgramSearchInput";
import { IOneProgramProps } from "../interfaces";
import { Link } from "react-router-dom";
import { CategoryContext } from "../contexts/CategoryContextProvider";

const Programs = () => {
  const [programs, setPrograms] = useState<IOneProgramProps[]>([]);
  const [searchedProgramName, setSearchedProgramName] = useState<string>("");
  const [searchedPrograms, setSearchedPrograms] = useState<IOneProgramProps[]>([]);
  const [page, setPage] = useState(1);
  let programArray: IOneProgramProps[] = [];
  const { selectedCategoryId } = useContext(CategoryContext);

  //fetch all programs and filter by category if there is selected category
  function handleProgramPage(e: any) {
    e.preventDefault();
    page < 82 ? setPage(page + 1) : setPage(page);
  }

  let url = `http://api.sr.se/api/v2/programs?format=json&page=${page}`;
  let categoryParameter = `/index?programcategoryid=${selectedCategoryId}&format=json&page=${page}`;
  if (Number(selectedCategoryId) > 0) {
    url = `http://api.sr.se/api/v2/programs${categoryParameter}`;
  }

  //----fetch program: by page max 82 pages----
  useEffect(() => {
    async function fetchPrograms() {
      const data = (await get(url)) as any;
      const fetchedPrograms: any = data.programs.map((fetchedPrograms: any) => {
        return fetchedPrograms;
      });

      let oldFetchedPrograms: any = programs;
      if (programs == undefined) {
        oldFetchedPrograms = programArray.concat(fetchedPrograms);
      } else {
        oldFetchedPrograms = oldFetchedPrograms.concat(fetchedPrograms);
      }
      setPrograms(oldFetchedPrograms);
    }
    fetchPrograms().then((programs) => programs);
  }, [page]);

  //----fetch program: by category----
  useEffect(() => {
    async function fetchPrograms() {
      const data = (await get(url)) as any;
      const fetchedPrograms: any = data.programs.map((fetchedPrograms: any) => {
        return fetchedPrograms;
      });

      setPrograms(fetchedPrograms);
    }
    fetchPrograms().then((programs) => programs);
  }, [selectedCategoryId]);

  //----fetch searchedProgram by input in Navbar----
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
    <div id="programsContainer">
      <h2 id="programsTitle">Alla Program</h2>
      <div id="searchWrapper">
        <h3>Sök i Program</h3>
        <Categories />
        <ProgramSearchInput handleSearchedProgram={handleSearchedProgram} />
      </div>

      {/* ----------- Show selected programs if: search, or dropdown---------- */}
      <div id="programsWrapper">
        {searchedPrograms !== null &&
          searchedProgramName.length > 1 &&
          searchedPrograms!.map((program: any) => (
            <Link to={`/programs/${program.id}`} state={{ program: program }}>
              <Program program={program} key={program.id} />
            </Link>
          ))}
      </div>

      {/* ----------- Show all programs if: no search, no dropdown---------- */}
      <div id="programsWrapper">
        {searchedProgramName == "" &&
          programs !== undefined &&
          programs.length > 0 &&
          programs.map((program: any) => (
            <Link to={`/programs/${program.id}`} state={{ program: program }}>
              <Program program={program} key={program.id} />
            </Link>
          ))}
      </div>
      {page < 82 && (
        <button className="getMoreButton" onClick={(e) => handleProgramPage(e)}>
          Få mer
        </button>
      )}

      <a type="button" className="getMoreButton" href="#programsContainer">
        Gå till toppen{" "}
      </a>
    </div>
  );
};

export default Programs;
