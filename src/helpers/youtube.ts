export const getYoutubeVideoIdFromUrl = (url: string) => {
  const regex = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
  const match = url.match(regex);

  if (!match) {
    return null;
  }

  const id = match[1];

  return id;
};

export const getYoutubeEmbedUrlFromId = (id: string) => {
  const embedUrl = `https://www.youtube.com/embed/${id}`;

  return embedUrl;
};

export const getThumbnailFromYoutubeId = (id: string): string =>
  `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
