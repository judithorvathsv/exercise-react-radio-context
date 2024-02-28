import { IProgramProps } from "./interfaces";

const Program = ({ program }: IProgramProps) => {
  return (
    <div id="programWrapper">
      <img src={program.programimage} alt="Program picture" id="programImg" />
      <div id="programInfo">
        <p id='programTitle'>{program.name}</p>
        <hr id='programHr'/>
        <p id='programDescription'>{program.description}</p>
      </div>
    </div>
  );
};

export default Program;
