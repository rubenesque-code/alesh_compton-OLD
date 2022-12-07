type LocalImage = {
  type: "image";
  url: string;
};
type YoutubeVideo = {
  type: "youtube-image";
  youtubeId: string;
};

export type Page = {
  title: string;
  description?: string | string[];
  media: (LocalImage | YoutubeVideo)[];
};
