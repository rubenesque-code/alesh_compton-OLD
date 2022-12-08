export type LocalImage = {
  type: "image";
  url: string;
};
export type YoutubeVideo = {
  type: "youtube-video";
  youtubeUrl: string;
};

export type Page = {
  title: string;
  description?: string | string[];
  media: (LocalImage | YoutubeVideo)[];
};
