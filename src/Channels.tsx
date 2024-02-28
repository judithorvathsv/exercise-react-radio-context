import { Link } from "react-router-dom";
import Channel from "./Channel";
import { IChannelProps, IChannelsProps } from "./interfaces";
import { useEffect, useState } from "react";
import { get } from "./http";



const Channels = ({ getAllChannels }: IChannelsProps) => {
  const [channels, setChannels] = useState<IChannelProps[]>();

  //fetch channels
  useEffect(() => {
    async function fetchChannels() {
      const data = (await get("https://api.sr.se/api/v2/channels?format=json")) as any;
      const fetchedChannels: IChannelProps[] = data.channels.map((fetchedChannel: IChannelProps) => {
        return fetchedChannel;
      });
      setChannels(fetchedChannels);
      getAllChannels(fetchedChannels);
    }
    fetchChannels().then((channels) => channels);
  }, []);

  return (
    <div>
      <div>
        {channels !== undefined &&
          channels.length > 0 &&
          channels.map((channel: any) => (
            <Link to={`/channels/${channel.id}`}>
              <Channel channel={channel} key={channel.id} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Channels;
