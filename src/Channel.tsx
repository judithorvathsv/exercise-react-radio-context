import { useState } from "react";

const Channel = ({ channel }: any) => {
  const [programs, setPrograms] = useState();

  function handleAllProgramToChannel(e: any) {
    console.log(e.currentTarget.id);
  }

  return (
    <div id={channel.id} onClick={(e) => handleAllProgramToChannel(e)}>
      <img src={channel.image} alt="Channel image" />
      <p>{channel.name}</p>
    </div>
  );
};

export default Channel;
