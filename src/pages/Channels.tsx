import { Link } from "react-router-dom";
import Channel from "./Channel";
import { IChannelProps } from "../interfaces";
import { useEffect, useState } from "react";
import { get } from "../utilities/http";

const Channels = () => {
  const [channels, setChannels] = useState<IChannelProps[]>();
  const [page, setPage] = useState(1);
  let channelArray: IChannelProps[] = [];

  //fetch channels
  useEffect(() => {
    async function fetchChannels() {
      const data = (await get(`https://api.sr.se/api/v2/channels?format=json&page=${page}`)) as any;
      const fetchedChannels: IChannelProps[] = data.channels.map((fetchedChannel: IChannelProps) => {
        return fetchedChannel;
      });

      let oldFetchedChannels: any = channels;
      if (channels == undefined) {
        oldFetchedChannels = channelArray.concat(fetchedChannels);
      }
      oldFetchedChannels = oldFetchedChannels.concat(fetchedChannels);
      setChannels(oldFetchedChannels);
    }

    fetchChannels().then((fetched) => fetched);
  }, [page]);

  function handlePage(e: any) {
    e.preventDefault();
    page < 6 ? setPage(page + 1) : setPage(page);
  }

  return (
    <section id="channelSection">
      <h2 id="channelsTitle">Alla kanaler</h2>
      <div className="channelWrapperDiv">
        {channels !== undefined &&
          channels.length > 0 &&
          channels.map((channel: any) => (
            <Link to={`/channels/${channel.id}`} state={{ channel: channel }}>
              <Channel channel={channel} key={channel.id} />
            </Link>
          ))}
      </div>
      {page < 6 && (
        <button className="getMoreButton" onClick={(e) => handlePage(e)}>
          Få mer
        </button>
      )}
      {page == 6 && (
        <a type="button" className="getMoreButton" href="#channelSection">
          Gå till toppen
        </a>
      )}
    </section>
  );
};

export default Channels;
