import { Link } from "react-router-dom";
import { LikedProgramContext } from "../contexts/LikedProgramContextProvider";
import { useContext } from "react";

const LikedPrograms = () => {
  let likedProgramsStorage: any = localStorage.getItem("likedPrograsStorage");
  let likedProgramsFromStorage = JSON.parse(likedProgramsStorage);
  let likedProgramsFromStorageArray: any[] = [];
  let likedPrograms: any[] = [];
  const { likedProgramList } = useContext(LikedProgramContext);

  //if storage is not empty -> put in array for looping
  if (likedProgramsStorage !== undefined && likedProgramsStorage !== null) {
    let programValuesFromStorage = Object.values(likedProgramsFromStorage);
    programValuesFromStorage.forEach((program) => likedProgramsFromStorageArray.push(program));
    likedPrograms = likedProgramsFromStorageArray;
  } else {
    likedPrograms = likedProgramList;
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
              <section id="favoriteProgramSection">
                <Link to={`/programs/${program.id}`} state={{ program: program }}>
                  <img src={program.programimage} alt="Program picture" id="favoriteProgramImg" />
                </Link>
                <div id="favoriteProgramInfo">
                  <p id="favoriteProgramTitle">{program.name}</p>
                  <p className="selectedProgramInfo">{program.description}</p>

                  <p className="selectedProgramInfo">{program.broadcastinfo}</p>
                  <h3 className="selectedProgramInformationTitle">Kontakt information:</h3>
                  <p className="selectedProgramInfo">Email: {program.email}</p>

                  {program.socialmediaplatforms &&
                    ((program.socialmediaplatforms[0] && program.socialmediaplatforms[0].platformurl !== undefined) ||
                      (program.socialmediaplatforms[1] && program.socialmediaplatforms[1].platformurl !== undefined) ||
                      (program.socialmediaplatforms[2] && program.socialmediaplatforms[2].platformurl !== undefined)) && (
                      <h3 className="selectedProgramInformationTitle">Hitta oss på social media:</h3>
                    )}

                  <div id="selectedProgramSocialMediaIcons">
                    {program.socialmediaplatforms && program.socialmediaplatforms[0] && program.socialmediaplatforms[0].platformurl !== undefined && (
                      <a href={program.socialmediaplatforms[0].platformurl}>
                        <img src="/src/assets/facebookLogo1.png" alt="facebook logo" className="socailMediaIcons" id="facebookLogo" />
                      </a>
                    )}
                    {program.socialmediaplatforms && program.socialmediaplatforms[2] && program.socialmediaplatforms[2].platformurl !== undefined && (
                      <a href={program.socialmediaplatforms[2].platformurl}>
                        <img src="/src/assets/instagramLogo.png" alt="instagram logo" className="socailMediaIcons" id="instagramLogo" />
                      </a>
                    )}

                    {program.socialmediaplatforms && program.socialmediaplatforms[1] && program.socialmediaplatforms[1].platformurl !== undefined && (
                      <a href={program.socialmediaplatforms[1].platformurl}>
                        <img src="/src/assets/twitterLogo.png" alt="twitter logo" className="socailMediaIcons" id="twitterLogo" />
                      </a>
                    )}
                  </div>
                </div>
              </section>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LikedPrograms;
