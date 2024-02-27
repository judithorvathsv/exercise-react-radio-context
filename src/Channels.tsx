import { Link } from "react-router-dom";
import Channel from "./Channel";
import { IChannelProps } from "./interfaces";

interface IAllChannelsProps {
  allChannels: IChannelProps[];
}

const Channels = ({ allChannels }: IAllChannelsProps) => {
  return (
    <div>
      <div>
        {allChannels.map((channel: IChannelProps) => (
          <Link to={`/channels/${channel.id}`}>
            <Channel channel={channel} key={channel.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Channels;
