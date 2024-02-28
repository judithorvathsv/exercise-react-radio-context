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
    <div>
      <Link to={`/programs`}>Back to programs</Link>
      <p>SELECTED</p>
      <img src={selectedProgram.programimage} alt="Program picture" />
      <p>{selectedProgram.name}</p>
      <p>{selectedProgram.description}</p>
    </div>
  );
};

export default SelectedProgram;
