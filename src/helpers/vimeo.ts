export const getVimeoVideoIdFromUrl = (url: string) => {
  // const regex = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
  const regex =
    /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
  const match = url.match(regex);
  console.log("match:", match);

  if (!match) {
    return null;
  }

  const id = match[5];

  return id;
};

export const getYoutubeEmbedUrlFromId = (id: string) => {
  const embedUrl = `https://www.youtube.com/embed/${id}`;

  return embedUrl;
};

export const getThumbnailFromYoutubeId = (id: string): string =>
  `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
