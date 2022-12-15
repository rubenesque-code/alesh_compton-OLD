export type LocalImage = {
  type: "image";
  url: string;
};

export type VideoCoverImage = {
  coverImage?: {
    url: string;
    yPosition?: number;
  };
};

export type YoutubeVideo = {
  type: "youtube-video";
  youtubeUrl: string;
} & VideoCoverImage;

export type Page = {
  title: string;
  description?: string[];
  media: (LocalImage | YoutubeVideo)[];
};

export type PageRoute =
  | {
      label: string;
      route: string;
    }
  | string;
