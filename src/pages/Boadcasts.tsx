import { useEffect, useState } from "react";
import { get } from "../utilities/http";
import Broadcast from "./Broadcast";
import { IBroadcastProps } from "../interfaces";

const Boadcasts = ({ program }: any) => {
  const [broadcasts, setBroadcasts] = useState<IBroadcastProps[]>([]);
  const programId = program.id;

  //fetch broadcasts
  useEffect(() => {
    async function fetchBroadcasts() {
      let url = `https://api.sr.se/api/v2/broadcasts?programid=${programId}&format=json`;
      const data = (await get(url)) as any;
      const fetchedBroadcasts: IBroadcastProps[] = data.broadcasts.map((fetchedBroadcast: IBroadcastProps) => {
        return fetchedBroadcast;
      });

      setBroadcasts(fetchedBroadcasts);
    }
    fetchBroadcasts().then((fetched) => fetched);
  }, []);

  return (
    <>
      <div id="programBroadcasts">
        {broadcasts.map((broadcast) => (
          <Broadcast broadcast={broadcast} key={broadcast.id} />
        ))}
      </div>
    </>
  );
};

export default Boadcasts;
