export const getYouTubeEmbedUrl = (url: string) => {
  const match = url.match(
    /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
};
