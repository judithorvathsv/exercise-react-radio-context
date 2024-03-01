import { useEffect, useState } from "react";
import { get } from "./http";
import Program from "./Program";
import Categories from "./Categories";
import ProgramSearchInput from "./ProgramSearchInput";
import { IOneProgramProps } from "./interfaces";
import { Link } from "react-router-dom";

export interface IProgramProps {
  getLikedPrograms: (likedPrograms: IOneProgramProps[]) => void;
}

const Programs = () => {
  const [programs, setPrograms] = useState<IOneProgramProps[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("0");
  const [searchedProgramName, setSearchedProgramName] = useState<string>("");
  const [searchedPrograms, setSearchedPrograms] = useState<IOneProgramProps[]>([]);
  const [likedPrograms, setLikedPrograms] = useState<IOneProgramProps[]>([]);
  const [page, setPage] = useState(1);
  let programArray: IOneProgramProps[] = [];

  //set selected category from Categories dropdown
  let handleSelectedCategory = (selectedCategoryId: string) => {
    setSelectedCategoryId(selectedCategoryId);
    localStorage.setItem("selectedCategoryIdStorage", selectedCategoryId);
  };

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

  //fetch program: by page max 82 pages
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

  //fetch program: by category
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

  //set liked Programs
  function onSetLikedPrograms(likedProgram: IOneProgramProps) {
    setLikedPrograms((prevLikedPrograms) => [...prevLikedPrograms, likedProgram]);
    addOrRemoveProgramToLocalStorage(likedProgram, true);
  }

  //set disliked Programs
  function removeLikedPrograms(dislikedProgram: IOneProgramProps) {
    setLikedPrograms((oldLikedPrograms) => {
      return oldLikedPrograms.filter((program) => program !== dislikedProgram);
    });
    addOrRemoveProgramToLocalStorage(dislikedProgram, false);
  }

  //send liked programs to App component.
/*   useEffect(() => {
    getLikedPrograms(likedPrograms as IOneProgramProps[]);
  }, [likedPrograms]); */

  return (
    <div id="programsContainer">
      <h2 id="programsTitle">Alla Program</h2>
      <div id="searchWrapper">
        <h3>Sök i Program</h3>
        <Categories handleSelectedCategory={handleSelectedCategory} />
        <ProgramSearchInput handleSearchedProgram={handleSearchedProgram} />
      </div>

      {/* ----------- Show selected programs if: search, or dropdown---------- */}
      <div id="programsWrapper">
        {searchedPrograms !== null &&
          searchedProgramName.length > 1 &&
          searchedPrograms!.map((program: any) => (
            <div>
              <Link to={`/programs/${program.id}`} state={{ program: program }}>
                <Program program={program} key={program.id} setLikedPrograms={onSetLikedPrograms} removeLikedPrograms={removeLikedPrograms} />
              </Link>
            </div>
          ))}
      </div>

      {/* ----------- Show all programs if: no search, no dropdown---------- */}
      <div id="programsWrapper">
        {searchedProgramName == "" &&
          programs !== undefined &&
          programs.length > 0 &&
          programs.map((program: any) => (
            <div>
              <Link to={`/programs/${program.id}`} state={{ program: program }}>
                <Program program={program} key={program.id} setLikedPrograms={onSetLikedPrograms} removeLikedPrograms={removeLikedPrograms} />
              </Link>
            </div>
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
