import { useParams } from "react-router-dom";
import Channel from "./Channel";
import { ReactNode, useEffect, useState } from "react";
import { get } from "./http";
import ChannelPrograms from "./ChannelPrograms";

const SelectedChannel = ({ allChannels }: { allChannels: any }) => {
  const params = useParams();
  const idFromUrl = params.id;
  let selectedChannel: any;

  for (let i = 0; i < allChannels.length; i++) {
    if (allChannels[i].id == idFromUrl) {
      selectedChannel = allChannels[i];
    }
  }

  const [programs, setPrograms] = useState(null);

  useEffect(() => {
    async function fetchPrograms() {
      let url = `http://api.sr.se/api/v2/programs/index?channelid=${selectedChannel.id}&format=json`;
      const data = (await get(url)) as any;
      const fetchedProgramsToSelectedChannel: any = data.programs.map((fetchedPrograms: any) => {
        return fetchedPrograms;
      });
      setPrograms(fetchedProgramsToSelectedChannel);
    }
    fetchPrograms().then((programs) => programs);
  }, []);

  let content: ReactNode;
  if (programs) {
    content = <ChannelPrograms allPrograms={programs} />; 
  }

  return (
    <>
      <Channel channel={selectedChannel} />
      <p>Programs</p>
      <div>{content}</div>
    </>
  );
};

export default SelectedChannel;
