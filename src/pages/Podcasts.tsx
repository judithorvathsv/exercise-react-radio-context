import { useEffect, useState } from "react";
import { get } from "../utilities/http";
import { IPodcastProps } from "../interfaces";
import Podcast from "./Podcast";

const Podcasts = ({ program }: any) => {
  const [podcasts, setPodcasts] = useState<IPodcastProps[]>([]);
  const programId = program.id;

  //fetch broadcasts
  useEffect(() => {
    async function fetchPodcasts() {
      let url = `https://api.sr.se/api/v2/podfiles?programid=${programId}&format=json`;
      const data = (await get(url)) as any;
      const fetchedPodcasts: IPodcastProps[] = data.podfiles.map((fetchedPodcast: IPodcastProps) => {
        return fetchedPodcast;
      });

      setPodcasts(fetchedPodcasts);
    }
    fetchPodcasts().then((fetched) => fetched);
  }, []);
  return (
    <div id="programPodcasts">
      {podcasts.map((podcast) => (
        <Podcast podcast={podcast} key={podcast.id} />
      ))}
    </div>
  );
};

export default Podcasts;
