export interface IRoute {
  id: number;
  name: string;
  path: string;
}

export interface IChannelProps {
  image: string;
  imagetemplate: string;
  color: string;
  tagline: string;
  siteurl: string;
  liveaudio: {
    id: number;
    url: string;
    statkey: string;
  };
  scheduleurl: string;
  channeltype: string;
  xmltvid: string;
  id: number;
  name: string;
}

export interface IProgramsProps {
  allPrograms: any;
  handleSelectedCategory: (selectedOption: string) => void;
}

export interface IProgramProps {
  program: {
    id: number;
    programimage: string;
    name: string;
    description: string;
  };
}

export interface IProgramCategoryProps {
  id: number;
  name: string;
}

export interface ICategoryPops {
  handleSelectedCategory: (selectedOption: string) => void;
}
