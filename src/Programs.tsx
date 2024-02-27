import Program from "./Program";
import Categories from "./Categories";
import { IProgramsProps } from "./interfaces";

const Programs = ({ allPrograms, handleSelectedCategory }: IProgramsProps) => {
  return (
    <>
      <Categories handleSelectedCategory={handleSelectedCategory} />
      <div>
        {allPrograms.map((program: any) => (
          <div>
            <Program program={program} key={program.id} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Programs;
