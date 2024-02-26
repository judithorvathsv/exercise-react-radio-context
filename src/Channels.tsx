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
          <Channel channel={channel} key={channel.id} />
        ))}
      </div>
    </div>
  );
};

export default Channels;
