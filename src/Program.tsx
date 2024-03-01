import { useEffect } from "react";
import { IProgramProps } from "./interfaces";

const Program = ({ program, setLikedPrograms, removeLikedPrograms }: IProgramProps) => {
  useEffect(() => {
    let likedProgramsStorage: any = localStorage.getItem("likedPrograsStorage");
    let likedProgramsFromStorage = JSON.parse(likedProgramsStorage);

    if (likedProgramsStorage !== undefined && likedProgramsStorage !== null) {
      let programValuesFromStorage = Object.values(likedProgramsFromStorage);
      programValuesFromStorage.forEach((storedProgram: any) => {
        if (storedProgram.id === program.id) {
          let spanId = `sp${program.id}`;
          let heartSpan = document.getElementById(spanId)!;
          heartSpan.style.display = "none";

          let heartId = `heart${program.id}`;
          let heartImage = document.getElementById(heartId)!;
          heartImage.style.display = "inline-block";
        }
      });
    }
  }, []);

  //like program
  function handleLikedPrograms(e: any) {
    e.preventDefault();
    if (program !== undefined) {
      let spanId = `sp${program.id}`;
      let heartSpan = document.getElementById(spanId)!;
      heartSpan.style.display = "none";

      let heartId = `heart${program.id}`;
      let heartImage = document.getElementById(heartId)!;
      heartImage.style.display = "inline-block";

      setLikedPrograms!(program);
    }
  }
  //dislike program
  function removeLikedProgram(e: any) {
    e.preventDefault();
    if (program !== undefined) {
      let spanId = `sp${program.id}`;
      let heartSpan = document.getElementById(spanId)!;
      heartSpan.style.display = "inline-block";

      let heartId = `heart${program.id}`;
      let heartImage = document.getElementById(heartId)!;
      heartImage.style.display = "none";

      removeLikedPrograms!(program);
    }
  }

  return (
    <>
      <section id="programWithHeart">
        <span id={"sp" + program.id} className="material-symbols-outlined heart" onClick={(e) => handleLikedPrograms(e)}>
          favorite
        </span>
        <img id={"heart" + program.id} className="loveHeartImg" src="/src/assets/love.png" alt="heart" onClick={(e) => removeLikedProgram(e)} />
        <div id="programWrapper">
          <img src={program.programimage} alt="Program picture" id="programImg" />
          <div id="programInfo">
            <p id="programTitle">{program.name}</p>
            <hr id="programHr" />
            <p id="programDescription">{program.description}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Program;
