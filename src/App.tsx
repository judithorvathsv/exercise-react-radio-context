import { ReactNode, useEffect, useState } from "react";
import { get } from "./http";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing.tsx";
import NavBar from "./NavBar.tsx";
import Channels from "./Channels";
import Programs from "./Programs.tsx";
import { IChannelProps, IProgramProps } from "./interfaces";

export function App() {
  const [channels, setChannels] = useState<IChannelProps[]>();
  const [programs, setPrograms] = useState<IProgramProps[]>();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("0");

  //set selected category from Categories dropdown
  let onhandleSelectedCategory = (selectedCategoryId: string) => {
    setSelectedCategoryId(selectedCategoryId);
  };

  //fetch channels
  useEffect(() => {
    async function fetchChannels() {
      const data = (await get("https://api.sr.se/api/v2/channels?format=json")) as any;
      const fetchedChannels: IChannelProps[] = data.channels.map((fetchedChannel: IChannelProps) => {
        return fetchedChannel;
      });
      setChannels(fetchedChannels);
    }
    fetchChannels().then((channels) => channels);
  }, []);

  let content: ReactNode;
  if (channels) {
    content = <Channels allChannels={channels} />;
  }

  //fetch all programs and filter by category if there is selected category
  let url = `http://api.sr.se/api/v2/programs?format=json`;
  let categoryParameter = `/index?programcategoryid=${selectedCategoryId}&format=json`;
  if (Number(selectedCategoryId) > 0) {
    url = `http://api.sr.se/api/v2/programs${categoryParameter}`;
  }

  useEffect(() => {
    async function fetchPrograms() {
      const data = (await get(url)) as any;
      const fetchedPrograms: any = data.programs.map((fetchedPrograms: any) => {
        return fetchedPrograms;
      });
      setPrograms(fetchedPrograms);
    }
    fetchPrograms().then((programs) => programs);
  }, [selectedCategoryId]);

  let programcontent: ReactNode;
  if (programs) {
    programcontent = <Programs allPrograms={programs} handleSelectedCategory={onhandleSelectedCategory} />;
  }

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routing
          content={content}
          allChannels={channels}
          programcontent={programcontent}
          handleSelectedCategory={onhandleSelectedCategory}
          selectedCategoryId={selectedCategoryId}
        />
      </BrowserRouter>
    </>
  );
}
/*
1.all the programs on a given channel during "today" and also be able to see what airs "tomorrow" and maybe some day later in the week.
2.search for a program. -->
3.get information on a specific program. -->
4.see when a specific program airs and on which channel.
5.mark program as favorites that I can later view in a seperate view.
*/
