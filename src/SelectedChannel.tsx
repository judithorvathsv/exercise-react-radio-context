import { useParams } from "react-router-dom";
import Channel from "./Channel";
import { ReactNode, useEffect, useState } from "react";
import { get } from "./http";
import Programs from "./Programs";

const SelectedChannel = ({
  allChannels,
  handleSelectedCategory,
  selectedCategoryId,
}: {
  allChannels: any;
  handleSelectedCategory: any;
  selectedCategoryId: string;
}) => {
  //set selected channel
  const params = useParams();
  const idFromUrl = params.id;
  let selectedChannel: any;
  for (let i = 0; i < allChannels.length; i++) {
    if (allChannels[i].id == idFromUrl) {
      selectedChannel = allChannels[i];
    }
  }

  const [programs, setPrograms] = useState(null);
  //fetch all programs for selected channel and filter by category if there is selected category
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

  //-----------------------------------
  let content: ReactNode;
  if (programs) {
    content = <Programs allPrograms={programs} handleSelectedCategory={handleSelectedCategory} />;
  }

  //---------------------------------------------
  return (
    <>
      <Channel channel={selectedChannel} />
      <p>Programs</p>
      <div>{content}</div>
    </>
  );
};

export default SelectedChannel;
