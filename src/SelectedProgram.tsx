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
          Tillbaka till program
        </Link>
        <section id="selectedProgramSection">
          <img src={selectedProgram.programimage} alt="Program picture" id="selectedProgramImg" />
          <div id="selectedProgramInfo">
            <p id="selectedProgramTitle">{selectedProgram.name}</p>
            <p className="selectedProgramInfo">{selectedProgram.description}</p>

            <p className="selectedProgramInfo">{selectedProgram.broadcastinfo}</p>
            <h3 className="selectedProgramInformationTitle">Kontakt information:</h3>
            <p className="selectedProgramInfo">Email: {selectedProgram.email}</p>

            <h3 className="selectedProgramInformationTitle">Hitta oss på social media:</h3>
            <a href={selectedProgram.socialmediaplatforms[0].platformurl}>
              <img src="/src/assets/facebookLogo1.png" alt="facebook logo" className="socailMediaIcons" id="facebookLogo" />
            </a>
            <a href={selectedProgram.socialmediaplatforms[2].platformurl}>
              <img src="/src/assets/instagramLogo.png" alt="instagram logo" className="socailMediaIcons" id="instagramLogo" />
            </a>
            <a href={selectedProgram.socialmediaplatforms[1].platformurl}>
              <img src="/src/assets/twitterLogo.png" alt="twitter logo" className="socailMediaIcons" id="twitterLogo" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default SelectedProgram;
