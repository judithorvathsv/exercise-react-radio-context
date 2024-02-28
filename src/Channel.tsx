import { useParams } from "react-router-dom";

const Channel = ({ channel }: any) => {
  return (
    <div id={channel.id}>
      <img src={channel.image} alt="Channel image" />
    </div>
  );
};

export default Channel;
