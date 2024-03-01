import { Link } from "react-router-dom";

const LikedPrograms = ({ likedPrograms }: any) => {
  let likedProgramsStorage: any = localStorage.getItem("likedPrograsStorage");
  let likedProgramsFromStorage = JSON.parse(likedProgramsStorage);
  let likedProgramsFromStorageArray: any[] = [];

  //if storage is not empty -> put in array for looping
  if (likedProgramsStorage !== undefined && likedProgramsStorage !== null) {
    let programValuesFromStorage = Object.values(likedProgramsFromStorage);
    programValuesFromStorage.forEach((program) => likedProgramsFromStorageArray.push(program));
    console.log(likedProgramsFromStorageArray);
    likedPrograms = likedProgramsFromStorageArray;
  }

  if (likedPrograms.length == 0) {
    return (
      <div id="favoriteContainer">
        <h2 id="favoriteProgramsTitle">Dina favoritprogram:</h2>
        <p>You don't have any favorite program</p>
      </div>
    );
  }

  return (
    <div id="favoriteContainer">
      <h2 id="favoriteProgramsTitle">Dina favoritprogram:</h2>
      <div>
        {likedPrograms !== undefined &&
          likedPrograms.length > 0 &&
          likedPrograms.map((program: any) => (
            <div>
              <Link to={`/programs/${program.id}`}>
                <section id="favoriteProgramSection">
                  <img src={program.programimage} alt="Program picture" id="favoriteProgramImg" />
                  <div id="favoriteProgramInfo">
                    <p id="favoriteProgramTitle">{program.name}</p>
                    <p>{program.description}</p>
                  </div>
                </section>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LikedPrograms;
