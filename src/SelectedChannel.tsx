import { useParams } from "react-router-dom";
import Channel from "./Channel";
import { ReactNode, useEffect, useState } from "react";
import { get } from "./http";
import { ISelectedChannelProps } from "./interfaces";
import Program from "./Program";
import Categories from "./Categories";

const SelectedChannel = ({ allChannels, selectedCategoryId }: ISelectedChannelProps) => {
  const [programs, setPrograms] = useState(null);
  const [newCategory, setNewCategory] = useState<string>("");

  //set selected channel by url
  const params = useParams();
  const idFromUrl = params.id;
  let selectedChannel: any;
  for (let i = 0; i < allChannels.length; i++) {
    if (allChannels[i].id == idFromUrl) {
      selectedChannel = allChannels[i];
    }
  }

  //change category
  function handleSelectedCategory(categoryIdString: string) {
    setNewCategory(categoryIdString);
  }

  //fetch all programs for selected channel and filter by category if there is selected category
  if (Number(newCategory) > 1) {
    console.log(newCategory);
    selectedCategoryId = newCategory;
  }
  let url = `http://api.sr.se/api/v2/programs/index?channelid=${selectedChannel.id}&format=json`;
  if (Number(selectedCategoryId) > 0) {
    url = `http://api.sr.se/api/v2/programs/index?channelid=${selectedChannel.id}&programcategoryid=${selectedCategoryId}&format=json`;
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
      <div>
        <Program program={program} key={program.id} />
      </div>
    ));
  }

  return (
    <>
      <Channel channel={selectedChannel} />
      <Categories handleSelectedCategory={handleSelectedCategory} />
      <p>Programs</p>
      <div>{content}</div>
    </>
  );
};

export default SelectedChannel;
