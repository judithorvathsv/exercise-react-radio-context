import { useEffect, useState } from "react";
import { get } from "./http";

const Channel = ({ channel }: any) => {

  return (
    <>
      <div id={channel.id}>
        <img src={channel.image} alt="Channel image" />
      </div>
      <div></div>
    </>
  );
};

export default Channel;
