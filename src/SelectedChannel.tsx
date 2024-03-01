import { Link, useLocation } from "react-router-dom";
import { ReactNode, useEffect, useState } from "react";
import { get } from "./http";
import Program from "./Program";
import Categories from "./Categories";

const SelectedChannel = () => {
  const [programs, setPrograms] = useState([]);
  const [newCategory, setNewCategory] = useState<string>("");

  let selectedCategoryId = localStorage.getItem("selectedCategoryIdStorage");
  const location = useLocation();
  const { channel } = location.state;

  //change category
  function handleSelectedCategory(categoryIdString: string) {
    setNewCategory(categoryIdString);
  }

  //fetch all programs for selected channel and filter by category if there is selected category
  if (Number(newCategory) > 1) {
    console.log(newCategory);
    selectedCategoryId = newCategory;
  }
  let url = `http://api.sr.se/api/v2/programs/index?channelid=${channel.id}&format=json`;
  if (Number(selectedCategoryId) > 0) {
    url = `http://api.sr.se/api/v2/programs/index?channelid=${channel.id}&programcategoryid=${selectedCategoryId}&format=json`;
  }

  useEffect(() => {
    async function fetchPrograms() {
      const data = (await get(url)) as any;
      const fetchedProgramsToSelectedChannel: any = data.programs.map((fetchedPrograms: any) => {
        return fetchedPrograms;
      });
      setPrograms(fetchedProgramsToSelectedChannel);
    }
    fetchPrograms().then((programs) => programs);
  }, [selectedCategoryId]);

  let content: ReactNode;
  if (programs) {
    content = programs.map((program: any) => (
      <Link to={`/programs/${program.id}`} state={{ program: program }}>
        <div>
          <Program program={program} key={program.id} />
        </div>
      </Link>
    ));
  }

  return (
    <div id="selectedChannelContainer">
      <Link id={"selectedSectionBackButton"} to={`/`}>
        Tillbaka till kanaler
      </Link>
      <section id="selectedChannelSection">
        <div id={channel.id} className="selectedChannelWrapperDiv">
          <img src={channel.image} alt="Channel image" id="selectedChannelImg" />
          <div id="selectedChannelInfo">
            <p id="selectedChannelTitle">{channel.name}</p>
            <p>{channel.tagline}</p>
            <figure>
              <figcaption>Lyssna på {channel.name}:</figcaption>
              <audio controls src={channel.liveaudio.url}></audio>
            </figure>
          </div>
        </div>
        <hr />
      </section>
      <Categories handleSelectedCategory={handleSelectedCategory} />
      <p id="selectedChannelProgramTitle">Program</p>
      <div id="selectedChannelProgramWrapper">
        <div id="content">{content}</div>
      </div>
    </div>
  );
};

export default SelectedChannel;
