import { Link, useLocation } from "react-router-dom";

const SelectedProgram = () => {
  const location = useLocation();
  const { program } = location.state;

  return (
    <>
      <div id="selectedProgramContainer">
        <Link id={"selectedSectionBackButton"} to={`/programs`}>
          Tillbaka till program
        </Link>
        <section id="selectedProgramSection">
          <img src={program.programimage} alt="Program picture" id="selectedProgramImg" />
          <div id="selectedProgramInfo">
            <p id="selectedProgramTitle">{program.name}</p>
            <p className="selectedProgramInfo">{program.description}</p>

            <p className="selectedProgramInfo">{program.broadcastinfo}</p>
            <h3 className="selectedProgramInformationTitle">Kontakt information:</h3>
            <p className="selectedProgramInfo">Email: {program.email}</p>

            <h3 className="selectedProgramInformationTitle">Hitta oss på social media:</h3>
            {program.socialmediaplatforms && program.socialmediaplatforms[0].platformurl && (
              <a href={program.socialmediaplatforms[0].platformurl}>
                <img src="/src/assets/facebookLogo1.png" alt="facebook logo" className="socailMediaIcons" id="facebookLogo" />
              </a>
            )}
            {program.socialmediaplatforms && program.socialmediaplatforms[2].platformurl && (
              <a href={program.socialmediaplatforms[2].platformurl}>
                <img src="/src/assets/instagramLogo.png" alt="instagram logo" className="socailMediaIcons" id="instagramLogo" />
              </a>
            )}

            {program.socialmediaplatforms && program.socialmediaplatforms[1].platformurl && (
              <a href={program.socialmediaplatforms[1].platformurl}>
                <img src="/src/assets/twitterLogo.png" alt="twitter logo" className="socailMediaIcons" id="twitterLogo" />
              </a>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default SelectedProgram;
