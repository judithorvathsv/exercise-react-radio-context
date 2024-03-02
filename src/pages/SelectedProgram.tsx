import { Link, useLocation } from "react-router-dom";
import BroadcastPoddSwitchPanel from "./BroadcastPoddSwitchPanel";

const SelectedProgram = () => {
  const location = useLocation();
  const { program } = location.state;

  return (
    <>
      <div id="selectedProgramContainer">
        <Link className={"selectedSectionBackButton"} to={`/programs`}>
          Tillbaka till program
        </Link>
        <section id="selectedProgramSection">
          <img src={program.programimage} alt="Program picture" id="selectedProgramImg" />
          <div id="selectedProgramInfoWrapper">
            <p id="selectedProgramTitle">{program.name}</p>
            <p className="selectedProgramInfo">{program.description}</p>

            <p className="selectedProgramInfo">{program.broadcastinfo}</p>

            {program.email && (
              <>
                <h3 className="selectedProgramInformationTitle">Kontakt information:</h3>
                <p className="selectedProgramInfo">Email: {program.email}</p>
              </>
            )}

            {program.socialmediaplatforms &&
              ((program.socialmediaplatforms[0] && program.socialmediaplatforms[0].platformurl !== undefined) ||
                (program.socialmediaplatforms[1] && program.socialmediaplatforms[1].platformurl !== undefined) ||
                (program.socialmediaplatforms[2] && program.socialmediaplatforms[2].platformurl !== undefined)) && (
                <h3 className="selectedProgramInformationTitle">Hitta oss på social media:</h3>
              )}

            <div id="selectedProgramSocialMediaIcons">
              {program.socialmediaplatforms && program.socialmediaplatforms[0] && program.socialmediaplatforms[0].platformurl !== undefined && (
                <a href={program.socialmediaplatforms[0].platformurl}>
                  <img src="/src/assets/facebookLogo1.png" alt="facebook logo" className="socailMediaIcons" id="facebookLogo" />
                </a>
              )}
              {program.socialmediaplatforms && program.socialmediaplatforms[2] && program.socialmediaplatforms[2].platformurl !== undefined && (
                <a href={program.socialmediaplatforms[2].platformurl}>
                  <img src="/src/assets/instagramLogo.png" alt="instagram logo" className="socailMediaIcons" id="instagramLogo" />
                </a>
              )}

              {program.socialmediaplatforms && program.socialmediaplatforms[1] && program.socialmediaplatforms[1].platformurl !== undefined && (
                <a href={program.socialmediaplatforms[1].platformurl}>
                  <img src="/src/assets/twitterLogo.png" alt="twitter logo" className="socailMediaIcons" id="twitterLogo" />
                </a>
              )}
            </div>
          </div>
          <h1>{program.hasondemand}</h1>
        </section>

        {/*   Broadcasts or Podds*/}
        <section id="programAllBroadCasts">
          <BroadcastPoddSwitchPanel program={program} />
        </section>
      </div>
    </>
  );
};

export default SelectedProgram;
