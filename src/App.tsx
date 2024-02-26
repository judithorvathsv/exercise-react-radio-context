import { ReactNode, useEffect, useState } from "react";
import { IChannelProps } from "./interfaces";
import { get } from "./http";
import Channels from "./Channels";

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
      <main>{content}</main>
    </>
  );
}
