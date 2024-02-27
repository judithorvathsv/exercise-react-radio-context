import { ReactNode, useEffect, useState } from "react";
import { IChannelProps } from "./interfaces";
import { get } from "./http";
import Channels from "./Channels";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing.tsx";

export function App() {
  const [channels, setChannels] = useState<IChannelProps[]>();

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

  return (
    <>
      <h1>Channels:</h1>
      <BrowserRouter>
        <Routing content={content} allChannels={channels} />
      </BrowserRouter>
      <h1>Categories:</h1>
    </>
  );
}
/*
1.list of all the channels. - ok
2.all the programs on a given channel during "today" and also be able to see what airs "tomorrow" and maybe some day later in the week.
3.all the program that airs on a given channel. - ok 
4.list of all the categories. 
5.list of all the programs in a given category.
6.search for a program.
7.get information on a specific program.
8.see when a specific program airs and on which channel.
9.mark program as favorites that I can later view in a seperate view.
*/
