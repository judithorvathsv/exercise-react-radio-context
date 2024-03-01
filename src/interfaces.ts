export interface IRoute {
  id: number;
  name: string;
  path: string;
}

export interface IRoutingProps {
  getLikedPrograms: (likedPrograms: any) => void;
  likedPrograms: IOneProgramProps[];
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

export interface IChannelsProps {
  getAllChannels: (allChannels: any) => void;
}

export interface ISelectedChannelProps {
  allChannels: any;
  selectedCategoryId: string;
}

export interface IProgramProps {
  program: IOneProgramProps;
  setLikedPrograms?: (program: IOneProgramProps) => void;
  removeLikedPrograms?: (program: IOneProgramProps) => void;
}

export interface IOneProgramProps {
  id: number;
  programimage: string;
  name: string;
  description: string;
}

export interface ISearchedProgramProps {
  id: number;
  programimage: string;
  name: string;
  description: string;
}

export interface IProgramSearchInputProps {
  handleSearchedProgram: (serachedName: string) => void;
}

export interface IProgramCategoryProps {
  id: number;
  name: string;
}

export interface ICategoryPops {
  handleSelectedCategory: (selectedOption: string) => void;
}
