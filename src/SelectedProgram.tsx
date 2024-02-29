import { Link, useParams } from "react-router-dom";

const SelectedProgram = ({ allPrograms }: any) => {
  //set selected program by url
  const params = useParams();
  const idFromUrl = params.id;
  let selectedProgram: any;
  for (let i = 0; i < allPrograms.length; i++) {
    if (allPrograms[i].id == idFromUrl) {
      selectedProgram = allPrograms[i];
    }
  }
  return (
    <>

      <div id="selectedProgramContainer">
        <Link id={"selectedSectionBackButton"} to={`/programs`}>
          Back to programs
        </Link>
        <section id="selectedProgramSection">
          <img src={selectedProgram.programimage} alt="Program picture" id="selectedProgramImg" />
          <div id="selectedProgramInfo">
            <p id="selectedProgramTitle">{selectedProgram.name}</p>
            <p>{selectedProgram.description}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SelectedProgram;
