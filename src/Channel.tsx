const Channel = ({ channel }: any) => {
  return (
    <div id={channel.id} className="channelDiv">
      <img src={channel.image} alt="Channel image" id="channelImg" />
    </div>
  );
};

export default Channel;
