export const getYoutubeVideoIdFromUrl = (url: string) => {
  const regex = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
  const match = url.match(regex);

  if (!match) {
    return null;
  }

  const id = match[1];

  return id;
};

export const getYoutubeEmbedUrlFromId = ({
  id,
  autoplay,
}: {
  id: string;
  autoplay?: boolean;
}) => {
  const embedUrl = `https://www.youtube.com/embed/${id}${
    autoplay ? "?enablejsapi=1" : ""
  }`;
  console.log("embedUrl:", embedUrl);

  return embedUrl;
};
