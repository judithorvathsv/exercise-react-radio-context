import { IProgramProps } from "./interfaces";

const Program = ({ program }: IProgramProps) => {
  return (
    <div>
      <img src={program.programimage} alt="Program picture" />
      <p>{program.name}</p>
      <p>{program.description}</p>
    </div>
  );
};

export default Program;
