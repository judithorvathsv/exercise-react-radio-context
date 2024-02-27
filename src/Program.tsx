import { IProgramProps } from "./interfaces";

const Program = ({ program }: IProgramProps) => {
  return (
    <>
      <div>
        <img src={program.programimage} alt="" />
        <p>{program.name}</p>
        <p>{program.description}</p>
      </div>
      <div></div>
    </>
  );
};

export default Program;
