import { IProgramSearchInputProps } from "./interfaces";

const ProgramSearchInput = ({ handleSearchedProgram }: IProgramSearchInputProps) => {
  function getSearchedProgram(serachedName: string) {
    handleSearchedProgram(serachedName);
  }

  return (
    <div>
      <input type="text" onChange={(e) => getSearchedProgram(e.currentTarget.value)} />
    </div>
  );
};

export default ProgramSearchInput;
